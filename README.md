# 🤖 AI Blog Agent

A fully automated blog publishing pipeline built on **Zapier** — no code, no servers, completely free.

Add a topic to Google Sheets → AI researches, writes, illustrates, and publishes a full blog post automatically.

[![Zapier Template](https://img.shields.io/badge/Zapier-Template-FF4A00?style=for-the-badge&logo=zapier&logoColor=white)](https://zapier.com/shared/7f4442f87e21d05ae5c7bb8bd8c113737e348143)
[![Dev.to](https://img.shields.io/badge/Dev.to-Live-0A0A0A?style=for-the-badge&logo=devdotto&logoColor=white)](https://dev.to/aditya_mote_2f3e307595c53)

---

## 🚀 How It Works

```
Google Sheets → Tavily (Research) → Groq (Write) → Unsplash (Image) → Dev.to (Publish) → Google Sheets (Status: Done)
```

| Step | Tool | Purpose |
|------|------|---------|
| 1 | Google Sheets | Trigger — stores topic, tone, target audience & status |
| 2 | Tavily API | AI-powered web research |
| 3 | Groq API | Generates full blog post in Markdown |
| 4 | Unsplash API | Fetches relevant cover image |
| 5 | Dev.to API | Publishes article live |
| 6 | Google Sheets | Updates status from Pending → Done |

---

## ✅ Features

- 🔍 **Auto Research** — Tavily searches the web for up-to-date content
- ✍️ **AI Writing** — Groq generates SEO-optimized blogs in seconds
- 🖼️ **Auto Images** — Unsplash picks a relevant cover image
- 📤 **Auto Publish** — Posts directly to Dev.to
- ✅ **Status Tracking** — Google Sheets updates automatically
- 💸 **100% Free** — All tools have free tiers
- 🚫 **No Code** — Built entirely on Zapier

---

## 🛠️ Setup Guide

### 1. Clone / Copy the Zapier Template
👉 [Click here to copy the Zapier workflow](https://zapier.com/shared/7f4442f87e21d05ae5c7bb8bd8c113737e348143)

### 2. Set Up Google Sheets
Create a sheet with these columns:

| Topic | Tone | Target Audience | Status |
|-------|------|----------------|--------|
| AI in Healthcare | Professional | Doctors | Pending |

### 3. Get Your API Keys

| Tool | Where to Get |
|------|-------------|
| Tavily | [tavily.com](https://tavily.com) |
| Groq | [console.groq.com](https://console.groq.com) |
| Unsplash | [unsplash.com/developers](https://unsplash.com/developers) |
| Dev.to | Settings → Extensions → API Keys |

### 4. Add API Keys to Zapier
Replace the placeholders in each Code step with your actual keys. See `zapier-workflow.md` for full code.

### 5. Turn On Your Zap
Click **Publish** in Zapier. From now on, just add a row to Google Sheets and watch the magic happen! 🎉

---

## 📁 Repo Structure

```
ai-blog-agent/
├── README.md              # This file
├── zapier-workflow.md     # Full code for each Zapier step
└── config.example.js      # API key placeholders
```

---

## 🔧 Tech Stack

- **Zapier** — Automation platform
- **Tavily** — AI web research API
- **Groq** — LLM inference (llama3-8b-8192)
- **Unsplash** — Stock image API
- **Dev.to** — Blog publishing platform
- **Google Sheets** — Trigger & status tracking

---

## 📄 License

MIT — free to use, modify, and share.

---

## 🙌 Author

Built by [Aditya Mote](https://dev.to/aditya_mote_2f3e307595c53)
