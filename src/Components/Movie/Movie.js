import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../Shared/Loading";

const Movie = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // ? Filter data api

  const { data: movie, isLoading } = useQuery(["movie"], () =>
    fetch(`https://movie-task.vercel.app/api/movie?movieId=${id}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  const handleDetails = () => {
    navigate("/");
  };
  const m = movie.data;

  return (
    <div className="flex justify-center my-10">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={`https://image.tmdb.org/t/p/original${m.poster_path}`}
            alt="Album"
            className="w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Title: {m.title}</h2>
          <p>
            <span className="font-semibold">Tagline:</span> {m.tagline}
          </p>
          <p>
            <span className="font-semibold">Release Date:</span>{" "}
            {m.release_date}
          </p>
          <p>
            <span className="font-semibold">Language:</span>{" "}
            {m.original_language}
          </p>
          <p>
            <span className="font-semibold">Original title:</span>{" "}
            {m.original_title}
          </p>
          <p>
            <span className="font-semibold">Vote:</span> {m.vote_average}
          </p>
          <p>
            <span className="font-semibold">Vote Count:</span> {m.vote_count}
          </p>
          <p>
            <span className="font-semibold">Popularity:</span> {m.popularity}
          </p>
          <p>
            <span className="font-semibold text-justify">Description: </span>
            {m.overview}
          </p>
          <div>
            {m.homepage && (
              <button className="btn btn-primary mr-5">
                <a href={m.homepage} rel="noreferrer" target="_blank">
                  See website
                </a>
              </button>
            )}

            <button onClick={() => handleDetails()} className="btn btn-primary">
              Back to home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
