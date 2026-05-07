import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const ShowCase = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[1];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative w-screen h-[100vh] lg:h-screen">
      <VideoBackground movieId={id} />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default ShowCase;
