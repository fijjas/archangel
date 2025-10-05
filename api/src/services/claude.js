import Anthropic from '@anthropic-ai/sdk';
import logger from '../utils/logger.js';
import { extractJSON } from "../utils/response-parser.js";
import { langCodes } from "../utils/lang-codes.js";

var claude = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY
});

/**
 * Detect language from user text
 */
export async function detectLanguage(text) {
  try {
    var supportedLanguages = langCodes;
    var response = await claude.messages.create({
      model: 'claude-3-5-haiku-20241022',
      max_tokens: 100,
      messages: [{
        role: 'user',
        content: `Detect the language of this text and return only the ISO 639-1 code (2 letters).

Text: "${text}"

Return only the code, nothing else. Examples: en, pl, de, fr`
      }]
    });

    var langCode = response.content[0].text.trim().toLowerCase();
    logger.info(`Detected language (raw): ${langCode}`);

    // Validate
    return supportedLanguages.includes(langCode) ? langCode : 'en';

  } catch (error) {
    logger.error('Language detection failed:', error);
    return 'en'; // Default to English
  }
}

/**
 * Analyze user intent from message
 */
export async function analyzeIntent(userText, userLanguage) {
  try {
    var prompt = `Analyze user message and determine intent.

User message: "${userText}"
User language: ${userLanguage}

Possible intents:
1. "update_profile" - user wants to update their personal info
2. "change_language" - wants to switch language (extract target language)
3. "add_news_source" - wants to add new news source (extract name/url)
4. "remove_news_source" - wants to remove source (extract name)
5. "check_now" - wants immediate alerts refresh/safety check
6. "show_alerts" - wants to see current alerts
7. "show_sources" - wants to see their news sources
8. "help" - needs help/instructions
9. "unclear" - unclear what user wants
10. "delete_profile" - wants to delete/reset their profile

Return JSON:
{
  "type": "intent_name",
  "confidence": 0-1,
  "data": {
    // extracted data based on intent
  }
}`;

    var response = await claude.messages.create({
      model: 'claude-3-5-haiku-20241022',
      max_tokens: 1024,
      messages: [{ role: 'user', content: prompt }]
    });

    return extractJSON(response.content[0].text);

  } catch (error) {
    logger.error('Intent analysis failed:', error);
    return { type: 'unclear', confidence: 0, data: {} };
  }
}

/**
 * Extract profile data from user text (dynamic structure)
 */
export async function extractProfile(userText, currentProfile = null) {
  try {
    var prompt = `Extract ALL relevant safety information from user text.
DO NOT limit to predefined fields. Extract anything that might be relevant for personal safety.

User text: "${userText}"
Current profile: ${currentProfile ? JSON.stringify(currentProfile) : 'none'}

Extract everything relevant. Examples of what to look for:
- Location, citizenship, legal status
- Age, gender, occupation, employer
- Family, dependents, relatives abroad
- Political views, activism, public visibility
- Health conditions, disabilities
- LGBTQ, ethnic/religious minority status
- Military status, draft concerns
- Languages spoken
- Travel plans
- Financial situation
- ANY other safety-relevant information

Return JSON with dynamic structure:
{
  "extracted": {
    // any fields relevant from the text
    // be creative and comprehensive
  },
  "confidence": 0-1,
  "missing_info": ["what important info is still unknown"]
}`;

    var response = await claude.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4096,
      messages: [{ role: 'user', content: prompt }]
    });
    var result = extractJSON(response.content[0].text);

    // logger.info('extracted profile: ', result.extracted);

    // Merge with existing profile if present
    if (currentProfile) {
      result.extracted = { ...currentProfile, ...result.extracted };
    }

    return result;

  } catch (error) {
    logger.error('Profile extraction failed:', error);
    return { extracted: {}, confidence: 0, missing_info: [] };
  }
}

/**
 * Analyze news relevance for user
 */
export async function analyzeNewsRelevance(newsItem, userProfile, userLanguage) {
  try {
    var prompt = `Analyze this news for PERSONAL safety relevance to a specific user.

NEWS:
Title: ${newsItem.title}
Description: ${newsItem.description}
Source: ${newsItem.source}

USER PROFILE:
${JSON.stringify(userProfile, null, 2)}

Analyze:
1. Is this personally relevant to THIS user?
2. What is the urgency level?
3. What specific actions should user take?
4. How does this impact their safety/legal status/family/work?

Generate alert message in ${userLanguage} language.

Return JSON:
{
  "is_relevant": boolean,
  "relevance_score": 0-1,
  "urgency": "critical/high/medium/low",
  "title": "Alert title in ${userLanguage}",
  "message": "Detailed message in ${userLanguage}",
  "action_required": "Required actions in ${userLanguage}",
  "timeframe": "Urgency timeframe in ${userLanguage}",
  "reasoning": "why relevant for this user"
}`;

    var response = await claude.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 2048,
      messages: [{ role: 'user', content: prompt }]
    });

    return extractJSON(response.content[0].text);

  } catch (error) {
    logger.error('News analysis failed:', error);
    return { is_relevant: false, relevance_score: 0 };
  }
}

/**
 * Discover personalized news sources for user
 */
export async function discoverNewsSources(userProfile) {
  try {
    var prompt = `You are a news source verification expert.
Analyze user profile and provide trusted news sources.
Do not return any non-scrapable sources like Telegram, WhatsApp, Discord, etc.
Do not return RSS feed if you are not sure the link exists.

USER PROFILE:
${JSON.stringify(userProfile, null, 2)}

CRITICAL: Analyze press freedom in involved countries. If authoritarian:
- PRIORITIZE independent/exiled/banned media
- DISTRUST state media (propaganda)
- Sources labeled "undesirable" or "foreign agent" are MORE credible

Required source categories (cover ALL relevant to user):
1. MILITARY/WARFARE: Military operations, armed conflicts, invasions, escalations, ceasefires
2. MOBILIZATION: Military draft, conscription, border closures, martial law
3. LEGAL/IMMIGRATION: Law changes, visa policy, deportation, migration restrictions
4. PERSECUTION: Targeting of ethnic/religious/political groups, human rights violations
5. NATURAL DISASTERS: Earthquakes, tsunamis, floods, hurricanes, volcanic eruptions, wildfires
6. TERRORISM: Terrorist attacks, extremist activities, security threats
7. ECONOMIC/SANCTIONS: Economic crises, sanctions, trade restrictions, currency collapse, banking failures
8. POLITICS: Regime changes, coups, elections, political instability, protests
9. INDEPENDENT MEDIA: Opposition/exiled sources from authoritarian countries
10. GLOBAL SECURITY: WMD threats, nuclear incidents, biological threats, major accidents

Return JSON:
{
  "sources": [
    {
      "name": "source name",
      "url": "URL",
      "type": "independent/international/legal/economic/military/disaster/political",
      "relevance": "why critical for this user",
      "trust_score": 0-10,
      "topics": ["military", "mobilization", "earthquakes", etc.]
    }
  ]
}

Provide 8-12 sources covering ALL user-specific risks.`;

    var response = await claude.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4096,
      messages: [{ role: 'user', content: prompt }]
    });
    var result = extractJSON(response.content[0].text);
    return result.sources || [];

  } catch (error) {
    logger.error('Source discovery failed:', error);
    return [];
  }
}

export default claude;
