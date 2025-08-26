import Header from "../layouts/Header";
import ShowCase from "./ShowCase";
import MoviesRow from "./MoviesRow";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useNowPlayingMovies from "../hooks/useMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTrendingMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearchPage />
      ) : (
        <>
          <ShowCase />
          <MoviesRow />
        </>
      )}
    </div>
  );
};

export default Browse;
