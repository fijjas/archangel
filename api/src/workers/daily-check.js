import cron from 'node-cron';
import { Op } from 'sequelize';
import User from '../models/User.js';
import { performSafetyCheck } from '../services/safety-check.js';
import logger from '../utils/logger.js';

/**
 * Start daily safety check worker
 */
export function startDailyCheck(bot) {
  // Run once a day at 9:00 AM UTC
  cron.schedule('0 9 * * *', async () => {
    logger.info('Starting daily safety check for all users...');

    try {
      // Get all active users (active in last 30 days)
      var users = await User.findAll({
        where: {
          last_active: {
            [Op.gte]: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
          }
        }
      });

      logger.info(`Found ${users.length} active users for daily check`);

      // Check each user
      for (var user of users) {
        try {
          await performSafetyCheck(bot, user.telegram_id, user.language);

          // Small delay between users to avoid rate limits
          await new Promise(resolve => setTimeout(resolve, 1000));

        } catch (error) {
          logger.error(`Check failed for user ${user.telegram_id}:`, error);
        }
      }

      logger.info('Daily safety check completed');

    } catch (error) {
      logger.error('Daily check worker error:', error);
    }
  });

  logger.info('Daily check worker scheduled (9:00 AM UTC)');
}
