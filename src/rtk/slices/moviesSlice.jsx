import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "k_98sb98vr";

export const fetchCategories = createAsyncThunk(
	"moviesCategories/fetchCategories",
	async category => {
		const resp = await fetch(`${category}/${API_KEY}`);
		const data = await resp.json();
		return data;
	}
);

export const fetchAdvancedSearch = createAsyncThunk(
	"advancedSearch/fetchAdvancedSearch",
	async url => {
		const resp = await fetch(url);
		const info = await resp.json();
		// const info = {
		// 	results: [
		// 		{
		// 			id: "tt1281838",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BNTkwYmM4NTAtYjgxYy00ZGY0LThhMDItZmI5ZDFhMzMzOTI0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAzMTc1NjE@._V1_Ratio0.8061_AL_.jpg",
		// 			title: "Godfather: The Legend Continues",
		// 			description: "(2007)",
		// 			runtimeStr: "146 min",
		// 			genres: "Action, Thriller",
		// 			genreList: [
		// 				{
		// 					key: "Action",
		// 					value: "Action",
		// 				},
		// 				{
		// 					key: "Thriller",
		// 					value: "Thriller",
		// 				},
		// 			],
		// 			contentRating: null,
		// 			imDbRating: "5.4",
		// 			imDbRatingVotes: "44",
		// 			metacriticRating: null,
		// 			plot: "A thriller focusing on the rise of a group of influential and powerful gangsters. Ali is basically a shepherd who has shouldered responsibility of fending for his family, including his ... See full summary",
		// 			stars:
		// 				"Hriday Shetty, Mehmood Akhtar, Nafisa Ali, Amrita Arora, Hrishitaa Bhatt",
		// 			starList: [
		// 				{
		// 					id: "tt1281838",
		// 					name: "Hriday Shetty",
		// 				},
		// 				{
		// 					id: "tt1281838",
		// 					name: "Mehmood Akhtar",
		// 				},
		// 				{
		// 					id: "tt1281838",
		// 					name: "Nafisa Ali",
		// 				},
		// 				{
		// 					id: "tt1281838",
		// 					name: "Amrita Arora",
		// 				},
		// 				{
		// 					id: "tt1281838",
		// 					name: "Hrishitaa Bhatt",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt14856306",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BYzYxMzJhYTYtYWQzNy00NzhmLWFkZGItNTU2NzY0NWFiNzEzXkEyXkFqcGdeQXVyMTMxOTQ4MTIw._V1_Ratio0.7041_AL_.jpg",
		// 			title: "The Russian Godfather",
		// 			description: "(1996)",
		// 			runtimeStr: "98 min",
		// 			genres: "Action",
		// 			genreList: [
		// 				{
		// 					key: "Action",
		// 					value: "Action",
		// 				},
		// 			],
		// 			contentRating: null,
		// 			imDbRating: "6.4",
		// 			imDbRatingVotes: "5",
		// 			metacriticRating: null,
		// 			plot: "A bungled bank robbery puts two cops - one Russian and one American on the trail of the Russian Mafia crime family operating out of L.A. The Russian police officer, an elite agent from ... See full summary",
		// 			stars:
		// 				"Jorgo Ognenovski, Jeff Conaway, Lisa K. Crosato, Kim Dawson, Maryann Honstrater",
		// 			starList: [
		// 				{
		// 					id: "tt14856306",
		// 					name: "Jorgo Ognenovski",
		// 				},
		// 				{
		// 					id: "tt14856306",
		// 					name: "Jeff Conaway",
		// 				},
		// 				{
		// 					id: "tt14856306",
		// 					name: "Lisa K. Crosato",
		// 				},
		// 				{
		// 					id: "tt14856306",
		// 					name: "Kim Dawson",
		// 				},
		// 				{
		// 					id: "tt14856306",
		// 					name: "Maryann Honstrater",
		// 				},
		// 			],
		// 		},
		// 	],
		// 	errorMessage: null,
		// };
		const finalData = { items: info.results };
		return finalData;
	}
);

export const moviesSlice = createSlice({
	initialState: {
		defaultMovies: [],
		isLoading: false,
	},
	name: "moviesCategories",
	extraReducers: builder => {
		builder.addCase(fetchCategories.fulfilled, (state, action) => {
			state.isLoading = false;
			state.defaultMovies = action.payload;
			return state;
		});
		builder.addCase(fetchAdvancedSearch.pending, state => {
			state.isLoading = true;
			return state;
		});
		builder.addCase(fetchAdvancedSearch.fulfilled, (state, action) => {
			state.isLoading = false;
			state.defaultMovies = action.payload;
			return state;
		});
		builder.addCase(fetchAdvancedSearch.rejected, state => {
			state.isLoading = true;
			return state;
		});
	},
});

export default moviesSlice.reducer;
