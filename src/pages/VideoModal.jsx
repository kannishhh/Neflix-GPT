import { useEffect } from "react";

const VideoModal = ({ videoUrl, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);


  if (!videoUrl) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
      <div className="relative w-full max-w-4xl aspect-video p-4">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl font-bold z-10"
        >
          ✕
        </button>
        {videoUrl.includes("youtube") ? (
          <iframe
            className="w-full h-full rounded-xl"
            src={videoUrl}
            title="YouTube Trailer"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        ) : (
          <video
            src={videoUrl}
            controls
            autoPlay
            className="w-full h-full rounded-xl"
          />
        )}
      </div>
    </div>
  );
};

export default VideoModal;
