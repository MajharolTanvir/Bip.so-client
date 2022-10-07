import { Route, Routes } from "react-router-dom";
import "./App.css";
import Movie from "./Components/Movie/Movie";
import Movies from "./Components/Movies/Movies";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App container mx-auto">
      <Routes>
        <Route path="/" element={<Movies></Movies>}></Route>
        <Route path="/movie/:id" element={<Movie></Movie>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
