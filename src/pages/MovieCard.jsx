import { IMG_CDN_URL } from "../utilities/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="min-w-[200px] max-w-[200px] h-[250px] pr-3 overflow-hidden transform hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
      <img
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
        className="w-full h-full object-cover rounded-md"
      />
    </div>
  );
};
export default MovieCard;
