import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "k_98sb98vr";

export const fetchSearch = createAsyncThunk(
	"search/fetchSearch",
	async searchValue => {
		const resp = await fetch(
			`https://imdb-api.com/en/API/Search/${API_KEY}/${searchValue}`
		);
		const date = await resp.json();
		// const date = {
		// 	searchType: "Title",
		// 	expression: "inception 2010",
		// 	results: [
		// 		{
		// 			id: "tt1375666",
		// 			resultType: "Title",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6800_AL_.jpg",
		// 			title: "Inception",
		// 			description: "(2010)",
		// 		},
		// 		{
		// 			id: "tt1790736",
		// 			resultType: "Title",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMjE0NGIwM2EtZjQxZi00ZTE5LWExN2MtNDBlMjY1ZmZkYjU3XkEyXkFqcGdeQXVyNjMwNzk3Mjk@._V1_Ratio0.6800_AL_.jpg",
		// 			title: "Inception: The Cobol Job",
		// 			description: "(2010 Video)",
		// 		},
		// 		{
		// 			id: "tt5295990",
		// 			resultType: "Title",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_Ratio0.6800_AL_.jpg",
		// 			title: "Inception: Jump Right Into the Action",
		// 			description: "(2010 Video)",
		// 		},
		// 		{
		// 			id: "tt12960252",
		// 			resultType: "Title",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			title: "Inception Premiere",
		// 			description: "(2010)",
		// 		},
		// 		{
		// 			id: "tt1686778",
		// 			resultType: "Title",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			title: "Inception: 4Movie Premiere Special",
		// 			description: "(2010 TV Movie)",
		// 		},
		// 		{
		// 			id: "tt1690359",
		// 			resultType: "Title",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			title: "ReelzChannel Spotlight",
		// 			description: "(2009– )",
		// 		},
		// 		{
		// 			id: "tt1695201",
		// 			resultType: "Title",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			title: "HBO First Look",
		// 			description: "(1992– )",
		// 		},
		// 		{
		// 			id: "tt1698324",
		// 			resultType: "Title",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMDhjZjAxYTYtMjhlYi00NDc1LWJlYzQtMDliNWUwNjM5MmFkXkEyXkFqcGdeQXVyMTI4ODc2NDY@._V1_Ratio1.4400_AL_.jpg",
		// 			title: "At the Movies",
		// 			description: "(1986–2010)",
		// 		},
		// 		{
		// 			id: "tt1701913",
		// 			resultType: "Title",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			title: "The Rotten Tomatoes Show",
		// 			description: "(2009– )",
		// 		},
		// 		{
		// 			id: "tt17676648",
		// 			resultType: "Title",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			title: "Comedy Film Nerds",
		// 			description: "(2009–2019)",
		// 		},
		// 		{
		// 			id: "tt1799669",
		// 			resultType: "Title",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			title: "Bum Reviews",
		// 			description: "(2008– )",
		// 		},
		// 		{
		// 			id: "tt1805871",
		// 			resultType: "Title",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			title: "Elevator",
		// 			description: "(2007– )",
		// 		},
		// 		{
		// 			id: "tt1886283",
		// 			resultType: "Title",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			title: "The Distressed Watcher",
		// 			description: "(2010–2011)",
		// 		},
		// 		{
		// 			id: "tt2078432",
		// 			resultType: "Title",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			title: "Travel Companions",
		// 			description: "(2010–2012)",
		// 		},
		// 		{
		// 			id: "tt2135194",
		// 			resultType: "Title",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			title: "Hollywood on Set",
		// 			description: "(2003– )",
		// 		},
		// 		{
		// 			id: "tt2135220",
		// 			resultType: "Title",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			title: "Hollywood on Set",
		// 			description: "(2003– )",
		// 		},
		// 		{
		// 			id: "tt2160855",
		// 			resultType: "Title",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BODdiMzIzMjEtMjE1MC00ZjY0LWE1NTctOGYwMWYwMTQzNGE0XkEyXkFqcGdeQXVyMjg2MTMyNTM@._V1_Ratio1.7600_AL_.jpg",
		// 			title: "How It Should Have Ended",
		// 			description: "(2005– )",
		// 		},
		// 		{
		// 			id: "tt2242729",
		// 			resultType: "Title",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			title: "The Angry Joe Show",
		// 			description: "(2009– )",
		// 		},
		// 		{
		// 			id: "tt2278249",
		// 			resultType: "Title",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			title: "Richard Roeper & the Movies",
		// 			description: "(2009– )",
		// 		},
		// 		{
		// 			id: "tt2278251",
		// 			resultType: "Title",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			title: "Richard Roeper & the Movies",
		// 			description: "(2009– )",
		// 		},
		// 		{
		// 			id: "tt2386167",
		// 			resultType: "Title",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			title: "YourGeekNews.com",
		// 			description: "(2010– )",
		// 		},
		// 		{
		// 			id: "tt24798618",
		// 			resultType: "Title",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			title: "Cinephile Magazine",
		// 			description: "(2009– )",
		// 		},
		// 		{
		// 			id: "tt3022202",
		// 			resultType: "Title",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			title: "Zoom In",
		// 			description: "(2008– )",
		// 		},
		// 		{
		// 			id: "tt3227032",
		// 			resultType: "Title",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			title: "Sorties Savantes",
		// 			description: "(2010–2013)",
		// 		},
		// 	],
		// 	errorMessage: "",
		// };
		return date;
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
