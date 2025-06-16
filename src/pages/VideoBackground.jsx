import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";

const VideoBackground = ({ movieId }) => {

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useTrailer(movieId);

  return (
    <div className="w-full h-full absolute">
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/fbddYji1F8s?si=KmyLDiEI2ot6lM2V" +
          trailerVideo?.key + "&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
