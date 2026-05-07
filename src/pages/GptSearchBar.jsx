import { useDispatch, useSelector } from "react-redux";
import { gptLang } from "../utilities/i18n";
import { useRef } from "react";

import { API_OPTIONS } from "../utilities/constants";
import { addGptMovieResults } from "../stores/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1&api_key=${
        import.meta.env.VITE_TMDB_KEY
      }`,
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    const queryInput = searchText.current.value;
    if (!queryInput) return;

    try {
      const gptRes = await fetch("/api/gpt/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: queryInput }),
      });
      const gptData = await gptRes.json();
      
      const gptMovies = gptData.movies;
      if (!gptMovies || gptMovies.length === 0) return;

      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResult = await Promise.all(promiseArray);

      dispatch(
        addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbResult })
      );
    } catch (error) {
      console.error("Error fetching AI recommendations:", error);
    }
  };

  return (
    <div className=" pt-[15%] p-5 flex justify-center">
      <form
        className=" w-1/2 bg-black grid grid-cols-12 rounded"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-2 m-2 bg-white col-span-9 rounded font-semibold text-lg"
          placeholder={gptLang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-2 bg-red-700/70 text-white rounded col-span-3 text-lg hover:bg-red-800/70"
          onClick={handleGptSearchClick}
        >
          {gptLang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
