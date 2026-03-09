function MovieCard({title, image}){
return(
    <div class-lgName="bg-gray-900 rounded-lg overflow-hidden shadow">

        <img 
        src={image} 
        alt={title} 
        className="w-full"/>

        
        <h2 className="text-white p-2 text-center">
            {title}
        </h2>
    </div>
);
}

export default MovieCard;