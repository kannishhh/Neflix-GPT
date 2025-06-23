import { useSelector } from "react-redux";
import lang from "../utilities/langaugeConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className=" pt-[15%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12 rounded">
        <input
          type="text"
          className="p-2 m-2 bg-white col-span-9 rounded"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 m-2 bg-red-800 text-white rounded col-span-3">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
