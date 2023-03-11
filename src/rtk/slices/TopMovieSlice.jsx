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
				{
					id: "tt10640346",
					title: "Babylon (I)",
					fullTitle: "Babylon (I) (2022)",
					year: "2022",
					releaseState: "23 Dec 2022",
					image:
						"https://m.media-amazon.com/images/M/MV5BNjlkYjc4NGMtZjc3MS00NjQ3LTk4MmUtMTkwZGZjODE1ZDVlXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.6699_AL_.jpg",
					runtimeMins: "189",
					runtimeStr: "189 mins",
					plot: "A tale of outsized ambition and outrageous excess, it traces the rise and fall of multiple characters during an era of unbridled decadence and depravity in early Hollywood.",
					contentRating: "R",
					imDbRating: "7.4",
					imDbRatingCount: "49652",
					metacriticRating: "60",
					genres: "Comedy, Drama, History",
					genreList: [
						{
							key: "Comedy",
							value: "Comedy",
						},
						{
							key: "Drama",
							value: "Drama",
						},
						{
							key: "History",
							value: "History",
						},
					],
					directors: "Damien Chazelle",
					directorList: [
						{
							id: "nm3227090",
							name: "Damien Chazelle",
						},
					],
					stars: "Brad Pitt, Margot Robbie, Jean Smart, Olivia Wilde",
					starList: [
						{
							id: "nm0000093",
							name: "Brad Pitt",
						},
						{
							id: "nm3053338",
							name: "Margot Robbie",
						},
						{
							id: "nm0005443",
							name: "Jean Smart",
						},
						{
							id: "nm1312575",
							name: "Olivia Wilde",
						},
					],
				},
				{
					id: "tt6710474",
					title: "Everything Everywhere All at Once",
					fullTitle: "Everything Everywhere All at Once (2022)",
					year: "2022",
					releaseState: "08 Apr 2022",
					image:
						"https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_Ratio0.6890_AL_.jpg",
					runtimeMins: "139",
					runtimeStr: "139 mins",
					plot: "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.",
					contentRating: "R",
					imDbRating: "8",
					imDbRatingCount: "317112",
					metacriticRating: "81",
					genres: "Action, Adventure, Comedy",
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
							key: "Comedy",
							value: "Comedy",
						},
					],
					directors: "Dan Kwan, Daniel Scheinert",
					directorList: [
						{
							id: "nm3453283",
							name: "Dan Kwan",
						},
						{
							id: "nm3215397",
							name: "Daniel Scheinert",
						},
					],
					stars: "Michelle Yeoh, Stephanie Hsu, Jamie Lee Curtis, Ke Huy Quan",
					starList: [
						{
							id: "nm0000706",
							name: "Michelle Yeoh",
						},
						{
							id: "nm3513533",
							name: "Stephanie Hsu",
						},
						{
							id: "nm0000130",
							name: "Jamie Lee Curtis",
						},
						{
							id: "nm0702841",
							name: "Ke Huy Quan",
						},
					],
				},
			],
			errorMessage: "",
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
