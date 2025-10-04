import redis from '../config/redis.js';
import User from '../models/User.js';
import { fetchNewsFromSource } from './news-sources.js';
import { analyzeNewsRelevance, discoverNewsSources } from './claude.js';
import logger from '../utils/logger.js';

/**
 * Perform safety check for user
 */
export async function performSafetyCheck(bot, userId, userLanguage) {
  try {
    logger.info(`Starting safety check for user ${userId}`);

    // 1. Get user profile
    var profileKey = `profile:${userId}`;
    var profile = await redis.get(profileKey);

    if (!profile) {
      logger.warn(`No profile for user ${userId}`);
      return;
    }

    profile = JSON.parse(profile);

    // 2. Get or discover news sources
    var sourcesKey = `sources:${userId}`;
    var sources = await redis.get(sourcesKey);

    if (!sources) {
      // First time - discover sources based on profile
      logger.info(`Discovering news sources for user ${userId}`);
      sources = await discoverNewsSources(profile.extracted);

      if (sources.length > 0) {
        await redis.set(sourcesKey, JSON.stringify(sources));
        logger.info(`Discovered ${sources.length} sources for user ${userId}`);
      }
    } else {
      sources = JSON.parse(sources);
    }

    if (!sources || sources.length === 0) {
      logger.warn(`No sources for user ${userId}`);
      return;
    }

    // 3. Fetch news from all active sources
    var allNews = [];
    for (var source of sources.filter(s => s.is_active !== false)) {
      var news = await fetchNewsFromSource(source);
      allNews.push(...news);
    }

    logger.info(`Fetched ${allNews.length} news items for user ${userId}`);

    if (allNews.length === 0) {
      logger.warn(`No news fetched for user ${userId}`);
      return;
    }

    // 4. Analyze each news item for relevance
    var alerts = [];
    for (var newsItem of allNews) {
      var analysis = await analyzeNewsRelevance(
        newsItem,
        profile.extracted,
        userLanguage
      );

      if (analysis.is_relevant && analysis.relevance_score >= 0.7) {
        alerts.push({
          id: `alert_${Date.now()}_${Math.random()}`,
          urgency: analysis.urgency,
          title: analysis.title,
          message: analysis.message,
          action_required: analysis.action_required,
          timeframe: analysis.timeframe,
          source_name: newsItem.source,
          source_url: newsItem.url,
          created_at: new Date().toISOString(),
          is_read: false
        });
      }
    }

    logger.info(`Generated ${alerts.length} alerts for user ${userId}`);

    // 5. Save alerts to Redis (24h TTL)
    if (alerts.length > 0) {
      var alertsKey = `alerts:${userId}`;
      await redis.set(alertsKey, JSON.stringify(alerts), { EX: 86400 });

      // 6. Send alerts to Telegram
      for (var alert of alerts) {
        await sendAlert(bot, userId, alert, userLanguage);
      }
    }

    // 7. Update last check timestamp
    await User.update(
      { last_check: new Date() },
      { where: { telegram_id: userId }}
    );

    logger.info(`Safety check completed for user ${userId}`);

  } catch (error) {
    logger.error(`Safety check failed for user ${userId}:`, error);
    throw error;
  }
}

/**
 * Send alert to user via Telegram
 */
async function sendAlert(bot, userId, alert, userLanguage) {
  try {
    var urgencyEmoji = {
      critical: '🔴',
      high: '🟠',
      medium: '🟡',
      low: '🟢'
    }[alert.urgency] || '⚪';

    var message = `${urgencyEmoji} *${alert.urgency.toUpperCase()} ALERT*\n\n`;
    message += `*${alert.title}*\n\n`;
    message += `${alert.message}\n\n`;

    if (alert.action_required) {
      message += `📋 *Actions Required:*\n${alert.action_required}\n\n`;
    }

    if (alert.timeframe) {
      message += `⏰ *Timeframe:* ${alert.timeframe}\n`;
    }

    if (alert.source_name) {
      message += `\n_Source:_ ${alert.source_name}`;
    }

    await bot.sendMessage(userId, message, {
      parse_mode: 'Markdown',
      disable_web_page_preview: true
    });

    logger.info(`Alert sent to user ${userId}: ${alert.title}`);

  } catch (error) {
    logger.error('Failed to send alert:', error);
  }
}
