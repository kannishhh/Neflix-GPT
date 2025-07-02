import { useRef } from "react";
import MovieCard from "./MovieCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MovieList = ({ title, movies, showRank = false }) => {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -500, behaviour: "smooth" });
  };
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 500, behaviour: "smooth" });
  };
  return (
    <div className="relative group mb-6">
      <h1 className="text-xl mb-2 px-6 font-bold text-white">{title}</h1>

      <button
        onClick={scrollLeft}
        className="absolute left-2 top-[55%] -translate-y-1/2 z-10 hidden group-hover:block bg-black/60 rounded-full text-white p-2"
      >
        <FaChevronLeft size={28} />
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-scroll no-scrollbar pl-6 pr-2 space-x-2 transition-all duration-200"
      >
        <div className="flex">
          {movies?.map((movie, index) => (
            <div key={movie.id} className="relative shrink-0 w-60">
              {showRank && (
                <div className="absolute right-7 top-3/12 z-10 text-red-700/50 text-[7rem] font-extrabold drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)] leading-none pointer-events-none select-none text-outline-white">
                  {index + 1}
                </div>
              )}
              <MovieCard
                posterPath={
                  movie.poster_path
                    ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
                    : movie.fullThumb
                }
              />
            </div>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute z-10 right-4 top-[55%] -translate-y-1/2 hidden group-hover:block bg-black/60 text-white rounded-full p-2"
        >
          <FaChevronRight size={28} />
        </button>
      </div>
    </div>
  );
};
export default MovieList;
