import { useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import VideoModal from "./VideoModal";

const MovieList = ({ title, movies, showRank = false }) => {
  const [modalUrl, setModalUrl] = useState(null);

  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -500, behavior: "smooth" });
  };
  const scrollRight = () => {    
    scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
  };

  const handlePlay = (url) => setModalUrl(url);
  const closeModal = () => setModalUrl(null);
  
  return (
    <div className="relative group mb-8 px-4 md:px-12">
      <h1 className="text-2xl mb-4 font-bold text-white drop-shadow-md">{title}</h1>

      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-0 bottom-0 z-20 w-12 bg-black/40 hover:bg-black/80 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <FaChevronLeft size={36} className="transform hover:scale-125 transition-transform" />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-scroll no-scrollbar gap-4 pb-4 scroll-smooth snap-x snap-mandatory"
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
                title={movie.title}
                year={movie.year}
                movie={movie}
                onPlay={handlePlay}
              />
            </div>
          ))}
        </div>
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-0 bottom-0 z-20 w-12 bg-black/40 hover:bg-black/80 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <FaChevronRight size={36} className="transform hover:scale-125 transition-transform" />
        </button>
      </div>
      <VideoModal videoUrl={modalUrl} onClose={closeModal} />
    </div>
  );
};
export default MovieList;
