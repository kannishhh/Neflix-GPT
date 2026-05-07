const MovieCardSkeleton = () => {
  return (
    <div className="relative w-36 md:w-48 group flex-shrink-0 animate-pulse">
      <div className="bg-gray-700/50 rounded-xl w-full aspect-[2/3]"></div>
    </div>
  );
};

export default MovieCardSkeleton;
