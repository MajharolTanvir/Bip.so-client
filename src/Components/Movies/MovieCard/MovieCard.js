import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movies, year }) => {
  const navigate = useNavigate();
  console.log(year);

  const handleDetails = (id) => {
    navigate(`/movie/${id}`);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
      {movies.map((m) =>
        m?.release_date?.split("-")[0] === year ? (
          <div key={m.id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={`https://image.tmdb.org/t/p/original${m.poster_path}`}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{m.title}</h2>
              <p>
                <span className="font-semibold">Vote:</span> {m.vote_average}
              </p>
              <button
                onClick={() => handleDetails(m.id)}
                className="btn btn-primary"
              >
                See Details
              </button>
            </div>
          </div>
        ) : (
          <div key={m.id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={`https://image.tmdb.org/t/p/original${m.poster_path}`}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{m.title}</h2>
              <p>
                <span className="font-semibold">Vote:</span> {m.vote_average}
              </p>
              <button
                onClick={() => handleDetails(m.id)}
                className="btn btn-primary"
              >
                See Details
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default MovieCard;
