import { FaPlay } from "react-icons/fa6";
import { motion } from "framer-motion";

const MovieCard = ({ movie, onPlay }) => {
  const { title, year, poster_path, fullThumb } = movie;

  const handlePlayClick = async () => {
  if (movie.fullThumb) {
    const params = new URLSearchParams({ title });
    if (year) params.append("year", year);

    const res = await fetch(`/api/play?${params}`);
    const data = await res.json();
    if (data.streamUrl) onPlay(data.streamUrl);
  } else {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${import.meta.env.VITE_TMDB_KEY}`);
    const data = await res.json();
    const trailer = data.results.find(v => v.type === "Trailer" && v.site === "YouTube");
    if (trailer) {
      onPlay(`https://www.youtube.com/embed/${trailer.key}?autoplay=1`);
    } else {
      alert("Trailer not found.");
    }
  }
};


  const posterPath = poster_path
    ? "https://image.tmdb.org/t/p/w500" + poster_path
    : fullThumb;

  return (
    <motion.div 
      whileHover={{ scale: 1.08, zIndex: 10 }}
      transition={{ duration: 0.3 }}
      className="relative w-36 md:w-48 group cursor-pointer flex-shrink-0"
    >
      <img src={posterPath} alt={title} className="rounded-xl w-full h-auto object-cover shadow-lg" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex flex-col items-center justify-center p-2">
        <button
          onClick={handlePlayClick}
          className="text-white bg-red-600/90 p-4 rounded-full hover:bg-red-500 shadow-2xl transition-transform hover:scale-110"
        >
          <FaPlay size={24} className="text-white" />
        </button>
        <p className="text-white font-bold text-sm text-center mt-4 drop-shadow-md truncate w-full">{title}</p>
      </div>
    </motion.div>
  );
};


export default MovieCard;