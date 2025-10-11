require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: ['https://ccodesmithh.github.io', 'localhost:3000',],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization']
}));
app.use(express.json());

// Inisialisasi Google Generative AI
let genAI;
try {
  if (!process.env.API_KEY) {
    throw new Error('API_KEY not set');
  }
  genAI = new GoogleGenerativeAI(process.env.API_KEY);
} catch (error) {
  console.error('Error initializing genAI:', error);
  genAI = null;
}

// Route untuk chat
app.post('/api/chat', async (req, res) => {
  try {
    if (!genAI) {
      return res.status(500).json({ error: 'API key not configured' });
    }

    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Baca context dari file
    const contextPath = path.join(__dirname, 'context.txt');
    const context = fs.readFileSync(contextPath, 'utf8');

    // Gabungkan context dengan pesan user
    const fullPrompt = context + ' ' + message;

    // Dapatkan model
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    // Generate content
    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    const text = response.text();

    res.json({ response: text });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route untuk serve static files (untuk GitHub Pages)
app.use(express.static(path.join(__dirname)));

// Route untuk root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Export for Vercel
module.exports = app;

// For local development
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}