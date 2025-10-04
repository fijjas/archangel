import axios from 'axios';
import Parser from 'rss-parser';
import * as cheerio from 'cheerio';
import claude from './claude.js';
import logger from '../utils/logger.js';

var rssParser = new Parser();

/**
 * Validate news source credibility using Claude
 */
export async function validateNewsSource(userText, userLanguage) {
  try {
    var prompt = `Validate this news source for credibility and safety monitoring.

User request: "${userText}"
User language: ${userLanguage}

Analyze:
1. Is this a real, existing news source?
2. What is trust score (0-10)?
3. Is it independent/state-controlled?
4. What topics does it cover?
5. Is it suitable for safety monitoring?

Return JSON:
{
  "is_valid": boolean,
  "name": "official name",
  "url": "canonical URL",
  "type": "independent/state/international/local",
  "trust_score": 0-10,
  "relevance": "why useful for safety",
  "topics": ["military", "legal", etc.],
  "reason": "why valid or invalid"
}`;

    var response = await claude.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      messages: [{ role: 'user', content: prompt }]
    });

    return JSON.parse(response.content[0].text);

  } catch (error) {
    logger.error('Source validation failed:', error);
    return {
      is_valid: false,
      reason: 'Validation failed'
    };
  }
}

/**
 * Fetch news from source
 */
export async function fetchNewsFromSource(source) {
  try {
    logger.info(`Fetching news from: ${source.name}`);

    // Try RSS first
    if (source.url.includes('rss') || source.url.includes('feed')) {
      return await fetchRSS(source.url);
    }

    // Try web scraping
    return await fetchWebNews(source.url);

  } catch (error) {
    logger.error(`Failed to fetch from ${source.name}:`, error.message);
    return [];
  }
}

/**
 * Fetch RSS feed
 */
async function fetchRSS(url) {
  try {
    var feed = await rssParser.parseURL(url);

    return feed.items.slice(0, 10).map(item => ({
      title: item.title,
      description: item.contentSnippet || item.content || '',
      url: item.link,
      published_at: item.pubDate,
      source: feed.title
    }));

  } catch (error) {
    logger.error('RSS fetch failed:', error.message);
    return [];
  }
}

/**
 * Fetch news from website (simple scraping)
 */
async function fetchWebNews(url) {
  try {
    var { data } = await axios.get(url, {
      timeout: 10000,
      headers: {
        'User-Agent': 'Archangel Safety Bot/3.0'
      }
    });

    var $ = cheerio.load(data);
    var articles = [];

    // Generic article selectors (works for many news sites)
    $('article, .article, .news-item, .post').slice(0, 10).each((i, elem) => {
      var title = $(elem).find('h1, h2, h3, .title, .headline').first().text().trim();
      var description = $(elem).find('p, .description, .summary').first().text().trim();
      var link = $(elem).find('a').first().attr('href');

      if (title && link) {
        // Make absolute URL
        if (link.startsWith('/')) {
          var urlObj = new URL(url);
          link = `${urlObj.protocol}//${urlObj.host}${link}`;
        }

        articles.push({
          title: title,
          description: description,
          url: link,
          published_at: new Date().toISOString(),
          source: new URL(url).hostname
        });
      }
    });

    return articles;

  } catch (error) {
    logger.error('Web scraping failed:', error.message);
    return [];
  }
}
