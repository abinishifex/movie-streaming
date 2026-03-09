import Navbar from "./components/Navbar"
import MovieCard from "./components/MovieCard"

function App() {
  const movies = [
    {
    id: 1,
    title:"Batman", 
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
},
 {
    id: 2,
      title:"Avatar", 
    image: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"
},
 {
    id:3,
      title:"Batman", 
    image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
},

  ]

return(
  <div className="bg-gray-950 min-h-screen">

  <Navbar />
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 rounded">
  {movies.map((movie) => (
    <MovieCard
    key={movie.id}
    title={movie.title}
    image={movie.image}
    />
  ))}
  </div>
  
  </div>
  )

}
export default App
