import { Route, Routes } from "react-router-dom";
import "./App.css";
import Movie from "./Components/Movie/Movie";
import Movies from "./Components/Movies/Movies";

function App() {
  return (
    <div className="App container mx-auto">
      <Routes>
        <Route path="/" element={<Movies></Movies>}></Route>
        <Route path="/movie/:id" element={<Movie></Movie>}></Route>
      </Routes>
    </div>
  );
}

export default App;
