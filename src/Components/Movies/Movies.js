import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Loading from "../../Shared/Loading";
import Header from "./Header/Header";
import MovieCard from "./MovieCard/MovieCard";

const Movies = () => {
  const [year, setYear] = useState("");

  //   ? All data api  //////
  const { data: moviesData, isLoading } = useQuery(["moviesData"], () =>
    fetch(" https://movie-task.vercel.app/api/popular?page=1").then((res) =>
      res.json()
    )
  );
  console.log(year);

  const movies = moviesData?.data?.results;
  const release = movies?.map((m) => m?.release_date?.split("-")[0] === year);
  console.log(release);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Header setYear={setYear}></Header>
      <MovieCard movies={movies} year={year}></MovieCard>
    </div>
  );
};

export default Movies;
