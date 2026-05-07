import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utilities/constants";
import { addPopularMovies } from "../stores/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${import.meta.env.VITE_TMDB_KEY}`,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
