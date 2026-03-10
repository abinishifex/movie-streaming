import React from "react"
import { Link } from "react-router-dom"

function Navbar(){

    return (
        
        <nav className="bg-gray-950 text-white flex justify-between item-center p-4 ">
        <div>
        <h1 className="font-bold text-2xl">
            Movie Stream
        </h1>
        </div>
        <div>
            <input type="text" placeholder="Search movies..." className="border-none  bg-gray-900 px-6 py-1 rounded-3xl"/>
       </div>
       
        <div className="text-bold text-white flex gap-4 mr-20">
            <Link>Home</Link>
            <Link>Favorite</Link>
        </div>
    

        </nav>
        
    )
}

export default Navbar;