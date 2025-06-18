import Header from "./Header";
import ShowCase from "./showCase";
import MoviesRow from "./moviesRow";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useNowPlayingMovies from "../hooks/useMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTrendingMovies();

  return (
    <div>
      <Header />
      <ShowCase />
      <MoviesRow />
    </div>
  );
};

export default Browse;
