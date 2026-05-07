const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { GoogleGenAI } = require("@google/genai");

dotenv.config({ path: "../.env" });

const app = express();

app.use(cors());
app.use(express.json());

const apiKey =
  process.env.GEMINI_API_KEY || process.env.VITE_GOOGLE_API_KEY || "";
const ai = new GoogleGenAI({ apiKey });

const getGeminiResponse = async (prompt) => {
  if (!apiKey)
    throw new Error(
      "Google API Key is missing. Please add it to your .env file.",
    );

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  return response.text;
};

// =======================
// ROUTES
// =======================

app.post("/api/gpt/search", async (req, res) => {
  const { query } = req.body;
  if (!query) {
    return res.status(400).json({ error: "Query is required." });
  }

  try {
    const prompt = `Act as a professional Movie Recommendation System for a Netflix-like clone app. 
    The user's query is: "${query}".
    Provide exactly 5 movie suggestions based on the query. Do not provide any conversational text, explanations, or numbers.
    Just return the 5 movie names separated by commas (e.g., "Inception, Interstellar, The Dark Knight, Memento, Tenet").`;

    const result = await getGeminiResponse(prompt);
    const movies = result
      .split(",")
      .map((m) => m.trim())
      .filter((m) => m);

    res.json({ movies });
  } catch (error) {
    console.error("Gemini Search Error:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch recommendations from Gemini API." });
  }
});

app.post("/api/gpt/explain", async (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Movie title is required." });
  }

  try {
    const prompt = `Explain the movie "${title}" in exactly 3 short lines. Make it compelling so the user wants to watch it.`;
    const explanation = await getGeminiResponse(prompt);
    res.json({ title, explanation });
  } catch (error) {
    console.error("Gemini Explain Error:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch explanation from Gemini API." });
  }
});

app.post("/api/gpt/mood", async (req, res) => {
  const { mood } = req.body;
  if (!mood) {
    return res.status(400).json({ error: "Mood is required." });
  }

  try {
    const prompt = `The user is feeling '${mood}'. As a Movie Recommendation System, suggest an obscure but highly rated and brilliant movie that perfectly fits this mood. Give the output strictly in JSON format like: {"title": "Movie Name", "reason": "Why it fits"}`;
    const rawResult = await getGeminiResponse(prompt);

    const jsonMatch = rawResult.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("Invalid format returned by AI");

    const result = JSON.parse(jsonMatch[0]);
    res.json(result);
  } catch (error) {
    console.error("Gemini Mood Error:", error);
    res
      .status(500)
      .json({ error: "Failed to calculate mood from Gemini API." });
  }
});

app.post("/api/gpt/playlist", async (req, res) => {
  const { promptQuery } = req.body;
  if (!promptQuery) {
    return res.status(400).json({ error: "Prompt is required." });
  }

  try {
    const prompt = `The user wants a playlist. Query: "${promptQuery}". As a Movie Recommendation System, generate a 'Weekend Binge List' of 4 movies or shows. Ignore numbering. Give the output strictly in an array of JSON objects format, e.g.: [{"title": "Movie 1", "genre": "Sci-Fi"}, {"title": "Movie 2", "genre": "Action"}]`;
    const rawResult = await getGeminiResponse(prompt);

    const arrayMatch = rawResult.match(/\[[\s\S]*\]/);
    if (!arrayMatch) throw new Error("Invalid format returned by AI");

    const result = JSON.parse(arrayMatch[0]);
    res.json({ playlist: result });
  } catch (error) {
    console.error("Gemini Playlist Error:", error);
    res.status(500).json({ error: "Failed to generate playlist." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Netflix-GPT Backend running on port ${PORT}`);
});
