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
      <input
        placeholder="Enter any movie here"
        onChange={(e) => setNewMovie(e.target.value)}
      />
      <button onClick={handleMovie}>Add Movie</button>
    </>
  );
};
