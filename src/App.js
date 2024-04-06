import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "./App.css";

const movie1 = {
  Title: "Destiny Undefined",
  Year: "2009",
  imdbID: "tt9343638",
  Type: "movie",
  Poster: "N/A",
};

const API_URL = "https://www.omdbapi.com?apikey=feb545df";

const App = () => {
  const [Movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState();

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies();
  }, []);
  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input
          placeholder='Search for Movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src='https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg'
          alt='search'
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {Movies?.length > 0 ? (
        <div className='container'>
          {Movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>No Movies Found!!!</h2>
        </div>
      )}
    </div>
  );
};

export default App;
