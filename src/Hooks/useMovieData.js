import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../Shared/Loading";

const useMovieData = () => {
  const { data: moviesData, isLoading } = useQuery(["moviesData"], () =>
    fetch(" https://movie-task.vercel.app/api/popular?page=1").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  return { moviesData };
};

export default useMovieData;
