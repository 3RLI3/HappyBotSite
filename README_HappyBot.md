# HappyBot: A Multimodal Generative AI Telegram Assistant

HappyBot is a Telegram bot designed to provide emotional support, wellness check-ins, and intelligent conversations using a Generative AI backend (SEA-LION LLM). The bot integrates a Mini App (Telegram Web App), handles both text and voice input, and is deployed using webhook mode on Render.com.

---

## 📌 Features

- 🤖 LLM-powered responses (via SEA-LION API)
- 🧠 LangChain context-aware prompt formatting
- 🎙️ Voice message transcription and voice reply (Sphinx + gTTS)
- 📆 Weekly wellbeing check-in with Telegram polls
- 📲 Telegram Mini App for setting custom alerts (HTML/CSS/JS)
- ☁️ Hosted on Render using webhook deployment
- 🔁 Redis (or fallback in-memory) for context and conversation memory

---

## ⚙️ Tech Stack

| Component     | Tech Used                                  |
|---------------|---------------------------------------------|
| Backend       | Python, Flask (for webhook), Telegram Bot API |
| AI Model      | SEA-LION (via HTTP API)                    |
| LLM Prompting | LangChain + Custom Templates                |
| Voice Input   | speech_recognition (Sphinx) + pydub         |
| TTS Response  | gTTS (Google Text-to-Speech)                |
| Mini App      | Telegram WebApp + static HTML/JS            |
| Hosting       | Render.com (Webhook mode)                  |
| Storage       | Redis or in-memory fallback                |

---

## 📁 Directory Structure

```
app/
│
├── telegram_bot.py       # Main app entrypoint
├── session_db.py         # Redis/memory store for user sessions
├── langchain_prompts.py  # Prompt formatting using LangChain
├── sea_lion_api.py       # Wrapper around SEA-LION HTTP API
├── templates/            # MiniApp HTML templates (optional)
├── static/               # JS/CSS assets for Mini App
└── .env                  # Secrets and environment variables
```

---

## 🚀 Deployment on Render

1. Set up a **Python Web Service** on Render.
2. Ensure `webhook_url` and `TELEGRAM_TOKEN` are in your `.env`.
3. Use the following startup command:

```bash
python set_webhook.py && python -m app.telegram_bot
```

4. Expose `/telegram` route for Telegram Webhook.
5. Add `uptimerobot.com` ping if you want to keep the bot alive.

---

## 🔊 Voice Input

- Receives `.ogg` Telegram voice message
- Converts to `.wav` using `pydub`
- Transcribes with `SpeechRecognition` (Sphinx)
- Uses text to query LLM, sends both text and voice reply (via `gTTS`)

---

## 🧠 Context & Memory

- `session_db.py` handles storing user context (`context:{chat_id}`) and history (`history:{chat_id}`)
- Uses Redis if available, else falls back to in-memory Python dict
- History truncated to last 4 exchanges (configurable via `MAX_HISTORY_LEN`)

---

## 🧩 Telegram Mini App

- A simple WebApp interface in `static/miniapp/index.html`
- Users can submit alerts (POST to Flask API)
- Button appears via `WebAppInfo` inside `/start` reply

---

## 🧪 Testing & Debugging Tips

- Test locally using `python -m app.telegram_bot`
- Use `logging.info(...)` to track handler activity
- Always wrap LLM calls in `try/except` for graceful failure
- Redis not available? It will fallback to `_cache` in memory

---

## 🤝 Contributing

- Extend with more wellbeing tools (e.g., journaling, CBT cards)
- Swap SEA-LION with local Ollama models if needed
- Improve multilingual support for wider accessibility

---

## 📄 License

MIT License – Use freely and improve for good 🌍

---

HappyBot is a capstone example of combining Generative AI, chat interfaces, multimodal input, and cloud deployment to solve real human needs.