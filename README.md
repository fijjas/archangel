# 🛡️ Archangel

![Status](https://img.shields.io/badge/status-work%20in%20progress-yellow)

AI-powered personal safety monitoring system that keeps you informed about threats, legal changes, and security incidents relevant to your specific situation.

## 🎯 Features

- **Natural Language Interface** - Just talk to the bot in your own words
- **Personalized Alerts** - Only get notifications relevant to YOUR situation
- **Multi-language Support** - Automatically detects and responds in your language
- **Dynamic Profiling** - AI extracts safety-relevant information from your description
- **News Monitoring** - Tracks trusted independent sources
- **Cyber Security** - Monitor vulnerabilities in your software stack
- **No Commands** - AI understands intent from natural conversation

## 🚀 Quick Start

### Prerequisites

- Docker & Docker Compose
- Telegram Bot Token (get from [@BotFather](https://t.me/botfather))
- Claude API Key (get from [Anthropic](https://console.anthropic.com/))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/fijjas/archangel.git
cd archangel
```

2. Copy environment file:
```bash
cp .env.example .env
```

3. Edit `.env` and add your credentials:
```env
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
CLAUDE_API_KEY=your_claude_api_key
POSTGRES_PASSWORD=strong_password_here
```

4. Start the application:
```bash
docker-compose up -d
```

5. Check logs:
```bash
docker-compose logs -f api
```

## 📱 Usage

1. Start chat with your bot on Telegram
2. Send `/start`
3. Describe yourself in natural language:

```
I'm Alex, 28, living in Berlin.
US citizen, software engineer at a startup.
Have work visa until 2026.
Using MacBook, iPhone, Node.js and React.
```

4. The bot will:
   - Extract your profile information
   - Discover relevant news sources
   - Start monitoring for personalized alerts
   - Notify you of any relevant threats

## 🤖 What You Can Do

Just write naturally - the AI understands:

- **Update profile**: "I moved to Paris" or "I'm now a journalist"
- **Change language**: "Switch to YOUR-LANGUAGE"
- **Add news source**: "Track NEWS-SOURCE" or "Add NEWS-SOURCE"
- **Remove source**: "Stop tracking NEWS-SOURCE" or "Remove NEWS-SOURCE"
- **Check now**: "Check safety now" or "Any alerts?"
- **Show alerts**: "What's happening?" or "Show my alerts"
- **Show sources**: "What sources do you monitor?"

## 🏗️ Architecture

```
Telegram Bot (Polling)
      ↓
Natural Language Processing (Claude)
      ↓
Redis (Profiles, Sources, Alerts)
      ↓
PostgreSQL (Users, History)
      ↓
Daily Safety Check (Cron)
```

## 📊 Data Storage

- **PostgreSQL**: Minimal user data (ID, language, timestamps)
- **Redis**: Everything else (profiles, sources, alerts, locks)
- **TTL**: Alerts expire after 24 hours

## 🔐 Security

- All credentials in `.env` (not committed)
- Redis lock prevents concurrent checks
- No personal data in SQL (only Redis)
- All communication via Telegram's encryption

## 🌍 Multi-language

Language is auto-detected from user's first message.

## 💰 Cost Estimation

Per user/month:
- Claude API: ~$2.50
- Infrastructure: $0 (self-hosted)
- **Total: ~$2.50/user/month**

## 🛠️ Development

```bash
# Install dependencies
cd api
npm install

# Run in development mode
npm run dev

# View logs
docker-compose logs -f
```

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `TELEGRAM_BOT_TOKEN` | Telegram bot token from BotFather | ✅ |
| `CLAUDE_API_KEY` | Anthropic Claude API key | ✅ |
| `POSTGRES_PASSWORD` | PostgreSQL password | ✅ |
| `DATABASE_URL` | PostgreSQL connection string | Auto |
| `REDIS_HOST` | Redis hostname | Auto |
| `NODE_ENV` | Environment (production/development) | Optional |

## 🤝 Contributing

Contributions welcome! This project aims to help people stay safe worldwide.

## 📜 License

MIT License - use it to help people stay safe!

## ⚠️ Disclaimer

Archangel is a monitoring tool. Always verify critical information through official channels. The AI analysis is not a substitute for professional legal or security advice.

**"Archangel"** is used as a generic descriptive term for this open-source safety monitoring project. The name refers to the concept of protection and guardianship, not any specific commercial product or service.

If the project name "Archangel" conflicts with any registered trademarks, please open an issue and we will rename it immediately.

