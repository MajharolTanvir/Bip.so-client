import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../Shared/Loading";
import Header from "./Header/Header";
import MovieCard from "./MovieCard/MovieCard";

const Movies = () => {
  const {
    data: moviesData,
    isLoading,
    error,
  } = useQuery(["moviesData"], () =>
    fetch(" https://movie-task.vercel.app/api/popular?page=1").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  const movies = moviesData.data.results;
  console.log(movies);
  return (
    <div>
      <Header></Header>
      <MovieCard movies={movies}></MovieCard>
    </div>
  );
};

export default Movies;
