import Header from "../layouts/Header";
import ShowCase from "./showCase";
import MoviesRow from "./moviesRow";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useNowPlayingMovies from "../hooks/useMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import { useSelector } from "react-redux";
import GPTSearchPage from "./GptSearchPage";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import usePlexMovies from "../hooks/usePlexMovies";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTrendingMovies();
  useTopRatedMovies();
  usePlexMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GPTSearchPage />
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
