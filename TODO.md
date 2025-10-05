# IDEAS

- Consider using an external web scraper with JS and optionally AI parsing support, like ScrapingBee or Prerender
- Try caching or saving news sources along with some stats, like response status, news count
- Consider pre-processing news sources using a smarter crawler to recognize valid RSS feed URLs, robots.txt instructions to ensure content for the scraper
- Make the system multi-platform, not depending on Telegram only (for eg., Firebase notifications, HTTP, WS, MCP?)
- Reduce the cost of LLM queries, use HAIKU where possible, add Ollama support
- Replace language detection by a local offline lib, and detect lang for every incoming message from user
- Encrypt data in Postgres and Redis
- Improve how the researcher decides what news sources are needed. Currently only provided user information is used, while we need some "defaults". We need to predict safety requirements.
- User profile - define a generic schema to have a universal profile format. Currently LLM decides how to format user info.
- Investigate if it is possible to fetch information from Telegram channels outside the official client
- Create some sort of a "bridge" between the system and Find-My-Device apps like https://f-droid.org/packages/de.nulide.findmydevice/. The idea is in having realtime user location updates, so users do not need to let the bot know if they move to another city.
- Implement a cache for alerts per user (by LLM-summarized alert title), and do not return duplicates
- Add an extra summarization layer to get rid of similar alerts, and make it an observer validating the final response
- Create dedicated AI agents for specific topics, like earthquakes alerts, ...
- Restore cybersecurity alerts support, create a specialized agent for it, which will not be confusing summarizers
- Fix the mechanism of adding/removing news sources, let AI to recognize sources by NL name/description, - it is tricky to use full name of full URL of sources.
