import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "k_98sb98vr";

export const getTopMovie = createAsyncThunk(
	"topMovie/topMovieSlice",
	async () => {
		// const resp = await fetch(
		// 	`https://imdb-api.com/en/API/Top250Movies/${API_KEY}`
		// );
		// const data = await resp.json();
		const data = {
			items: [
				{
					id: "tt1630029",
					title: "Avatar: The Way of Water",
					fullTitle: "Avatar: The Way of Water (2022)",
					year: "2022",
					releaseState: "16 Dec 2022",
					image:
						"https://images.hdqwalls.com/download/avatar-2-the-way-of-water-12k-y8-7680x4320.jpg",
					runtimeMins: "192",
					runtimeStr: "192 mins",
					plot: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
					contentRating: "PG-13",
					imDbRating: "7.8",
					imDbRatingCount: "282229",
					metacriticRating: "67",
					genres: "Action, Adventure, Fantasy",
					genreList: [
						{
							key: "Action",
							value: "Action",
						},
						{
							key: "Adventure",
							value: "Adventure",
						},
						{
							key: "Fantasy",
							value: "Fantasy",
						},
					],
					directors: "James Cameron",
					directorList: [
						{
							id: "nm0000116",
							name: "James Cameron",
						},
					],
					stars: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
					starList: [
						{
							id: "nm0941777",
							name: "Sam Worthington",
						},
						{
							id: "nm0757855",
							name: "Zoe Saldana",
						},
						{
							id: "nm0000244",
							name: "Sigourney Weaver",
						},
						{
							id: "nm0002332",
							name: "Stephen Lang",
						},
					],
				},
			],
		};
		return data.items[0];
	}
);

export const topMovieSlice = createSlice({
	initialState: [],
	name: "topMovie",
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getTopMovie.fulfilled, (state, action) => {
			state = action.payload;
			return state;
		});
	},
});

export default topMovieSlice.reducer;
