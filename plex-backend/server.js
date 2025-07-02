require("dotenv").config();


const express = require("express");
const PlexAPI = require("plex-api");
const cors = require("cors");

const app = express();
app.use(cors());

const PLEX_SERVER = process.env.PLEX_SERVER;
const PLEX_TOKEN = process.env.PLEX_TOKEN;

const plexClient = new PlexAPI({
  hostname: PLEX_SERVER,
  port: 32400,
  token: PLEX_TOKEN,
});

app.get("/api/play", async (req, res) => {
  const { title, year } = req.query;

  try {
    const result = await plexClient.query("/library/sections/1/all");

    console.log("📦 Plex response:", result);

    const match = result.MediaContainer.Metadata.find(
      (item) =>
        item.title.toLowerCase() === title.toLowerCase() &&
        (parseInt(year) === 0 || parseInt(item.year) === parseInt(year))
    );

    if (!match) {
      return res.status(404).json({ error: "Movie not found in Plex" });
    }

    const streamUrl = `http://${PLEX_SERVER}:32400${match.Media[0].Part[0].key}?X-Plex-Token=${PLEX_TOKEN}`;
    res.json({ streamUrl });
  } catch (err) {
    console.error("❌ Plex query error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/api/sections", async (req, res) => {
  const result = await plexClient.query("/library/sections/1/all");
  const media = result.MediaContainer?.Metadata || [];

  const moviesWithThumb = media.map((movie) => ({
    id: movie.ratingKey,
    title: movie.title,
    year: movie.year,
    fullThumb: `http://${PLEX_SERVER}:32400${movie.thumb}?X-Plex-Token=${PLEX_TOKEN}`,
  }));

  res.json({ movies: moviesWithThumb });
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Plex server running on http://localhost:${PORT}`);
});
