import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utilities/constants";
import { addUpcomingMovies } from "../stores/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_KEY}`,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
