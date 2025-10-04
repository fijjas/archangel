/**
 * Translation system for multi-language support
 */

var translations = {
  welcome: {
    en: '🛡️ *Welcome to Archangel!*\n\nI am your personal safety assistant. Tell me about yourself in your own words.\n\nFor example:\n_"I\'m John, 25, living in Berlin. US citizen, software engineer, have work visa until 2026."_\n\nJust write whatever you think is important 👇',
  },

  profile_analyzing: {
    en: '🔍 Analyzing your profile...',
  },

  profile_updated: {
    en: '✅ *Profile updated!*',
  },

  check_started: {
    en: '🔄 Safety check started...',
  },

  check_completed: {
    en: '✅ Safety check completed!',
  },

  check_already_running: {
    en: '⏳ Check is already in progress. Please wait...',
  },

  no_alerts: {
    en: '✅ No active alerts. You are safe!',
  },

  source_added: {
    en: '✅ News source added: *{name}* (trust score: {trust}/10)',
  },

  source_invalid: {
    en: '❌ Invalid news source: {reason}',
  },

  unclear_intent: {
    en: '🤔 I\'m not sure what you want. Please try to be more specific or type "help" for assistance.',
  },

  help: {
    en: `📚 *Archangel Help*

I understand natural language. Just tell me what you need:

📝 *Update profile:* "I moved to Paris" or "I'm now a journalist"
🌍 *Change language:* "Switch to YOUR-LANGUAGE"
📰 *Add news source:* "Track XXX" or "Add XXX"
❌ *Remove source:* "Stop tracking XXX" or "Remove XXX"
🔍 *Check now:* "Check safety now" or "Any alerts?"
📊 *Show alerts:* "What's happening?" or "Show my alerts"
📚 *Show sources:* "What sources do you monitor?"

Just write naturally - I'll understand! 🤖`,
  }
};

/**
 * Get translated message
 * @param {string} key - Translation key
 * @param {string} lang - Language code (en,..., etc.)
 * @param {object} params - Template parameters
 * @returns {string} - Translated message
 */
export function translate(key, lang = 'en', params = {}) {
  var text = translations[key]?.[lang] || translations[key]?.['en'] || key;

  // Replace template variables: {name}, {trust}, etc.
  Object.entries(params).forEach(([paramKey, value]) => {
    text = text.replace(new RegExp(`\\{${paramKey}\\}`, 'g'), value);
  });

  return text;
}

export default translations;
