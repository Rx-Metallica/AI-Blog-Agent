# Zapier Workflow — Full Code Reference

This file contains the complete JavaScript code for each Zapier Code step.

---

## Step 1: Google Sheets (Trigger)

No code needed. Set up as:
- App: **Google Sheets**
- Trigger: **New Spreadsheet Row**
- Select your spreadsheet and sheet

---

## Step 2: Tavily Research

**Type:** Code by Zapier → Run JavaScript

**Input Data:**
| Key | Value |
|-----|-------|
| `topic` | Google Sheets — Topic column |

**Code:**
```javascript
const res = await fetch('https://api.tavily.com/search', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    api_key: 'YOUR_TAVILY_API_KEY',
    query: inputData.topic,
    search_depth: 'advanced',
    max_results: 5
  })
});

const data = await res.json();
const research = data.results.map(r => r.content).join('\n\n');
return { research };
```

---

## Step 3: Groq — Blog Generation

**Type:** Code by Zapier → Run JavaScript

**Input Data:**
| Key | Value |
|-----|-------|
| `research` | Tavily — research |
| `topic` | Google Sheets — Topic |
| `tone` | Google Sheets — Tone |
| `audience` | Google Sheets — Target Audience |

**Code:**
```javascript
const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_GROQ_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'llama3-8b-8192',
    messages: [{
      role: 'user',
      content: `Research: ${inputData.research}

Write a detailed blog post about "${inputData.topic}".
Tone: ${inputData.tone}
Target Audience: ${inputData.audience}

Format your response exactly like this:
# Blog Title
Full markdown content here...`
    }]
  })
});

const data = await res.json();
return { blog: data.choices[0].message.content };
```

---

## Step 4: Unsplash + Dev.to — Image & Publish

**Type:** Code by Zapier → Run JavaScript

**Input Data:**
| Key | Value |
|-----|-------|
| `content` | Groq — blog |
| `topic` | Google Sheets — Topic |

**Code:**
```javascript
const raw = inputData.content;
const topic = inputData.topic;
const UNSPLASH_KEY = 'YOUR_UNSPLASH_ACCESS_KEY';
const DEVTO_KEY = 'YOUR_DEVTO_API_KEY';

// Extract title from markdown
const titleMatch = raw.match(/^#\s+(.+)/m);
const title = titleMatch ? titleMatch[1].trim() : 'Untitled';

// Fetch image from Unsplash
const imgRes = await fetch(
  `https://api.unsplash.com/search/photos?query=${encodeURIComponent(topic)}&per_page=1&client_id=${UNSPLASH_KEY}`
);
const imgData = await imgRes.json();
const imageUrl = imgData.results[0]?.urls?.regular || '';

// Add image to top of content
const content = raw.substring(raw.indexOf('\n')).trim();
const contentWithImage = `![${title}](${imageUrl})\n\n${content}`;

// Publish to Dev.to
const postRes = await fetch('https://dev.to/api/articles', {
  method: 'POST',
  headers: {
    'api-key': DEVTO_KEY,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    article: {
      title: title,
      body_markdown: contentWithImage,
      published: true
    }
  })
});

const postData = await postRes.json();
return { url: postData.url };
```

---

## Step 5: Google Sheets — Update Status

**Type:** Google Sheets → Update Spreadsheet Row

- **Spreadsheet:** Your spreadsheet
- **Sheet:** Your sheet
- **Row:** Map row number from trigger
- **Status column:** `Done`

No code needed!

---

## API Keys Reference

| Tool | Sign Up | Free Tier |
|------|---------|-----------|
| Tavily | [tavily.com](https://tavily.com) | ✅ Yes |
| Groq | [console.groq.com](https://console.groq.com) | ✅ Yes |
| Unsplash | [unsplash.com/developers](https://unsplash.com/developers) | ✅ Yes |
| Dev.to | Settings → Extensions | ✅ Yes |
