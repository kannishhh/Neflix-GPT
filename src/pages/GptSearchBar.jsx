import { useDispatch, useSelector } from "react-redux";
import lang from "../utilities/langaugeConstants";
import { useRef } from "react";
import generateAiContent from "../utilities/googleApi";
import { API_OPTIONS } from "../utilities/constants";
import { addGptMovieResults } from "../stores/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    const queryInput = searchText.current.value;

    const gptQuery =
      "Act as a movie Recommendation system and sugegst some movies for the query" +
      queryInput +
      ". Only give me names of 5 movies, comma sperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmal, Dhamal";
    ("");
    const gptResults = await generateAiContent(gptQuery);
    const gptMovies = gptResults?.split(",").map((movie) => movie.trim());

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResult = await Promise.all(promiseArray);
    console.log(tmdbResult);

    dispatch(
      addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbResult })
    );
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
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-2 bg-red-700/70 text-white rounded col-span-3 text-lg hover:bg-red-800/70"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
