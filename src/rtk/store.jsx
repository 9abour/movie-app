import { configureStore } from "@reduxjs/toolkit";
import movieDetailsSlice, { movieDetails } from "./slices/movieDetailsSlice";
import moviesSlice from "./slices/moviesSlice";
import SearchSlice from "./slices/SearchSlice";
import TopMovieSlice from "./slices/TopMovieSlice";
import TopMoviesSlice from "./slices/TopMoviesSlice";

const store = configureStore({
	reducer: {
		movies: moviesSlice,
		movieDetails: movieDetailsSlice,
		topMovies: TopMoviesSlice,
		topMovie: TopMovieSlice,
		search: SearchSlice,
	},
});

export default store;
