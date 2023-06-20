import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "k_98sb98vr";

export const fetchCategories = createAsyncThunk(
	"topMovies/fetchCategories",
	async category => {
		const resp = await fetch(`${category}/${API_KEY}`);
		const data = await resp.json();
		return data;
	}
);

export const topMoviesSlice = createSlice({
	initialState: [],
	name: "topMovies",
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchCategories.fulfilled, (state, action) => {
			state = action.payload;
			return state;
		});
	},
});

export default topMoviesSlice.reducer;
