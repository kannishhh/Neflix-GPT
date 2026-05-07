import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useTrailer(movieId);

  if (!trailerVideo?.key) return null;

  return (
    <div className="w-screen h-screen overflow-hidden pointer-events-none absolute top-0 left-0 -z-10 bg-black">
      <iframe
        className="w-full h-full aspect-video scale-[3] md:scale-[1.4] origin-center -translate-y-4 md:-translate-y-12"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo.key +
          "?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=" + trailerVideo.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
export default VideoBackground;
