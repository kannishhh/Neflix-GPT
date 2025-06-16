import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons"; 

const VideoTitle = ({ title }) => {
  return (
    <div className="pt-[25%] px-16 w-1/3 absolute">
      <h1 className="text-6xl font-bold">{title}</h1>
      {/* <p className="text-lg py-6 w-1/2">{overview}</p> */}
      <div className="my-8 space-x-3 ">
        <button className="bg-white text-black px-8 py-2 rounded text-center hover:bg-gray-300/70">
          <FontAwesomeIcon icon={faPlay} className="pr-3"/>
          Play
        </button>
        <button className="bg-gray-700/40 px-7 py-2 rounded text-white font-bold hover:bg-gray-500/40 text-center">
        <FontAwesomeIcon icon={faCircleInfo} className="pr-2 text-xl"/>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
