import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "k_98sb98vr";

export const getMovieDetails = createAsyncThunk(
	"movieDetails/getMoveDetails",
	async movieId => {
		const resp = await fetch(
			`https://imdb-api.com/en/API/Title/${API_KEY}/${movieId}/FullActor,Posters,Trailer,Ratings`
		);
		const data = await resp.json();
		return data;
	}
);

export const movieDetails = createSlice({
	initialState: {
		movies: [],
		isLoading: true,
	},
	name: "movieDetails",
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getMovieDetails.pending, state => {
			state.isLoading = true;
			return state;
		});
		builder.addCase(getMovieDetails.fulfilled, (state, action) => {
			state.movies = action.payload;
			state.isLoading = false;
			return state;
		});
		builder.addCase(getMovieDetails.rejected, state => {
			state.isLoading = true;
			return state;
		});
	},
});

export default movieDetails.reducer;
