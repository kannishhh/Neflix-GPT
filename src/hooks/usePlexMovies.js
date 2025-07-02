import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPlexMovies } from "../stores/moviesSlice";

const usePlexMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPlexMovies = async () => {
      const res = await fetch("http://localhost:5000/api/sections");
      const data = await res.json();
      dispatch(addPlexMovies(data.movies || []));
    };

    fetchPlexMovies();
  }, []);
};

export default usePlexMovies;
