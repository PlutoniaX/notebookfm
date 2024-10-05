# Gemini API quickstart 

Prerequisites
This quickstart assumes that you're familiar with building applications with Node.js.

To complete this quickstart, make sure that your development environment meets the following requirements:

Node.js v18+
npm
Install the Gemini API SDK
To use the Gemini API in your own application, you need to install the GoogleGenerativeAI package for Node.js:


npm install @google/generative-ai
Set up your API key
To use the Gemini API, you'll need an API key. If you don't already have one, create a key in Google AI Studio.

Get an API key from Google AI Studio

Then, configure your key.

It is strongly recommended that you do not check an API key into your version control system but assign it as an environment variable instead:


export API_KEY=<YOUR_API_KEY> or use .env file
Import the library
Import the Google Generative AI library.

```
const { GoogleGenerativeAI } = require("@google/generative-ai");
Make your first request
Use the generateContent method to generate text.


// Make sure to include these imports:
// import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Write a story about a magic backpack.";

const result = await model.generateContent(prompt);
console.log(result.response.text());

```