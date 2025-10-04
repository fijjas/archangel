import User from '../models/User.js';
import redis from '../config/redis.js';
import { analyzeIntent, extractProfile, detectLanguage } from './claude.js';
import { performSafetyCheck } from './safety-check.js';
import { translate } from '../utils/translations.js';
import logger from '../utils/logger.js';

/**
 * Setup Telegram bot message handlers
 */
export function setupBotHandlers(bot) {

  // Handle all messages
  bot.on('message', async (msg) => {
    try {
      var chatId = msg.chat.id;
      var userId = msg.from.id;
      var userText = msg.text;

      if (!userText) {
        return;
      }

      logger.info(`Message from user ${userId}: ${userText}`);

      // Find or create user
      var [user, created] = await User.findOrCreate({
        where: { telegram_id: userId },
        defaults: {
          username: msg.from.username,
          language: 'en',
          last_active: new Date()
        }
      });

      // Update last active
      if (!created) {
        await user.update({ last_active: new Date() });
      }

      // Special case: /start command - always show welcome
      if (userText === '/start') {
        await sendTranslated(bot, chatId, 'welcome', user.language);
        return;
      }

      // Check if user has profile
      var profileKey = `profile:${userId}`;
      var profileData = await redis.get(profileKey);

      // If no profile, treat any message as profile creation
      if (!profileData) {
        await handleProfileCreation(bot, chatId, userId, userText, user);
        return;
      }

      // User has profile - analyze intent
      var intent = await analyzeIntent(userText, user.language);

      logger.info(`Intent detected: ${intent.type} (confidence: ${intent.confidence})`);

      // Route to appropriate handler
      switch(intent.type) {
        case 'update_profile':
          await handleProfileUpdate(bot, chatId, userId, userText, user);
          break;

        case 'change_language':
          await handleLanguageChange(bot, chatId, userId, intent.data.language, user);
          break;

        case 'add_news_source':
          await handleAddSource(bot, chatId, userId, userText, user);
          break;

        case 'remove_news_source':
          await handleRemoveSource(bot, chatId, userId, intent.data.source_name, user);
          break;

        case 'check_now':
          await handleManualCheck(bot, chatId, userId, user);
          break;

        case 'show_alerts':
          await handleShowAlerts(bot, chatId, userId, user);
          break;

        case 'show_sources':
          await handleShowSources(bot, chatId, userId, user);
          break;

        case 'delete_profile':
          await handleProfileDeletion(bot, chatId, userId, user);
          break;

        case 'help':
          await sendTranslated(bot, chatId, 'help', user.language);
          break;

        default:
          await sendTranslated(bot, chatId, 'unclear_intent', user.language);
      }

    } catch (error) {
      logger.error('Error handling message:', error);
      await bot.sendMessage(msg.chat.id, '❌ Error processing your message. Please try again.');
    }
  });

  logger.info('Bot handlers configured');
}

/**
 * Handle profile creation (first message from user)
 */
async function handleProfileCreation(bot, chatId, userId, userText, user) {
  await sendTranslated(bot, chatId, 'profile_analyzing', user.language);

  // Detect language from user's text
  var detectedLang = await detectLanguage(userText);

  // Extract profile using Claude
  var profileData = await extractProfile(userText, null);

  // Save to Redis
  var profileKey = `profile:${userId}`;
  await redis.set(profileKey, JSON.stringify({
    raw_text: userText,
    extracted: profileData.extracted,
    language: detectedLang,
    updated_at: new Date().toISOString()
  }));

  // Update user language in DB
  await user.update({ language: detectedLang });

  // Send confirmation
  await sendTranslated(bot, chatId, 'profile_updated', detectedLang);

  // Start initial safety check
  await sendTranslated(bot, chatId, 'check_started', user.language);
  await performSafetyCheck(bot, userId, detectedLang);

  logger.info(`Profile created for user ${userId} in ${detectedLang}`);
}

/**
 * Handle profile update
 */
async function handleProfileUpdate(bot, chatId, userId, userText, user) {
  await sendTranslated(bot, chatId, 'profile_analyzing', user.language);

  // Get existing profile
  var profileKey = `profile:${userId}`;
  var existingProfile = await redis.get(profileKey);
  existingProfile = existingProfile ? JSON.parse(existingProfile) : null;

  // Extract updated profile
  var profileData = await extractProfile(userText, existingProfile?.extracted);

  // Save to Redis
  await redis.set(profileKey, JSON.stringify({
    raw_text: userText,
    extracted: profileData.extracted,
    language: user.language,
    updated_at: new Date().toISOString()
  }));

  await sendTranslated(bot, chatId, 'profile_updated', user.language);

  logger.info(`Profile updated for user ${userId}`);
}

/**
 * Handle profile reset
 */
async function handleProfileDeletion(bot, chatId, userId, user)  {
  logger.info('deleting profile: ' + userId);

  var profileKey = `profile:${userId}`,
      alertsKey = `alerts:${userId}`,
      sourcesKey = `sources:${userId}`;

  try {
    await redis.del([profileKey, alertsKey, sourcesKey]);
    await bot.sendMessage(chatId, '✅ Your profile has been reset');
    logger.info('profile deleted: ' + userId);
    await sendTranslated(bot, chatId, 'welcome', user.language);
  } catch (e) {
    logger.error('Profile deletion failed', e);
    throw e;
  }
}

/**
 * Handle language change
 */
async function handleLanguageChange(bot, chatId, userId, newLang, user) {
  await user.update({ language: newLang });

  // Update in Redis profile
  var profileKey = `profile:${userId}`;
  var profile = await redis.get(profileKey);
  if (profile) {
    profile = JSON.parse(profile);
    profile.language = newLang;
    await redis.set(profileKey, JSON.stringify(profile));
  }

  await sendTranslated(bot, chatId, 'profile_updated', newLang);

  logger.info(`Language changed to ${newLang} for user ${userId}`);
}

/**
 * Handle add news source
 */
async function handleAddSource(bot, chatId, userId, userText, user) {
  var { validateNewsSource } = await import('./news-sources.js');

  // Validate source using Claude
  var validation = await validateNewsSource(userText, user.language);

  if (validation.is_valid) {
    // Get existing sources
    var sourcesKey = `sources:${userId}`;
    var sources = await redis.get(sourcesKey);
    sources = sources ? JSON.parse(sources) : [];

    // Add new source
    sources.push({
      name: validation.name,
      url: validation.url,
      type: validation.type,
      relevance: validation.relevance,
      added_by: 'user',
      trust_score: validation.trust_score,
      is_active: true,
      added_at: new Date().toISOString()
    });

    await redis.set(sourcesKey, JSON.stringify(sources));

    await sendTranslated(bot, chatId, 'source_added', user.language, {
      name: validation.name,
      trust: validation.trust_score
    });

    logger.info(`Source added for user ${userId}: ${validation.name}`);
  } else {
    await sendTranslated(bot, chatId, 'source_invalid', user.language, {
      reason: validation.reason
    });
  }
}

/**
 * Handle remove news source
 */
async function handleRemoveSource(bot, chatId, userId, sourceName, user) {
  var sourcesKey = `sources:${userId}`;
  var sources = await redis.get(sourcesKey);
  sources = sources ? JSON.parse(sources) : [];

  // Remove source
  var filteredSources = sources.filter(s =>
    s.name.toLowerCase() !== sourceName.toLowerCase()
  );

  if (filteredSources.length < sources.length) {
    await redis.set(sourcesKey, JSON.stringify(filteredSources));

    await bot.sendMessage(chatId, `✅ News source removed: ${sourceName}`);
    logger.info(`Source removed for user ${userId}: ${sourceName}`);
  } else {
    await bot.sendMessage(chatId, `❌ Source not found: ${sourceName}`);
  }
}

/**
 * Handle manual safety check with Redis lock
 */
async function handleManualCheck(bot, chatId, userId, user) {
  var lockKey = `check_lock:${userId}`;

  // Try to acquire lock
  var lockValue = await redis.incr(lockKey);

  if (lockValue === 1) {
    // Lock acquired
    await redis.expire(lockKey, 300); // 5 minutes

    await sendTranslated(bot, chatId, 'check_started', user.language);

    try {
      await performSafetyCheck(bot, userId, user.language);
      await sendTranslated(bot, chatId, 'check_completed', user.language);
    } catch (error) {
      logger.error('Manual check failed:', error);
      await bot.sendMessage(chatId, '❌ Check failed. Please try again later.');
    } finally {
      await redis.del(lockKey);
    }
  } else {
    // Lock already exists
    await sendTranslated(bot, chatId, 'check_already_running', user.language);
  }
}

/**
 * Handle show alerts
 */
async function handleShowAlerts(bot, chatId, userId, user) {
  var alertsKey = `alerts:${userId}`;
  var alerts = await redis.get(alertsKey);
  alerts = alerts ? JSON.parse(alerts) : [];

  if (alerts.length === 0) {
    await sendTranslated(bot, chatId, 'no_alerts', user.language);
    return;
  }

  // Send each alert
  for (var alert of alerts) {
    var urgencyEmoji = {
      critical: '🔴',
      high: '🟠',
      medium: '🟡',
      low: '🟢'
    }[alert.urgency] || '⚪';

    var message = `${urgencyEmoji} *${alert.urgency.toUpperCase()}*\n\n`;
    message += `*${alert.title}*\n\n`;
    message += `${alert.message}\n\n`;

    if (alert.action_required) {
      message += `📋 *Actions:*\n${alert.action_required}\n\n`;
    }

    if (alert.timeframe) {
      message += `⏰ *Timeframe:* ${alert.timeframe}\n`;
    }

    await bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });
  }
}

/**
 * Handle show sources
 */
async function handleShowSources(bot, chatId, userId, user) {
  var sourcesKey = `sources:${userId}`;
  var sources = await redis.get(sourcesKey);
  sources = sources ? JSON.parse(sources) : [];

  if (sources.length === 0) {
    await bot.sendMessage(chatId, '📰 No news sources configured yet.');
    return;
  }

  var message = '📰 *Your News Sources:*\n';

  sources.forEach((source, index) => {
    var statusEmoji = source.is_active ? '✅' : '❌';
    message += `\n${index + 1}. ${statusEmoji} *${source.name}*`;
    message += `\n   Trust: ${source.trust_score}/10 | ${source.type}`;
    message += `\n   _${source.relevance}_\n`;
  });

  await bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });
}

/**
 * Send translated message
 */
async function sendTranslated(bot, chatId, key, lang, params = {}) {
  var message = translate(key, lang, params);
  await bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });
}
