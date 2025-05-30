# 🧠 Learning Reflection: Building a Generative AI-Powered Telegram MiniApp

## Overview

This project demonstrates the integration of Generative AI into a real-world chatbot deployed on Telegram, enhanced by multimodal input (text + voice), Web App interactivity, and deployment on Render. The application—*HappyBot*—is designed for wellbeing support and interaction through both natural conversation and a Telegram Mini App interface.

---

## 🎯 Real-World Relevance

Building this application provided a comprehensive look into applying **Generative AI** for practical problems like:
- Mental wellbeing support through empathetic responses
- Lightweight mobile-friendly interaction (Mini App)
- Async API deployments and webhook-based triggers
- Multimodal UX with both text and voice support

---

## 🧩 Key Learning Components

### 1. 🦜🔗 **LangChain Integration**
- **Prompt Engineering**: The project uses `format_prompt()` via LangChain to condition prompts by context (`detect_context()`), history, and user intent.
- **Modularity**: LangChain enables abstraction of prompt templates and chaining future capabilities (e.g., document Q&A, memory, tools).

### 2. 🤖 **Use of LLMs (Sea-Lion API)**
- The bot uses SEA-LION v3 9B model hosted by AISG via REST API.
- Handled **multi-turn memory** by appending conversation history per user (cached or Redis).
- Demonstrated grounding LLMs with situational context (e.g., crisis response).

### 3. ☁️ **Render Hosting & Webhook Deployment**
- Application is deployed to [Render](https://render.com), a free-tier cloud host.
- Uses `run_webhook()` to expose a Telegram-compatible endpoint.
- Keeps uptime high with external monitoring (e.g., UptimeRobot).

### 4. 📱 **Telegram Mini App Integration**
- Sends a button via `InlineKeyboardMarkup` to open a Web App.
- Users can submit data via embedded HTML forms (`alerts.html`) back into Telegram via `web_app_data`.
- Provides a more visual UI compared to plain text.

### 5. 🗣️ **Multimodal Interaction (Voice + Text)**
- Accepts Telegram voice notes (`.oga`), converts to `.wav`, and transcribes using `SpeechRecognition + Sphinx`.
- Responds back in **text** and **TTS audio** using `gTTS`, improving accessibility and engagement.

---

## 🔧 System Design Highlights

- `telegram_bot.py`: Handles all Telegram logic, command routing, and multimodal message processing.
- `sea_lion_api.py`: Centralizes LLM interaction, allows easy swapping of providers.
- `session_db.py`: Supports Redis-based or in-memory session state management.
- `langchain_prompts.py`: Modular prompt formatting logic.

---

## 📈 Learning Takeaways

| Concept                | Key Insight |
|------------------------|-------------|
| Prompt Design          | How small changes affect model tone & relevance |
| API Rate-Limits        | Added retries, error logging for robustness |
| Web App UX             | JavaScript-based forms bridge mobile & bot |
| Multimodal Handling    | Complex pipeline: OGG → WAV → Text → LLM → Text+TTS |
| Deployment Strategy    | Importance of environment variables & webhook correctness |

---

## 🔚 Conclusion

This project embodies a **full-stack AI agent**, from frontend interaction (Mini App) to backend intelligence (LLM) with seamless cloud deployment and real-time interaction via Telegram. It highlights how modern GenAI tools can be adapted creatively to real societal challenges, such as mental wellbeing support, through thoughtful system design.