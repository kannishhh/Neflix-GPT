import {Play} from "lucide-react"

const MovieCard = ({ movie, onPlay }) => {
  const { title, year, poster_path, fullThumb } = movie;

  const handlePlayClick = async () => {
  if (movie.fullThumb) {
    const params = new URLSearchParams({ title });
    if (year) params.append("year", year);

    const res = await fetch(`http://localhost:5000/api/play?${params}`);
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
    <div className="relative w-48 group">
      <img src={posterPath} alt={title} className="rounded-xl w-full object-cover" />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
        <button
          onClick={handlePlayClick}
          className="text-black px-1 py-1 rounded-full hover:bg-black/10 shadow-md"
        >
          <Play size={44} />
        </button>
      </div>
    </div>
  );
};


export default MovieCard;