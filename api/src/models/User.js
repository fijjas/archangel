import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

var User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  telegram_id: {
    type: DataTypes.BIGINT,
    unique: true,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  language: {
    type: DataTypes.STRING(10),
    defaultValue: 'en'
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  last_active: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  last_check: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'users',
  timestamps: false
});

export default User;
