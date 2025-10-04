import { createClient } from 'redis';
import logger from '../utils/logger.js';

var redisClient = createClient({
  socket: {
    host: process.env.REDIS_HOST || 'redis',
    port: process.env.REDIS_PORT || 6379
  }
});

redisClient.on('error', (err) => {
  logger.error('Redis error:', err);
});

redisClient.on('connect', () => {
  logger.info('Redis connected');
});

// Connect immediately
await redisClient.connect();

export default redisClient;
