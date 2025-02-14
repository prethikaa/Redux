import React, { use } from "react";
import { useSelector } from "react-redux";
export const MovieList = () => {
  const movies = useSelector((state) => state.movies.movies);
  console.log(movies);
  return (
    <>
      <div>Movie List</div>
      {movies.map((movie) => (
        <div key={movie.id}>{movie.name}</div>
      ))}
    </>
  );
};
