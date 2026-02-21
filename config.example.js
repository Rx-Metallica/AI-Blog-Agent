// ============================================
// AI Blog Agent — API Keys Configuration
// ============================================
// Copy this file and rename it to config.js
// Replace all placeholder values with your actual API keys
// NEVER commit your real API keys to GitHub!

const config = {
  // Tavily API — AI Web Research
  // Get your key at: https://tavily.com
  TAVILY_API_KEY: "YOUR_TAVILY_API_KEY",

  // Groq API — LLM Blog Generation
  // Get your key at: https://console.groq.com
  GROQ_API_KEY: "YOUR_GROQ_API_KEY",

  // Groq Model — change if needed
  GROQ_MODEL: "llama3-8b-8192",

  // Unsplash API — Cover Images
  // Get your key at: https://unsplash.com/developers
  UNSPLASH_ACCESS_KEY: "YOUR_UNSPLASH_ACCESS_KEY",

  // Dev.to API — Blog Publishing
  // Get your key at: Dev.to → Settings → Extensions → API Keys
  DEVTO_API_KEY: "YOUR_DEVTO_API_KEY",
};

module.exports = config;
