import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MoviesDetail from "./pages/MoviesDetail";


function App(){
  return (

    <Routes>
      <Route path="/"   element = {<Home />} />
      <Route path="/movie/:id"   element = {<MoviesDetail />} />
    </Routes>
  )
}

export default App