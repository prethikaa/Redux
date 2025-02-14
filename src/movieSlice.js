import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [
    { id: 1, name: "Tangled" },
    { id: 2, name: "ABC" },
  ],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const newMovieData = {
        id: state.movies.length + 1,
        name: action.payload,
      };
      state.movies.push(newMovieData);
    },
    removeMovie: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;
