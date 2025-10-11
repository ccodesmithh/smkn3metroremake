const express = require('express');
const fs = require('fs');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Gunakan header eksplisit di setiap response
const ALLOWED_ORIGIN = 'https://ccodesmithh.github.io';

app.use(express.json());

// Middleware CORS manual (aman untuk Vercel)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

// ✅ Route API utama
app.post('/api/chat', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);

  try {
    if (!process.env.API_KEY) {
      return res.status(401).json({ error: 'API key not configured' });
    }

    const { message } = req.body;
    if (!message) return res.status(400).json({ error: 'Message is required' });

    const contextPath = path.join(__dirname, 'context.txt');
    const context = fs.readFileSync(contextPath, 'utf8');
    const fullPrompt = `${context}\n${message}`;

    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    const result = await model.generateContent(fullPrompt);

    res.status(200).json({ response: result.response.text() });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Root (opsional)
app.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  res.sendFile(path.join(__dirname, 'index.html'));
});

module.exports = app;

if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
