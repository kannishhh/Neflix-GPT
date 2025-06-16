import Header from "./Header";
import ShowCase from "./showCase";
import MoviesRow from "./moviesRow";
import useMovies from "../hooks/useMovies";


const Browse = () => {
  useMovies();

  return (
    <div>
      <Header />
      <ShowCase />
      <MoviesRow />
      {/* 
      - Main container 
        - Background trailer
        - Movie Title 
      - Second container
        - Movie List * n
          - cards * n  
        */}
    </div>
  );
};

export default Browse;
