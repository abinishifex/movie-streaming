function MovieCard({id,title, image}){
return(
    <div class-lgName="bg-gray-900 rounded overflow-hidden shadow-lg transform  hover:scale-105 transition ">

        <img 
        key={id}
        src={image} 
        alt={title} 
        className="w-full rounded"/>

        
        <h2 className="text-white p-2 text-center">
            {title}
        </h2>
    </div>
);
}

export default MovieCard;