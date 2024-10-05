import express, { Request, Response, RequestHandler } from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3003;

// Initialize the Google Generative AI with the API key
const genAI = new GoogleGenerativeAI(process.env.API_KEY as string);

// Create a model instance
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

// Middleware to parse JSON bodies
app.use(express.json());

// Define the summarization prompt
const summarizationPrompt = "You are the world's best summariser of information. Read the input content and produce a concise and informative summary, backed by specific and relevant examples.";

// API endpoint for summarization
const summarizeHandler: RequestHandler = async (req, res) => {
    try {
        const { text } = req.body;

        if (!text) {
            res.status(400).json({ error: 'Text input is required' });
        }

        const prompt = `${summarizationPrompt}\n\nInput content: ${text}`;

        const result = await model.generateContent(prompt);
        const summary = result.response.text();

        res.json({ summary });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while summarizing the text' });
    }
};

app.post('/summarize', summarizeHandler);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});