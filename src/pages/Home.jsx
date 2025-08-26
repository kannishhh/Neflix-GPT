import { BG_URL } from "../utilities/constants";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import useTrendingMovies from "../hooks/useTrendingMovies";
import FeatureCard from "./FeatureCard";
import FaqAccordion from "./FaqAccordion";
import DefaultFooter from "../layouts/DefaultFooter";
import DefaultHeader from "../layouts/DefaultHeader";
import { Link } from "react-router-dom";
import { homeLang } from "../utilities/i18n";

const Home = () => {
  useTrendingMovies();

  const movies = useSelector((store) => store.movies);
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div>
      <DefaultHeader />

      <div className="relative w-full h-screen">
        <img
          src={BG_URL}
          alt="Background_Img"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-transparent via-100% to-black/90"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white px-4 z-10 w-screen max-w-3xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            {homeLang[langKey].movies}
          </h1>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            {homeLang[langKey].showMore}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6">
            {homeLang[langKey].startAt}
          </p>
          <p className="text-base md:text-lg font-semibold mb-5">
            {homeLang[langKey].readyToWatch}
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder={homeLang[langKey].email}
              className="flex-grow w-screen md:w-auto p-4 bg-black/60 border border-white/60 rounded text-white text-lg font-semibold placeholder-gray-300 focus:outline-solid focus:ring-2 focus:ring-white"
            />
            <Link>
              <button className="w-screen md:w-auto bg-red-700 hover:bg-red-800 text-white font-bold py-4 px-12 rounded text-2xl transition duration-300 ease-in-out">
                {homeLang[langKey].getStart} &gt;
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative w-full h-2 -mt-4 z-50">
        <div className="absolute -bottom-1 w-full h-2 bg-gradient-to-b from-red-700 to-transparent rounded-t-full "></div>
      </div>
      <div className="bg-black py-10 px-48 ">
        <h1 className="text-white font-bold text-2xl mb-7">
          {homeLang[langKey].trendingMovie}
        </h1>
        <MovieList movies={movies.trendingMovies} showRank={true} />
      </div>
      <FeatureCard />
      <FaqAccordion />
      <div className="bg-black text-center">
        <p className="text-white md:text-lg font-medium mb-5">
          {homeLang[langKey].readyToWatch}
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 max-w-2xl mx-auto">
          <input
            type="email"
            placeholder={homeLang[langKey].email}
            className="flex-grow w-screen md:w-auto p-4 bg-black/60 border border-white/60 rounded text-white text-lg font-semibold placeholder-gray-300 focus:outline-solid focus:ring-2 focus:ring-white"
          />
          <Link>
            <button className="w-full md:w-auto bg-red-700 hover:bg-red-800 text-white font-bold py-4 px-12 rounded text-2xl transition duration-300 ease-in-out">
              {homeLang[langKey].getStart} &gt;
            </button>
          </Link>
        </div>
      </div>

      <DefaultFooter />
    </div>
  );
};

export default Home;
