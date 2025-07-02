import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utilities/constants";
import { addNowPlayingMovies } from "../stores/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
