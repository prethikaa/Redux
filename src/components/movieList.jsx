import React, { use } from "react";
import { useDispatch, useSelector } from "react-redux";
export const MovieList = () => {
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeMovie(id));
  };

  return (
    <>
      <div>
        <h1>My Movies List</h1>
        {movies.map((movie) => (
          <>
            <li key={movie.id}>
              {movie.name}
              <button onClick={() => handleRemove(movie.id)}>Remove</button>
            </li>
          </>
        ))}
      </div>
    </>
  );
};
