import Navbar from "./components/Navbar"
import MovieCard from "./components/MovieCard"

function App() {

return(
  <div className="bg-gray-950 min-h-screen">

  <Navbar />
  <MovieCard 
  title="Batman"
  image="https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
/>
  </div>
  )

}
export default App
