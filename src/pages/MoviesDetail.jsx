import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function MoviesDetail(){

    const { id } = useParams();
    const [ movie, setMovie ] = useState(null);
    const API_KEY = "33ad0a4fc399c5db95f74efc20a94b18"

    useEffect(() =>{

        fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(data => setMovie(data));
    }, [id])

    if(!movie){
        return <div className="text-black">Loading...</div>
    }
return (
    <div className="bg-gray-950 text-white min-h-screen">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
       
       <h1 className="text-3xl font-bold mt-4">
        {movie.title}
        </h1>

        <p className="mt-2"> 
            ⭐ Rating: {movie.vote_average}
        </p>

        <p className="mt=3
        "> 
            Realase Date: {movie.realease_date} </p>

        <p className= "mt-4"> 
            {movie.overview}
        </p>
    </div>
    )
}

export default MoviesDetail;