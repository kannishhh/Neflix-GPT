import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieRow = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black text-white">
        <div className="realtive z-20 pl-2 -mt-56">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.trendingMovies} showRank={true}/>
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.upcomingMovies}
          />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        </div>
      </div>
    )
  );
};
export default MovieRow;