-- Archangel Database Schema
-- Minimal SQL schema - most data stored in Redis

-- Users table (essential info only)
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    telegram_id BIGINT UNIQUE NOT NULL,
    username VARCHAR(255),

    -- Language preference
    language VARCHAR(10) DEFAULT 'en',

    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_active TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_check TIMESTAMP,

    CONSTRAINT unique_telegram_id UNIQUE(telegram_id)
);

-- Alerts history (for analytics and archiving)
CREATE TABLE IF NOT EXISTS alerts_history (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    urgency VARCHAR(50),
    title VARCHAR(500),
    message TEXT,

    -- Store full alert data as JSON
    metadata JSONB
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_users_telegram_id ON users(telegram_id);
CREATE INDEX IF NOT EXISTS idx_users_last_active ON users(last_active);
CREATE INDEX IF NOT EXISTS idx_alerts_user_id ON alerts_history(user_id);
CREATE INDEX IF NOT EXISTS idx_alerts_created_at ON alerts_history(created_at DESC);
