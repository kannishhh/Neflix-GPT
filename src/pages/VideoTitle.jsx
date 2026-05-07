import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo, faRobot } from "@fortawesome/free-solid-svg-icons"; 
import { motion } from "framer-motion";
import { useState } from "react";

const VideoTitle = ({ title, overview }) => {
  const [explanation, setExplanation] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleExplain = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/gpt/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });
      const data = await res.json();
      setExplanation(data.explanation);
    } catch (e) {
      setExplanation("Failed to fetch explanation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-black/50 to-transparent px-10 md:px-24">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 pt-[10%]"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl">{title}</h1>
        <p className="hidden md:block text-gray-300 mt-4 text-lg drop-shadow-lg line-clamp-3">
          {overview}
        </p>

        {explanation && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-4 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-blue-100 font-semibold shadow-2xl"
          >
            <FontAwesomeIcon icon={faRobot} className="mr-2 text-blue-400" />
            {explanation}
          </motion.div>
        )}

        <div className="my-6 flex gap-3 flex-wrap">
          <button className="bg-white text-black px-6 md:px-8 py-2 md:py-3 rounded-md text-center hover:bg-white/80 transition-all font-bold tracking-wide shadow-lg flex items-center">
            <FontAwesomeIcon icon={faPlay} className="mr-3"/>
            Play
          </button>
          <button className="bg-gray-500/50 backdrop-blur-sm px-6 md:px-8 py-2 md:py-3 rounded-md text-white font-semibold hover:bg-gray-500/70 transition-all shadow-lg flex items-center border border-white/10">
            <FontAwesomeIcon icon={faCircleInfo} className="mr-3 text-xl"/>
            More Info
          </button>
          {!explanation && (
            <button 
              onClick={handleExplain}
              disabled={loading}
              className="bg-purple-600/80 backdrop-blur-md px-6 md:px-6 py-2 md:py-3 rounded-md text-white font-bold hover:bg-purple-500 transition-all shadow-lg flex items-center border border-purple-400 m-0"
            >
              <FontAwesomeIcon icon={faRobot} className="mr-3"/>
              {loading ? "Asking AI..." : "Explain with AI"}
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default VideoTitle;
