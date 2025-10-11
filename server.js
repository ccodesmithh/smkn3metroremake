const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ CORS Middleware (paling atas)
const allowedOrigins = ['https://ccodesmithh.github.io'];
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// ✅ Body parser
app.use(express.json());

// ✅ API route
app.post('/api/chat', async (req, res) => {
  try {
    if (!process.env.API_KEY) {
      return res.status(401).json({ error: 'API key not configured' });
    }

    const { message } = req.body;
    if (!message) return res.status(400).json({ error: 'Message is required' });

    const contextPath = path.join(__dirname, 'context.txt');
    const context = fs.readFileSync(contextPath, 'utf8');
    const fullPrompt = context + ' ' + message;

    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    const result = await model.generateContent(fullPrompt);

    res.json({ response: result.response.text() });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ✅ Serve static files (optional)
app.use(express.static(path.join(__dirname)));

// ✅ Root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

module.exports = app;

if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
