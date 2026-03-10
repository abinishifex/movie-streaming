import Navbar from "../components/Navbar"
import MovieCard from "../components/MovieCard"
import { fetchMovies } from "../services/api"
import { useState, useEffect } from "react"

function Home() {
 
const [movies, setMovies] = useState([]);

useEffect(() =>{
    const loadMovies = async () => {
        const data = await fetchMovies();

        setMovies(data.results);
    };

    loadMovies();
}, [])
return(
  <div className="bg-gray-950 min-h-screen">

  <Navbar />
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 rounded">
  {movies.map((movie) => (
    <MovieCard
    key={movie.id}
    title={movie.title}
    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
    />
  ))}
  </div>
  
  </div>
  )

}
export default Home;
