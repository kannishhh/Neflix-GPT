import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utilities/constants";
import { addTrendingMovies } from "../stores/moviesSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_KEY}`,
      API_OPTIONS
    );
    const json = await data.json()
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
