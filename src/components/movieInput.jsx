import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../movieSlice";
export const MovieInput = () => {
  const [newMovie, setNewMovie] = useState("");
  const dispatch = useDispatch();
  const handleMovie = () => {
    if (newMovie) {
      dispatch(addMovie(newMovie));
      setNewMovie("");
    }
  };
  return (
    <>
      <div>Movie Input</div>
      <input onChange={(e) => setNewMovie(e.target.value)} />
      <button onClick={handleMovie}>Add Movie</button>
    </>
  );
};
