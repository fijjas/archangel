import { Sequelize } from 'sequelize';
import logger from '../utils/logger.js';

var sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: (msg) => logger.debug(msg),
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

export async function initDatabase() {
  try {
    await sequelize.authenticate();
    logger.info('Database connection established');

    // Sync models (alter tables if needed)
    await sequelize.sync({ alter: true });
    logger.info('Database models synchronized');

  } catch (error) {
    logger.error('Unable to connect to database:', error);
    throw error;
  }
}

export default sequelize;
