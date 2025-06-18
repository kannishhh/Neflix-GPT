import VideoBackground from "./videoBackground";
import VideoTitle from "./videoTitle";
import { useSelector } from "react-redux";

const ShowCase = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoBackground movieId={id} />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default ShowCase;
