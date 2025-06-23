import { BG_URL } from "../utilities/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./gptSearchBar";

const GPTSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_URL} alt="Background_logo" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GPTSearchPage;
