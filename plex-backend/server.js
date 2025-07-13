require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

const PLEX_SERVER = process.env.PLEX_SERVER;
const PLEX_TOKEN = process.env.PLEX_TOKEN;
const MOVIE_SECTION_ID = 1;

app.get("/api/sections", async (req, res) => {
  try {
    const url = `http://${PLEX_SERVER}:32400/library/sections/${MOVIE_SECTION_ID}/all?X-Plex-Token=${PLEX_TOKEN}`;

    const headers = {
      Accept: "application/json",
    };

    const response = await axios.get(url, { headers });

    const media = response.data.MediaContainer.Metadata || [];

    const movies = media.map((movie) => ({
      id: movie.ratingKey,
      title: movie.title,
      year: movie.year,
      fullThumb: `http://${PLEX_SERVER}:32400${movie.thumb}?X-Plex-Token=${PLEX_TOKEN}`,
    }));

    res.json({ movies });
  } catch (error) {
    console.error(" /api/sections error:", error.message);
    res.status(500).json({ error: "Failed to fetch sections from Plex" });
  }
});

app.get("/api/play", async (req, res) => {
  const { title, year } = req.query;

  try {
    const url = `http://${PLEX_SERVER}:32400/library/sections/${MOVIE_SECTION_ID}/all?X-Plex-Token=${PLEX_TOKEN}`;
    const headers = { Accept: "application/json" };
    const response = await axios.get(url, { headers });

    const media = response.data.MediaContainer?.Metadata || [];

    const match = media.find(
      (item) =>
        item.title?.toLowerCase() === title?.toLowerCase() &&
        (!year || parseInt(item.year) === parseInt(year))
    );

    if (!match) {
      return res.status(404).json({ error: "Movie not found in Plex" });
    }

    const ratingKey = match.ratingKey;
    const streamUrl = `http://${PLEX_SERVER}:32400/video/:/transcode/universal/start.m3u8?mediaIndex=0&partIndex=0&ratingKey=${ratingKey}&X-Plex-Token=${PLEX_TOKEN}`;


    res.json({ streamUrl });
  } catch (error) {
    console.error("/api/play error:", error.message);
    res.status(500).json({ error: "Server error while playing movie" });
  }
});



const PORT = 5000;
app.listen(PORT, () => {
});
