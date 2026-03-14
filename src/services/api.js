
const API_KEY = "33ad0a4fc399c5db95f74efc20a94b18";

const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async() => {
    
    const res = await fetch(
        `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
    );

    const data = await res.json();

    return data;
};

