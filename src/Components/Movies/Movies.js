import React, { useEffect, useState } from "react";
import useMovieData from "../../Hooks/useMovieData";
import Header from "./Header/Header";
import MovieCard from "./MovieCard/MovieCard";
import SearchMovie from "./SearchMovie/SearchMovie";

const Movies = () => {
  const [year, setYear] = useState("");
  const [search, setSearch] = useState("");
  const [searchMovie, setSearchMovie] = useState([]);
  const { moviesData } = useMovieData();
  const movies = moviesData?.data?.results;

  //   ? All data api  //////
  useEffect(() => {
    fetch(`https://movie-task.vercel.app/api/search?page=1&query=${search}`)
      .then((res) => res.json())
      .then((data) => setSearchMovie(data?.data.results));
  }, [search]);
  console.log(searchMovie);
  return (
    <div>
      <Header setYear={setYear} setSearch={setSearch}></Header>
      {searchMovie.length === 0 ? (
        <MovieCard movies={movies} year={year}></MovieCard>
      ) : (
        <SearchMovie searchMovie={searchMovie} year={year}></SearchMovie>
      )}
    </div>
  );
};

export default Movies;
