import dotenv from 'dotenv';
import TelegramBot from 'node-telegram-bot-api';
import { initDatabase } from './config/database.js';
import { setupBotHandlers } from './services/telegram.js';
import { startDailyCheck } from './workers/daily-check.js';
import logger from './utils/logger.js';

dotenv.config();

async function start() {
  try {
    logger.info('Starting Archangel...');
    
    // Initialize database
    await initDatabase();
    logger.info('Database initialized');
    
    // Initialize Telegram bot (polling mode)
    var bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, {
      polling: true
    });
    
    logger.info('Telegram bot connected');
    
    // Setup bot message handlers
    setupBotHandlers(bot);
    
    // Start daily check worker
    startDailyCheck(bot);
    logger.info('Daily check worker started');
    
    logger.info('Archangel is running!');
    
    // Graceful shutdown
    process.on('SIGINT', async () => {
      logger.info('Shutting down gracefully...');
      await bot.stopPolling();
      process.exit(0);
    });
    
  } catch (error) {
    logger.error('Failed to start Archangel:', error);
    process.exit(1);
  }
}

start();
