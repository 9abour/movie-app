import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "k_98sb98vr";

export const fetchSearch = createAsyncThunk(
	"search/fetchSearch",
	async searchValue => {
		const resp = await fetch(
			`https://imdb-api.com/en/API/Search/${API_KEY}/${searchValue}`
		);
		const data = await resp.json();
		return data;
	}
);

export const SearchSlice = createSlice({
	initialState: {
		results: [],
		isLoading: true,
	},
	name: "search",
	extraReducers: builder => {
		builder.addCase(fetchSearch.pending, state => {
			state.isLoading = true;
			return state;
		});
		builder.addCase(fetchSearch.fulfilled, (state, action) => {
			state = action.payload;
			state.isLoading = false;
			return state;
		});
		builder.addCase(fetchSearch.rejected, state => {
			state.isLoading = true;
			return state;
		});
	},
});

export default SearchSlice.reducer;
