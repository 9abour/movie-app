import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "k_98sb98vr";

export const fetchCategories = createAsyncThunk(
	"moviesCategories/fetchCategories",
	async category => {
		const resp = await fetch(`${category}/${API_KEY}`);
		const data = await resp.json();
		// const data = {
		// 	items: [
		// 		{
		// 			id: "tt1630029",
		// 			title: "Avatar: The Way of Water",
		// 			fullTitle: "Avatar: The Way of Water (2022)",
		// 			year: "2022",
		// 			releaseState: "16 Dec 2022",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_Ratio0.6986_AL_.jpg",
		// 			runtimeMins: "192",
		// 			runtimeStr: "192 mins",
		// 			plot: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
		// 			contentRating: "PG-13",
		// 			imDbRating: "7.8",
		// 			imDbRatingCount: "282229",
		// 			metacriticRating: "67",
		// 			genres: "Action, Adventure, Fantasy",
		// 			genreList: [
		// 				{
		// 					key: "Action",
		// 					value: "Action",
		// 				},
		// 				{
		// 					key: "Adventure",
		// 					value: "Adventure",
		// 				},
		// 				{
		// 					key: "Fantasy",
		// 					value: "Fantasy",
		// 				},
		// 			],
		// 			directors: "James Cameron",
		// 			directorList: [
		// 				{
		// 					id: "nm0000116",
		// 					name: "James Cameron",
		// 				},
		// 			],
		// 			stars: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
		// 			starList: [
		// 				{
		// 					id: "nm0941777",
		// 					name: "Sam Worthington",
		// 				},
		// 				{
		// 					id: "nm0757855",
		// 					name: "Zoe Saldana",
		// 				},
		// 				{
		// 					id: "nm0000244",
		// 					name: "Sigourney Weaver",
		// 				},
		// 				{
		// 					id: "nm0002332",
		// 					name: "Stephen Lang",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt10640346",
		// 			title: "Babylon (I)",
		// 			fullTitle: "Babylon (I) (2022)",
		// 			year: "2022",
		// 			releaseState: "23 Dec 2022",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BNjlkYjc4NGMtZjc3MS00NjQ3LTk4MmUtMTkwZGZjODE1ZDVlXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.6699_AL_.jpg",
		// 			runtimeMins: "189",
		// 			runtimeStr: "189 mins",
		// 			plot: "A tale of outsized ambition and outrageous excess, it traces the rise and fall of multiple characters during an era of unbridled decadence and depravity in early Hollywood.",
		// 			contentRating: "R",
		// 			imDbRating: "7.4",
		// 			imDbRatingCount: "49652",
		// 			metacriticRating: "60",
		// 			genres: "Comedy, Drama, History",
		// 			genreList: [
		// 				{
		// 					key: "Comedy",
		// 					value: "Comedy",
		// 				},
		// 				{
		// 					key: "Drama",
		// 					value: "Drama",
		// 				},
		// 				{
		// 					key: "History",
		// 					value: "History",
		// 				},
		// 			],
		// 			directors: "Damien Chazelle",
		// 			directorList: [
		// 				{
		// 					id: "nm3227090",
		// 					name: "Damien Chazelle",
		// 				},
		// 			],
		// 			stars: "Brad Pitt, Margot Robbie, Jean Smart, Olivia Wilde",
		// 			starList: [
		// 				{
		// 					id: "nm0000093",
		// 					name: "Brad Pitt",
		// 				},
		// 				{
		// 					id: "nm3053338",
		// 					name: "Margot Robbie",
		// 				},
		// 				{
		// 					id: "nm0005443",
		// 					name: "Jean Smart",
		// 				},
		// 				{
		// 					id: "nm1312575",
		// 					name: "Olivia Wilde",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt6710474",
		// 			title: "Everything Everywhere All at Once",
		// 			fullTitle: "Everything Everywhere All at Once (2022)",
		// 			year: "2022",
		// 			releaseState: "08 Apr 2022",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_Ratio0.6890_AL_.jpg",
		// 			runtimeMins: "139",
		// 			runtimeStr: "139 mins",
		// 			plot: "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.",
		// 			contentRating: "R",
		// 			imDbRating: "8",
		// 			imDbRatingCount: "317112",
		// 			metacriticRating: "81",
		// 			genres: "Action, Adventure, Comedy",
		// 			genreList: [
		// 				{
		// 					key: "Action",
		// 					value: "Action",
		// 				},
		// 				{
		// 					key: "Adventure",
		// 					value: "Adventure",
		// 				},
		// 				{
		// 					key: "Comedy",
		// 					value: "Comedy",
		// 				},
		// 			],
		// 			directors: "Dan Kwan, Daniel Scheinert",
		// 			directorList: [
		// 				{
		// 					id: "nm3453283",
		// 					name: "Dan Kwan",
		// 				},
		// 				{
		// 					id: "nm3215397",
		// 					name: "Daniel Scheinert",
		// 				},
		// 			],
		// 			stars: "Michelle Yeoh, Stephanie Hsu, Jamie Lee Curtis, Ke Huy Quan",
		// 			starList: [
		// 				{
		// 					id: "nm0000706",
		// 					name: "Michelle Yeoh",
		// 				},
		// 				{
		// 					id: "nm3513533",
		// 					name: "Stephanie Hsu",
		// 				},
		// 				{
		// 					id: "nm0000130",
		// 					name: "Jamie Lee Curtis",
		// 				},
		// 				{
		// 					id: "nm0702841",
		// 					name: "Ke Huy Quan",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt8760708",
		// 			title: "M3GAN",
		// 			fullTitle: "M3GAN (2022)",
		// 			year: "2022",
		// 			releaseState: "06 Jan 2023",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMDk4MTdhYzEtODk3OS00ZDBjLWFhNTQtMDI2ODdjNzQzZTA3XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_Ratio0.6699_AL_.jpg",
		// 			runtimeMins: "102",
		// 			runtimeStr: "102 mins",
		// 			plot: "A robotics engineer at a toy company builds a life-like doll that begins to take on a life of its own.",
		// 			contentRating: "PG-13",
		// 			imDbRating: "6.4",
		// 			imDbRatingCount: "53447",
		// 			metacriticRating: "72",
		// 			genres: "Horror, Sci-Fi, Thriller",
		// 			genreList: [
		// 				{
		// 					key: "Horror",
		// 					value: "Horror",
		// 				},
		// 				{
		// 					key: "Sci-Fi",
		// 					value: "Sci-Fi",
		// 				},
		// 				{
		// 					key: "Thriller",
		// 					value: "Thriller",
		// 				},
		// 			],
		// 			directors: "Gerard Johnstone",
		// 			directorList: [
		// 				{
		// 					id: "nm2067421",
		// 					name: "Gerard Johnstone",
		// 				},
		// 			],
		// 			stars: "Allison Williams, Violet McGraw, Ronny Chieng, Amie Donald",
		// 			starList: [
		// 				{
		// 					id: "nm4129745",
		// 					name: "Allison Williams",
		// 				},
		// 				{
		// 					id: "nm8627157",
		// 					name: "Violet McGraw",
		// 				},
		// 				{
		// 					id: "nm5307044",
		// 					name: "Ronny Chieng",
		// 				},
		// 				{
		// 					id: "nm13143634",
		// 					name: "Amie Donald",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt11813216",
		// 			title: "The Banshees of Inisherin",
		// 			fullTitle: "The Banshees of Inisherin (2022)",
		// 			year: "2022",
		// 			releaseState: "04 Nov 2022",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BM2NlZDI0ZDktNTg5OS00ZjQ1LWI4MDEtN2I0MDE5NWRiNzA4XkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_Ratio0.6699_AL_.jpg",
		// 			runtimeMins: "114",
		// 			runtimeStr: "114 mins",
		// 			plot: "Two lifelong friends find themselves at an impasse when one abruptly ends their relationship, with alarming consequences for both of them.",
		// 			contentRating: "R",
		// 			imDbRating: "7.8",
		// 			imDbRatingCount: "120257",
		// 			metacriticRating: "87",
		// 			genres: "Comedy, Drama",
		// 			genreList: [
		// 				{
		// 					key: "Comedy",
		// 					value: "Comedy",
		// 				},
		// 				{
		// 					key: "Drama",
		// 					value: "Drama",
		// 				},
		// 			],
		// 			directors: "Martin McDonagh",
		// 			directorList: [
		// 				{
		// 					id: "nm1732981",
		// 					name: "Martin McDonagh",
		// 				},
		// 			],
		// 			stars: "Colin Farrell, Brendan Gleeson, Kerry Condon, Barry Keoghan",
		// 			starList: [
		// 				{
		// 					id: "nm0268199",
		// 					name: "Colin Farrell",
		// 				},
		// 				{
		// 					id: "nm0322407",
		// 					name: "Brendan Gleeson",
		// 				},
		// 				{
		// 					id: "nm0174403",
		// 					name: "Kerry Condon",
		// 				},
		// 				{
		// 					id: "nm4422686",
		// 					name: "Barry Keoghan",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt12844910",
		// 			title: "Pathaan",
		// 			fullTitle: "Pathaan (2023)",
		// 			year: "2023",
		// 			releaseState: "25 Jan 2023",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BM2QzM2JiNTMtYjU4Ny00MDZkLTk3MmUtYTRjMzVkZGJlNmYyXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_Ratio0.7273_AL_.jpg",
		// 			runtimeMins: "146",
		// 			runtimeStr: "146 mins",
		// 			plot: "An Indian spy takes on the leader of a group of mercenaries who have nefarious plans to target his homeland.",
		// 			contentRating: "Not Rated",
		// 			imDbRating: "6.7",
		// 			imDbRatingCount: "112865",
		// 			metacriticRating: "44",
		// 			genres: "Action, Adventure, Drama",
		// 			genreList: [
		// 				{
		// 					key: "Action",
		// 					value: "Action",
		// 				},
		// 				{
		// 					key: "Adventure",
		// 					value: "Adventure",
		// 				},
		// 				{
		// 					key: "Drama",
		// 					value: "Drama",
		// 				},
		// 			],
		// 			directors: "Siddharth Anand",
		// 			directorList: [
		// 				{
		// 					id: "nm1893457",
		// 					name: "Siddharth Anand",
		// 				},
		// 			],
		// 			stars:
		// 				"Shah Rukh Khan, Deepika Padukone, John Abraham, Dimple Kapadia",
		// 			starList: [
		// 				{
		// 					id: "nm0451321",
		// 					name: "Shah Rukh Khan",
		// 				},
		// 				{
		// 					id: "nm2138653",
		// 					name: "Deepika Padukone",
		// 				},
		// 				{
		// 					id: "nm1303433",
		// 					name: "John Abraham",
		// 				},
		// 				{
		// 					id: "nm0438092",
		// 					name: "Dimple Kapadia",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt3915174",
		// 			title: "Puss in Boots: The Last Wish",
		// 			fullTitle: "Puss in Boots: The Last Wish (2022)",
		// 			year: "2022",
		// 			releaseState: "21 Dec 2022",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BNjMyMDBjMGUtNDUzZi00N2MwLTg1MjItZTk2MDE1OTZmNTYxXkEyXkFqcGdeQXVyMTQ5NjA0NDM0._V1_Ratio0.6699_AL_.jpg",
		// 			runtimeMins: "102",
		// 			runtimeStr: "102 mins",
		// 			plot: "When Puss in Boots discovers that his passion for adventure has taken its toll and he has burned through eight of his nine lives, he launches an epic journey to restore them by finding the mythical Last Wish.",
		// 			contentRating: "PG",
		// 			imDbRating: "7.9",
		// 			imDbRatingCount: "63761",
		// 			metacriticRating: "73",
		// 			genres: "Animation, Adventure, Comedy",
		// 			genreList: [
		// 				{
		// 					key: "Animation",
		// 					value: "Animation",
		// 				},
		// 				{
		// 					key: "Adventure",
		// 					value: "Adventure",
		// 				},
		// 				{
		// 					key: "Comedy",
		// 					value: "Comedy",
		// 				},
		// 			],
		// 			directors: "Joel Crawford, Januel Mercado",
		// 			directorList: [
		// 				{
		// 					id: "nm3150455",
		// 					name: "Joel Crawford",
		// 				},
		// 				{
		// 					id: "nm2591093",
		// 					name: "Januel Mercado",
		// 				},
		// 			],
		// 			stars: "Antonio Banderas, Salma Hayek, Harvey Guillén, Florence Pugh",
		// 			starList: [
		// 				{
		// 					id: "nm0000104",
		// 					name: "Antonio Banderas",
		// 				},
		// 				{
		// 					id: "nm0000161",
		// 					name: "Salma Hayek",
		// 				},
		// 				{
		// 					id: "nm2957490",
		// 					name: "Harvey Guillén",
		// 				},
		// 				{
		// 					id: "nm6073955",
		// 					name: "Florence Pugh",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt10365998",
		// 			title: "Infinity Pool",
		// 			fullTitle: "Infinity Pool (2023)",
		// 			year: "2023",
		// 			releaseState: "27 Jan 2023",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BZDQxZTY0ZDItY2Y0Yy00OTIzLTkwYTgtNmNkODhiYTk4MzUwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_Ratio0.6699_AL_.jpg",
		// 			runtimeMins: "117",
		// 			runtimeStr: "117 mins",
		// 			plot: "James and Em Foster are enjoying an all-inclusive beach vacation in the fictional island of La Tolqa, when a fatal accident exposes the resort's perverse subculture of hedonistic tourism, reckless violence and surreal horrors.",
		// 			contentRating: "R",
		// 			imDbRating: "6.8",
		// 			imDbRatingCount: "3480",
		// 			metacriticRating: "72",
		// 			genres: "Crime, Horror, Mystery",
		// 			genreList: [
		// 				{
		// 					key: "Crime",
		// 					value: "Crime",
		// 				},
		// 				{
		// 					key: "Horror",
		// 					value: "Horror",
		// 				},
		// 				{
		// 					key: "Mystery",
		// 					value: "Mystery",
		// 				},
		// 			],
		// 			directors: "Brandon Cronenberg",
		// 			directorList: [
		// 				{
		// 					id: "nm0188722",
		// 					name: "Brandon Cronenberg",
		// 				},
		// 			],
		// 			stars:
		// 				"Alexander Skarsgård, Mia Goth, Cleopatra Coleman, Dunja Sepcic",
		// 			starList: [
		// 				{
		// 					id: "nm0002907",
		// 					name: "Alexander Skarsgård",
		// 				},
		// 				{
		// 					id: "nm5301405",
		// 					name: "Mia Goth",
		// 				},
		// 				{
		// 					id: "nm1671147",
		// 					name: "Cleopatra Coleman",
		// 				},
		// 				{
		// 					id: "nm0091841",
		// 					name: "Dunja Sepcic",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt7322224",
		// 			title: "Triangle of Sadness",
		// 			fullTitle: "Triangle of Sadness (2022)",
		// 			year: "2022",
		// 			releaseState: "15 Dec 2022",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BNDRiZjc0ZDMtMjhlYi00ZjAzLTg0MDQtZDI2NGEyYTBlN2M2XkEyXkFqcGdeQXVyMTA2MDU0NjM5._V1_Ratio0.6699_AL_.jpg",
		// 			runtimeMins: "147",
		// 			runtimeStr: "147 mins",
		// 			plot: "A fashion model celebrity couple join an eventful cruise for the super-rich.",
		// 			contentRating: "R",
		// 			imDbRating: "7.5",
		// 			imDbRatingCount: "75437",
		// 			metacriticRating: "63",
		// 			genres: "Comedy, Drama",
		// 			genreList: [
		// 				{
		// 					key: "Comedy",
		// 					value: "Comedy",
		// 				},
		// 				{
		// 					key: "Drama",
		// 					value: "Drama",
		// 				},
		// 			],
		// 			directors: "Ruben Östlund",
		// 			directorList: [
		// 				{
		// 					id: "nm1128037",
		// 					name: "Ruben Östlund",
		// 				},
		// 			],
		// 			stars:
		// 				"Thobias Thorwid, Harris Dickinson, Charlbi Dean, Jiannis Moustos",
		// 			starList: [
		// 				{
		// 					id: "nm7312850",
		// 					name: "Thobias Thorwid",
		// 				},
		// 				{
		// 					id: "nm6170168",
		// 					name: "Harris Dickinson",
		// 				},
		// 				{
		// 					id: "nm4528025",
		// 					name: "Charlbi Dean",
		// 				},
		// 				{
		// 					id: "nm13739729",
		// 					name: "Jiannis Moustos",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt13833688",
		// 			title: "The Whale",
		// 			fullTitle: "The Whale (2022)",
		// 			year: "2022",
		// 			releaseState: "21 Dec 2022",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BZDQ4Njg4YTctNGZkYi00NWU1LWI4OTYtNmNjOWMyMjI1NWYzXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_Ratio0.6986_AL_.jpg",
		// 			runtimeMins: "117",
		// 			runtimeStr: "117 mins",
		// 			plot: "A reclusive, morbidly obese English teacher attempts to reconnect with his estranged teenage daughter.",
		// 			contentRating: "R",
		// 			imDbRating: "8",
		// 			imDbRatingCount: "22900",
		// 			metacriticRating: "60",
		// 			genres: "Drama",
		// 			genreList: [
		// 				{
		// 					key: "Drama",
		// 					value: "Drama",
		// 				},
		// 			],
		// 			directors: "Darren Aronofsky",
		// 			directorList: [
		// 				{
		// 					id: "nm0004716",
		// 					name: "Darren Aronofsky",
		// 				},
		// 			],
		// 			stars: "Brendan Fraser, Sadie Sink, Ty Simpkins, Hong Chau",
		// 			starList: [
		// 				{
		// 					id: "nm0000409",
		// 					name: "Brendan Fraser",
		// 				},
		// 				{
		// 					id: "nm5584750",
		// 					name: "Sadie Sink",
		// 				},
		// 				{
		// 					id: "nm1339223",
		// 					name: "Ty Simpkins",
		// 				},
		// 				{
		// 					id: "nm2186865",
		// 					name: "Hong Chau",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt14208870",
		// 			title: "The Fabelmans",
		// 			fullTitle: "The Fabelmans (2022)",
		// 			year: "2022",
		// 			releaseState: "23 Nov 2022",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BZGM1MzczNmQtMjBmYS00NTRhLWI0MzctNTFkZDc4OGUyODdjXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_Ratio0.6699_AL_.jpg",
		// 			runtimeMins: "151",
		// 			runtimeStr: "151 mins",
		// 			plot: "Growing up in post-World War II era Arizona, young Sammy Fabelman aspires to become a filmmaker as he reaches adolescence, but soon discovers a shattering family secret and explores how the power of films can help him see the truth.",
		// 			contentRating: "PG-13",
		// 			imDbRating: "7.7",
		// 			imDbRatingCount: "48311",
		// 			metacriticRating: "84",
		// 			genres: "Drama",
		// 			genreList: [
		// 				{
		// 					key: "Drama",
		// 					value: "Drama",
		// 				},
		// 			],
		// 			directors: "Steven Spielberg",
		// 			directorList: [
		// 				{
		// 					id: "nm0000229",
		// 					name: "Steven Spielberg",
		// 				},
		// 			],
		// 			stars: "Michelle Williams, Gabriel LaBelle, Paul Dano, Judd Hirsch",
		// 			starList: [
		// 				{
		// 					id: "nm0931329",
		// 					name: "Michelle Williams",
		// 				},
		// 				{
		// 					id: "nm5450413",
		// 					name: "Gabriel LaBelle",
		// 				},
		// 				{
		// 					id: "nm0200452",
		// 					name: "Paul Dano",
		// 				},
		// 				{
		// 					id: "nm0002139",
		// 					name: "Judd Hirsch",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt14444726",
		// 			title: "Tár",
		// 			fullTitle: "Tár (2022)",
		// 			year: "2022",
		// 			releaseState: "28 Oct 2022",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BM2I0ZDcyYzItMGEyNi00YWVhLTlmNTQtOWVlYjE1ZGVhNWM0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6699_AL_.jpg",
		// 			runtimeMins: "158",
		// 			runtimeStr: "158 mins",
		// 			plot: "Set in the international world of Western classical music, the film centers on Lydia Tár, widely considered one of the greatest living composer-conductors and the very first female director of a major German orchestra.",
		// 			contentRating: "R",
		// 			imDbRating: "7.6",
		// 			imDbRatingCount: "33036",
		// 			metacriticRating: "92",
		// 			genres: "Drama, Music",
		// 			genreList: [
		// 				{
		// 					key: "Drama",
		// 					value: "Drama",
		// 				},
		// 				{
		// 					key: "Music",
		// 					value: "Music",
		// 				},
		// 			],
		// 			directors: "Todd Field",
		// 			directorList: [
		// 				{
		// 					id: "nm0276062",
		// 					name: "Todd Field",
		// 				},
		// 			],
		// 			stars: "Cate Blanchett, Noémie Merlant, Nina Hoss, Sophie Kauer",
		// 			starList: [
		// 				{
		// 					id: "nm0000949",
		// 					name: "Cate Blanchett",
		// 				},
		// 				{
		// 					id: "nm4374524",
		// 					name: "Noémie Merlant",
		// 				},
		// 				{
		// 					id: "nm0396125",
		// 					name: "Nina Hoss",
		// 				},
		// 				{
		// 					id: "nm13154325",
		// 					name: "Sophie Kauer",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt7405458",
		// 			title: "A Man Called Otto",
		// 			fullTitle: "A Man Called Otto (2022)",
		// 			year: "2022",
		// 			releaseState: "13 Jan 2023",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BNzg3OTEzMTgtYWU0OC00YTI0LWIxOTAtNmRkNTc0Nzg2YWU1XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_Ratio0.7943_AL_.jpg",
		// 			runtimeMins: "126",
		// 			runtimeStr: "126 mins",
		// 			plot: "Otto is a grump who's given up on life following the loss of his wife and wants to end it all. When a young family moves in nearby, he meets his match in quick-witted Marisol, leading to a friendship that will turn his world around.",
		// 			contentRating: "PG-13",
		// 			imDbRating: "7.6",
		// 			imDbRatingCount: "13894",
		// 			metacriticRating: "51",
		// 			genres: "Comedy, Drama",
		// 			genreList: [
		// 				{
		// 					key: "Comedy",
		// 					value: "Comedy",
		// 				},
		// 				{
		// 					key: "Drama",
		// 					value: "Drama",
		// 				},
		// 			],
		// 			directors: "Marc Forster",
		// 			directorList: [
		// 				{
		// 					id: "nm0286975",
		// 					name: "Marc Forster",
		// 				},
		// 			],
		// 			stars: "Tom Hanks, Mariana Treviño, Rachel Keller, John Higgins",
		// 			starList: [
		// 				{
		// 					id: "nm0000158",
		// 					name: "Tom Hanks",
		// 				},
		// 				{
		// 					id: "nm3901455",
		// 					name: "Mariana Treviño",
		// 				},
		// 				{
		// 					id: "nm5043859",
		// 					name: "Rachel Keller",
		// 				},
		// 				{
		// 					id: "nm3769182",
		// 					name: "John Higgins",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt1745960",
		// 			title: "Top Gun: Maverick",
		// 			fullTitle: "Top Gun: Maverick (2022)",
		// 			year: "2022",
		// 			releaseState: "27 May 2022",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_Ratio0.6699_AL_.jpg",
		// 			runtimeMins: "130",
		// 			runtimeStr: "130 mins",
		// 			plot: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.",
		// 			contentRating: "PG-13",
		// 			imDbRating: "8.3",
		// 			imDbRatingCount: "517079",
		// 			metacriticRating: "78",
		// 			genres: "Action, Drama",
		// 			genreList: [
		// 				{
		// 					key: "Action",
		// 					value: "Action",
		// 				},
		// 				{
		// 					key: "Drama",
		// 					value: "Drama",
		// 				},
		// 			],
		// 			directors: "Joseph Kosinski",
		// 			directorList: [
		// 				{
		// 					id: "nm2676052",
		// 					name: "Joseph Kosinski",
		// 				},
		// 			],
		// 			stars: "Tom Cruise, Jennifer Connelly, Miles Teller, Val Kilmer",
		// 			starList: [
		// 				{
		// 					id: "nm0000129",
		// 					name: "Tom Cruise",
		// 				},
		// 				{
		// 					id: "nm0000124",
		// 					name: "Jennifer Connelly",
		// 				},
		// 				{
		// 					id: "nm1886602",
		// 					name: "Miles Teller",
		// 				},
		// 				{
		// 					id: "nm0000174",
		// 					name: "Val Kilmer",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt13669038",
		// 			title: "Women Talking",
		// 			fullTitle: "Women Talking (2022)",
		// 			year: "2022",
		// 			releaseState: "16 Feb 2023",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BYTZmMmQ4OWYtM2JmNC00NzY0LWJhODUtOTRmMWMyOTU4OWQ4XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_Ratio0.6699_AL_.jpg",
		// 			runtimeMins: "104",
		// 			runtimeStr: "104 mins",
		// 			plot: "Do nothing. Stay and fight. Or leave. In 2010, the women of an isolated religious community grapple with reconciling a brutal reality with their faith.",
		// 			contentRating: "PG-13",
		// 			imDbRating: "7.5",
		// 			imDbRatingCount: "3927",
		// 			metacriticRating: "78",
		// 			genres: "Drama",
		// 			genreList: [
		// 				{
		// 					key: "Drama",
		// 					value: "Drama",
		// 				},
		// 			],
		// 			directors: "Sarah Polley",
		// 			directorList: [
		// 				{
		// 					id: "nm0001631",
		// 					name: "Sarah Polley",
		// 				},
		// 			],
		// 			stars: "Rooney Mara, Claire Foy, Jessie Buckley, Frances McDormand",
		// 			starList: [
		// 				{
		// 					id: "nm1913734",
		// 					name: "Rooney Mara",
		// 				},
		// 				{
		// 					id: "nm2946516",
		// 					name: "Claire Foy",
		// 				},
		// 				{
		// 					id: "nm2976580",
		// 					name: "Jessie Buckley",
		// 				},
		// 				{
		// 					id: "nm0000531",
		// 					name: "Frances McDormand",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt5884796",
		// 			title: "Plane",
		// 			fullTitle: "Plane (2023)",
		// 			year: "2023",
		// 			releaseState: "13 Jan 2023",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BZDc4MzVkNzYtZTRiZC00ODYwLWJjZmMtMDIyNjQ1M2M1OGM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_Ratio0.6699_AL_.jpg",
		// 			runtimeMins: "107",
		// 			runtimeStr: "107 mins",
		// 			plot: "A pilot finds himself caught in a war zone after he's forced to land his commercial aircraft during a terrible storm.",
		// 			contentRating: "R",
		// 			imDbRating: "6.7",
		// 			imDbRatingCount: "14421",
		// 			metacriticRating: "62",
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
		// 			directors: "Jean-François Richet",
		// 			directorList: [
		// 				{
		// 					id: "nm0724938",
		// 					name: "Jean-François Richet",
		// 				},
		// 			],
		// 			stars: "Gerard Butler, Mike Colter, Yoson An, Paul Ben-Victor",
		// 			starList: [
		// 				{
		// 					id: "nm0124930",
		// 					name: "Gerard Butler",
		// 				},
		// 				{
		// 					id: "nm1591496",
		// 					name: "Mike Colter",
		// 				},
		// 				{
		// 					id: "nm5256788",
		// 					name: "Yoson An",
		// 				},
		// 				{
		// 					id: "nm0070115",
		// 					name: "Paul Ben-Victor",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt15679400",
		// 			title: "Knock at the Cabin",
		// 			fullTitle: "Knock at the Cabin (2023)",
		// 			year: "2023",
		// 			releaseState: "03 Feb 2023",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BZTc4MjU0MjMtYTEwNy00YjNlLTk2MGYtMjNlNzFjMmY4MjQ0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.6699_AL_.jpg",
		// 			runtimeMins: "100",
		// 			runtimeStr: "100 mins",
		// 			plot: "While vacationing, a girl and her parents are taken hostage by armed strangers who demand that the family make a choice to avert the apocalypse.",
		// 			contentRating: "R",
		// 			imDbRating: "6.4",
		// 			imDbRatingCount: "7902",
		// 			metacriticRating: "63",
		// 			genres: "Horror, Mystery, Thriller",
		// 			genreList: [
		// 				{
		// 					key: "Horror",
		// 					value: "Horror",
		// 				},
		// 				{
		// 					key: "Mystery",
		// 					value: "Mystery",
		// 				},
		// 				{
		// 					key: "Thriller",
		// 					value: "Thriller",
		// 				},
		// 			],
		// 			directors: "M. Night Shyamalan",
		// 			directorList: [
		// 				{
		// 					id: "nm0796117",
		// 					name: "M. Night Shyamalan",
		// 				},
		// 			],
		// 			stars:
		// 				"Dave Bautista, Jonathan Groff, Rupert Grint, Nikki Amuka-Bird",
		// 			starList: [
		// 				{
		// 					id: "nm1176985",
		// 					name: "Dave Bautista",
		// 				},
		// 				{
		// 					id: "nm2676147",
		// 					name: "Jonathan Groff",
		// 				},
		// 				{
		// 					id: "nm0342488",
		// 					name: "Rupert Grint",
		// 				},
		// 				{
		// 					id: "nm0025458",
		// 					name: "Nikki Amuka-Bird",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt8129806",
		// 			title: "To Leslie",
		// 			fullTitle: "To Leslie (2022)",
		// 			year: "2022",
		// 			releaseState: "07 Oct 2022",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BNmNiMGRkYmUtYjI4MC00ZDg4LTk3YjktNTczNzEzYmExMjAwXkEyXkFqcGdeQXVyMTQ4MTk0NjYx._V1_Ratio0.6986_AL_.jpg",
		// 			runtimeMins: "119",
		// 			runtimeStr: "119 mins",
		// 			plot: "Inspired by true events. A West Texas single mother wins the lottery and squanders it just as fast, leaving behind a world of heartbreak. Years later, with her charm running out and nowhere to go, she fights to rebuild her life and find redemption.",
		// 			contentRating: "R",
		// 			imDbRating: "7.1",
		// 			imDbRatingCount: "3874",
		// 			metacriticRating: "84",
		// 			genres: "Drama",
		// 			genreList: [
		// 				{
		// 					key: "Drama",
		// 					value: "Drama",
		// 				},
		// 			],
		// 			directors: "Michael Morris",
		// 			directorList: [
		// 				{
		// 					id: "nm2385621",
		// 					name: "Michael Morris",
		// 				},
		// 			],
		// 			stars:
		// 				"Andrea Riseborough, Allison Janney, Stephen Root, James Landry Hébert",
		// 			starList: [
		// 				{
		// 					id: "nm2057859",
		// 					name: "Andrea Riseborough",
		// 				},
		// 				{
		// 					id: "nm0005049",
		// 					name: "Allison Janney",
		// 				},
		// 				{
		// 					id: "nm0740535",
		// 					name: "Stephen Root",
		// 				},
		// 				{
		// 					id: "nm2566469",
		// 					name: "James Landry Hébert",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt13539646",
		// 			title: "The Wandering Earth II",
		// 			fullTitle: "The Wandering Earth II (2023)",
		// 			year: "2023",
		// 			releaseState: "22 Jan 2023",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BN2IzY2E2MTQtNTMxMy00YTJjLTkzYTEtYzAyM2VlYjFjZDQzXkEyXkFqcGdeQXVyMTI5ODA1OTU0._V1_Ratio0.6699_AL_.jpg",
		// 			runtimeMins: "173",
		// 			runtimeStr: "173 mins",
		// 			plot: "Humans built huge engines on the surface of the earth to find a new home. But the road to the universe is perilous. In order to save earth, young people once again have to step forward to start a race against time for life and death.",
		// 			contentRating: "",
		// 			imDbRating: "8",
		// 			imDbRatingCount: "5971",
		// 			metacriticRating: "56",
		// 			genres: "Action, Adventure, Drama",
		// 			genreList: [
		// 				{
		// 					key: "Action",
		// 					value: "Action",
		// 				},
		// 				{
		// 					key: "Adventure",
		// 					value: "Adventure",
		// 				},
		// 				{
		// 					key: "Drama",
		// 					value: "Drama",
		// 				},
		// 			],
		// 			directors: "Frant Gwo",
		// 			directorList: [
		// 				{
		// 					id: "nm4914792",
		// 					name: "Frant Gwo",
		// 				},
		// 			],
		// 			stars: "Andy Lau, Jing Wu, Zina Blahusova, Clara Lee",
		// 			starList: [
		// 				{
		// 					id: "nm0490489",
		// 					name: "Andy Lau",
		// 				},
		// 				{
		// 					id: "nm0943104",
		// 					name: "Jing Wu",
		// 				},
		// 				{
		// 					id: "nm1927842",
		// 					name: "Zina Blahusova",
		// 				},
		// 				{
		// 					id: "nm4788761",
		// 					name: "Clara Lee",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt18079362",
		// 			title: "80 for Brady",
		// 			fullTitle: "80 for Brady (2023)",
		// 			year: "2023",
		// 			releaseState: "03 Feb 2023",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BNzY4MzQ1MTgtNGZiYS00Y2M5LWJmODUtYzIzNWFlOGZjMjk5XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_Ratio0.6699_AL_.jpg",
		// 			runtimeMins: "98",
		// 			runtimeStr: "98 mins",
		// 			plot: "A group of friends made it their life-long mission to go to the Super Bowl and meet NFL superstar Tom Brady.",
		// 			contentRating: "PG-13",
		// 			imDbRating: "5.8",
		// 			imDbRatingCount: "832",
		// 			metacriticRating: "54",
		// 			genres: "Comedy, Drama, Sport",
		// 			genreList: [
		// 				{
		// 					key: "Comedy",
		// 					value: "Comedy",
		// 				},
		// 				{
		// 					key: "Drama",
		// 					value: "Drama",
		// 				},
		// 				{
		// 					key: "Sport",
		// 					value: "Sport",
		// 				},
		// 			],
		// 			directors: "Kyle Marvin",
		// 			directorList: [
		// 				{
		// 					id: "nm5568803",
		// 					name: "Kyle Marvin",
		// 				},
		// 			],
		// 			stars: "Rita Moreno, Sally Field, Jane Fonda, Patton Oswalt",
		// 			starList: [
		// 				{
		// 					id: "nm0001549",
		// 					name: "Rita Moreno",
		// 				},
		// 				{
		// 					id: "nm0000398",
		// 					name: "Sally Field",
		// 				},
		// 				{
		// 					id: "nm0000404",
		// 					name: "Jane Fonda",
		// 				},
		// 				{
		// 					id: "nm0652663",
		// 					name: "Patton Oswalt",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt10855768",
		// 			title: "Missing",
		// 			fullTitle: "Missing (2023)",
		// 			year: "2023",
		// 			releaseState: "20 Jan 2023",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BNzI3MmU1NjQtZmM2ZC00Y2NkLWFhMDMtZmVhYTc1NTFjZTFhXkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_Ratio0.7943_AL_.jpg",
		// 			runtimeMins: "111",
		// 			runtimeStr: "111 mins",
		// 			plot: "After her mother goes missing, a young woman tries to find her from home, using tools available to her online.",
		// 			contentRating: "PG-13",
		// 			imDbRating: "7.4",
		// 			imDbRatingCount: "2917",
		// 			metacriticRating: "66",
		// 			genres: "Drama, Thriller",
		// 			genreList: [
		// 				{
		// 					key: "Drama",
		// 					value: "Drama",
		// 				},
		// 				{
		// 					key: "Thriller",
		// 					value: "Thriller",
		// 				},
		// 			],
		// 			directors: "Nicholas D. Johnson, Will Merrick",
		// 			directorList: [
		// 				{
		// 					id: "nm4946908",
		// 					name: "Nicholas D. Johnson",
		// 				},
		// 				{
		// 					id: "nm4148345",
		// 					name: "Will Merrick",
		// 				},
		// 			],
		// 			stars: "Tim Griffin, Ava Zaria Lee, Nia Long, Kimberly Cheng",
		// 			starList: [
		// 				{
		// 					id: "nm0341377",
		// 					name: "Tim Griffin",
		// 				},
		// 				{
		// 					id: "nm13877751",
		// 					name: "Ava Zaria Lee",
		// 				},
		// 				{
		// 					id: "nm0000505",
		// 					name: "Nia Long",
		// 				},
		// 				{
		// 					id: "nm7901417",
		// 					name: "Kimberly Cheng",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt9114286",
		// 			title: "Black Panther: Wakanda Forever",
		// 			fullTitle: "Black Panther: Wakanda Forever (2022)",
		// 			year: "2022",
		// 			releaseState: "11 Nov 2022",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BY2FlN2U2NzMtOWE2Ni00MWIyLTk3YzQtM2RjNDFkNTlhYTZmXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_Ratio0.6699_AL_.jpg",
		// 			runtimeMins: "161",
		// 			runtimeStr: "161 mins",
		// 			plot: "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.",
		// 			contentRating: "PG-13",
		// 			imDbRating: "7",
		// 			imDbRatingCount: "176249",
		// 			metacriticRating: "67",
		// 			genres: "Action, Adventure, Drama",
		// 			genreList: [
		// 				{
		// 					key: "Action",
		// 					value: "Action",
		// 				},
		// 				{
		// 					key: "Adventure",
		// 					value: "Adventure",
		// 				},
		// 				{
		// 					key: "Drama",
		// 					value: "Drama",
		// 				},
		// 			],
		// 			directors: "Ryan Coogler",
		// 			directorList: [
		// 				{
		// 					id: "nm3363032",
		// 					name: "Ryan Coogler",
		// 				},
		// 			],
		// 			stars: "Letitia Wright, Lupita Nyong'o, Danai Gurira, Winston Duke",
		// 			starList: [
		// 				{
		// 					id: "nm4004793",
		// 					name: "Letitia Wright",
		// 				},
		// 				{
		// 					id: "nm2143282",
		// 					name: "Lupita Nyong'o",
		// 				},
		// 				{
		// 					id: "nm1775091",
		// 					name: "Danai Gurira",
		// 				},
		// 				{
		// 					id: "nm6328300",
		// 					name: "Winston Duke",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt9051908",
		// 			title: "Living",
		// 			fullTitle: "Living (2022)",
		// 			year: "2022",
		// 			releaseState: "29 Dec 2022",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BNTdiMWI1ZmUtOTk3OS00ZDYxLThjZWYtYjIwNWJkNTkxMmJlXkEyXkFqcGdeQXVyMTQyODg5MjQw._V1_Ratio0.6699_AL_.jpg",
		// 			runtimeMins: "102",
		// 			runtimeStr: "102 mins",
		// 			plot: "In 1950s London, a humorless civil servant decides to take time off work to experience life after receiving a grim diagnosis.",
		// 			contentRating: "PG-13",
		// 			imDbRating: "7.5",
		// 			imDbRatingCount: "4329",
		// 			metacriticRating: "81",
		// 			genres: "Drama",
		// 			genreList: [
		// 				{
		// 					key: "Drama",
		// 					value: "Drama",
		// 				},
		// 			],
		// 			directors: "Oliver Hermanus",
		// 			directorList: [
		// 				{
		// 					id: "nm3564996",
		// 					name: "Oliver Hermanus",
		// 				},
		// 			],
		// 			stars: "Bill Nighy, Aimee Lou Wood, Alex Sharp, Adrian Rawlins",
		// 			starList: [
		// 				{
		// 					id: "nm0631490",
		// 					name: "Bill Nighy",
		// 				},
		// 				{
		// 					id: "nm10228854",
		// 					name: "Aimee Lou Wood",
		// 				},
		// 				{
		// 					id: "nm5189784",
		// 					name: "Alex Sharp",
		// 				},
		// 				{
		// 					id: "nm0712628",
		// 					name: "Adrian Rawlins",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt8005118",
		// 			title: "House Party",
		// 			fullTitle: "House Party (2023)",
		// 			year: "2023",
		// 			releaseState: "13 Jan 2023",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BZDgyYjYwNjAtOWY4MS00YzBkLWFlNTktNDk5ZmQwZGI2OWQwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.7943_AL_.jpg",
		// 			runtimeMins: "100",
		// 			runtimeStr: "100 mins",
		// 			plot: 'From New Line Cinema comes your VIP ticket into the hottest event of the year:"House Party," the remix to the fan-favorite \'90s classic.',
		// 			contentRating: "R",
		// 			imDbRating: "4.4",
		// 			imDbRatingCount: "1631",
		// 			metacriticRating: "41",
		// 			genres: "Comedy",
		// 			genreList: [
		// 				{
		// 					key: "Comedy",
		// 					value: "Comedy",
		// 				},
		// 			],
		// 			directors: "Calmatic",
		// 			directorList: [
		// 				{
		// 					id: "nm9118043",
		// 					name: "Calmatic",
		// 				},
		// 			],
		// 			stars: "Jacob Latimore, Tosin Cole, Karen Obilom, D.C. Young Fly",
		// 			starList: [
		// 				{
		// 					id: "nm3632976",
		// 					name: "Jacob Latimore",
		// 				},
		// 				{
		// 					id: "nm4108791",
		// 					name: "Tosin Cole",
		// 				},
		// 				{
		// 					id: "nm5352046",
		// 					name: "Karen Obilom",
		// 				},
		// 				{
		// 					id: "nm7491044",
		// 					name: "D.C. Young Fly",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt20879602",
		// 			title: "Maybe I Do",
		// 			fullTitle: "Maybe I Do (2023)",
		// 			year: "2023",
		// 			releaseState: "30 Mar 2023",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BYzMyNmE5ZmYtYzk1MC00ODI4LThiMjktOTRiZDY0YmY1Y2YxXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_Ratio0.6699_AL_.jpg",
		// 			runtimeMins: "95",
		// 			runtimeStr: "95 mins",
		// 			plot: "Michelle and Allen are in a relationship. They decide to invite their parents to finally meet about marriage. Turns out, the parents already know one another well, which leads to some differing opinions about marriage.",
		// 			contentRating: "PG-13",
		// 			imDbRating: "5.6",
		// 			imDbRatingCount: "167",
		// 			metacriticRating: "42",
		// 			genres: "Comedy, Romance",
		// 			genreList: [
		// 				{
		// 					key: "Comedy",
		// 					value: "Comedy",
		// 				},
		// 				{
		// 					key: "Romance",
		// 					value: "Romance",
		// 				},
		// 			],
		// 			directors: "Michael Jacobs",
		// 			directorList: [
		// 				{
		// 					id: "nm0414551",
		// 					name: "Michael Jacobs",
		// 				},
		// 			],
		// 			stars: "Mezi Atwood, Kevin D. Benton, Luke Bracey, Setty Brosevelt",
		// 			starList: [
		// 				{
		// 					id: "nm12564036",
		// 					name: "Mezi Atwood",
		// 				},
		// 				{
		// 					id: "nm7273876",
		// 					name: "Kevin D. Benton",
		// 				},
		// 				{
		// 					id: "nm3478396",
		// 					name: "Luke Bracey",
		// 				},
		// 				{
		// 					id: "nm11103916",
		// 					name: "Setty Brosevelt",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt0113277",
		// 			title: "Heat",
		// 			fullTitle: "Heat (1995)",
		// 			year: "1995",
		// 			releaseState: "15 Dec 1995",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BYjZjNTJlZGUtZTE1Ny00ZDc4LTgwYjUtMzk0NDgwYzZjYTk1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6890_AL_.jpg",
		// 			runtimeMins: "170",
		// 			runtimeStr: "170 mins",
		// 			plot: "A group of high-end professional thieves start to feel the heat from the LAPD when they unknowingly leave a clue at their latest heist.",
		// 			contentRating: "R",
		// 			imDbRating: "8.3",
		// 			imDbRatingCount: "661256",
		// 			metacriticRating: "76",
		// 			genres: "Action, Crime, Drama",
		// 			genreList: [
		// 				{
		// 					key: "Action",
		// 					value: "Action",
		// 				},
		// 				{
		// 					key: "Crime",
		// 					value: "Crime",
		// 				},
		// 				{
		// 					key: "Drama",
		// 					value: "Drama",
		// 				},
		// 			],
		// 			directors: "Michael Mann",
		// 			directorList: [
		// 				{
		// 					id: "nm0000520",
		// 					name: "Michael Mann",
		// 				},
		// 			],
		// 			stars: "Al Pacino, Robert De Niro, Val Kilmer, Jon Voight",
		// 			starList: [
		// 				{
		// 					id: "nm0000199",
		// 					name: "Al Pacino",
		// 				},
		// 				{
		// 					id: "nm0000134",
		// 					name: "Robert De Niro",
		// 				},
		// 				{
		// 					id: "nm0000174",
		// 					name: "Val Kilmer",
		// 				},
		// 				{
		// 					id: "nm0000685",
		// 					name: "Jon Voight",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt4960748",
		// 			title: "Till",
		// 			fullTitle: "Till (2022)",
		// 			year: "2022",
		// 			releaseState: "28 Oct 2022",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BOTU5NzgxODMtMjg2Mi00YTAxLTg4MTMtNDJmNWU5MTU5ODJjXkEyXkFqcGdeQXVyMTMzNDE5NDM2._V1_Ratio0.6699_AL_.jpg",
		// 			runtimeMins: "130",
		// 			runtimeStr: "130 mins",
		// 			plot: "In 1955, after Emmett Till is murdered in a brutal lynching, his mother vows to expose the racism behind the attack while working to have those involved brought to justice.",
		// 			contentRating: "PG-13",
		// 			imDbRating: "7.2",
		// 			imDbRatingCount: "7262",
		// 			metacriticRating: "79",
		// 			genres: "Biography, Drama, History",
		// 			genreList: [
		// 				{
		// 					key: "Biography",
		// 					value: "Biography",
		// 				},
		// 				{
		// 					key: "Drama",
		// 					value: "Drama",
		// 				},
		// 				{
		// 					key: "History",
		// 					value: "History",
		// 				},
		// 			],
		// 			directors: "Chinonye Chukwu",
		// 			directorList: [
		// 				{
		// 					id: "nm2703824",
		// 					name: "Chinonye Chukwu",
		// 				},
		// 			],
		// 			stars:
		// 				"Danielle Deadwyler, Jalyn Hall, Frankie Faison, Haley Bennett",
		// 			starList: [
		// 				{
		// 					id: "nm4314990",
		// 					name: "Danielle Deadwyler",
		// 				},
		// 				{
		// 					id: "nm8786575",
		// 					name: "Jalyn Hall",
		// 				},
		// 				{
		// 					id: "nm0265670",
		// 					name: "Frankie Faison",
		// 				},
		// 				{
		// 					id: "nm2247245",
		// 					name: "Haley Bennett",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt12193804",
		// 			title: "Whitney Houston: I Wanna Dance with Somebody",
		// 			fullTitle: "Whitney Houston: I Wanna Dance with Somebody (2022)",
		// 			year: "2022",
		// 			releaseState: "23 Dec 2022",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BODY5OGI0MzYtZTdkMi00NjU1LTkzYjAtNDA5M2ZlYjFlODgzXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.6699_AL_.jpg",
		// 			runtimeMins: "144",
		// 			runtimeStr: "144 mins",
		// 			plot: "A joyous, emotional, heartbreaking celebration of the life and music of Whitney Houston, one of the greatest female R&B pop vocalists of all time, tracking her journey from obscurity to musical superstardom.",
		// 			contentRating: "PG-13",
		// 			imDbRating: "6.9",
		// 			imDbRatingCount: "7283",
		// 			metacriticRating: "51",
		// 			genres: "Biography, Drama, Music",
		// 			genreList: [
		// 				{
		// 					key: "Biography",
		// 					value: "Biography",
		// 				},
		// 				{
		// 					key: "Drama",
		// 					value: "Drama",
		// 				},
		// 				{
		// 					key: "Music",
		// 					value: "Music",
		// 				},
		// 			],
		// 			directors: "Kasi Lemmons",
		// 			directorList: [
		// 				{
		// 					id: "nm0501435",
		// 					name: "Kasi Lemmons",
		// 				},
		// 			],
		// 			stars: "Naomi Ackie, Stanley Tucci, Ashton Sanders, Tamara Tunie",
		// 			starList: [
		// 				{
		// 					id: "nm7609875",
		// 					name: "Naomi Ackie",
		// 				},
		// 				{
		// 					id: "nm0001804",
		// 					name: "Stanley Tucci",
		// 				},
		// 				{
		// 					id: "nm5480894",
		// 					name: "Ashton Sanders",
		// 				},
		// 				{
		// 					id: "nm0876645",
		// 					name: "Tamara Tunie",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt12830948",
		// 			title: "Fear",
		// 			fullTitle: "Fear (2023)",
		// 			year: "2023",
		// 			releaseState: "27 Jan 2023",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BYThlZDk5MDEtZjcwMy00NWM5LTgxYWUtYmRlMmM5YmY0YzFhXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_Ratio0.6699_AL_.jpg",
		// 			runtimeMins: "98",
		// 			runtimeStr: "98 mins",
		// 			plot: "A much needed getaway and a celebration weekend turns into a nightmare due to the contagious airborne threat.",
		// 			contentRating: "R",
		// 			imDbRating: "3.5",
		// 			imDbRatingCount: "292",
		// 			metacriticRating: "",
		// 			genres: "Horror",
		// 			genreList: [
		// 				{
		// 					key: "Horror",
		// 					value: "Horror",
		// 				},
		// 			],
		// 			directors: "Deon Taylor",
		// 			directorList: [
		// 				{
		// 					id: "nm1938064",
		// 					name: "Deon Taylor",
		// 				},
		// 			],
		// 			stars: "Tyler Abron, Jessica Allain, Mezi Atwood, Andrew Bachelor",
		// 			starList: [
		// 				{
		// 					id: "nm7783240",
		// 					name: "Tyler Abron",
		// 				},
		// 				{
		// 					id: "nm6973777",
		// 					name: "Jessica Allain",
		// 				},
		// 				{
		// 					id: "nm12564036",
		// 					name: "Mezi Atwood",
		// 				},
		// 				{
		// 					id: "nm4392718",
		// 					name: "Andrew Bachelor",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt10473036",
		// 			title: "The Amazing Maurice",
		// 			fullTitle: "The Amazing Maurice (2022)",
		// 			year: "2022",
		// 			releaseState: "03 Feb 2023",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BYWQ4NjQ1NjAtNTc3Yy00ZDVlLThlNmUtMzZjY2E3N2Y4Y2JmXkEyXkFqcGdeQXVyMjMwODE4ODI@._V1_Ratio0.6890_AL_.jpg",
		// 			runtimeMins: "93",
		// 			runtimeStr: "93 mins",
		// 			plot: "This story follows Maurice, a goofy streetwise cat, who has the perfect money-making scam. He finds a dumb-looking kid who plays a pipe and has his very own horde of rats, who are strangely literate.",
		// 			contentRating: "PG",
		// 			imDbRating: "6.3",
		// 			imDbRatingCount: "1876",
		// 			metacriticRating: "53",
		// 			genres: "Animation, Adventure, Comedy",
		// 			genreList: [
		// 				{
		// 					key: "Animation",
		// 					value: "Animation",
		// 				},
		// 				{
		// 					key: "Adventure",
		// 					value: "Adventure",
		// 				},
		// 				{
		// 					key: "Comedy",
		// 					value: "Comedy",
		// 				},
		// 			],
		// 			directors: "Toby Genkel, Florian Westermann",
		// 			directorList: [
		// 				{
		// 					id: "nm0312881",
		// 					name: "Toby Genkel",
		// 				},
		// 				{
		// 					id: "nm3154064",
		// 					name: "Florian Westermann",
		// 				},
		// 			],
		// 			stars: "Hugh Laurie, Emilia Clarke, David Thewlis, Himesh Patel",
		// 			starList: [
		// 				{
		// 					id: "nm0491402",
		// 					name: "Hugh Laurie",
		// 				},
		// 				{
		// 					id: "nm3592338",
		// 					name: "Emilia Clarke",
		// 				},
		// 				{
		// 					id: "nm0000667",
		// 					name: "David Thewlis",
		// 				},
		// 				{
		// 					id: "nm2797744",
		// 					name: "Himesh Patel",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt16227014",
		// 			title: "Fire of Love",
		// 			fullTitle: "Fire of Love (2022)",
		// 			year: "2022",
		// 			releaseState: "11 Nov 2022",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BOTMwNjMxOWQtYTEyOC00OTUyLTlhMTItOGFkOTJkMWM1NDQ5XkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_Ratio0.6699_AL_.jpg",
		// 			runtimeMins: "98",
		// 			runtimeStr: "98 mins",
		// 			plot: "Intrepid scientists and lovers Katia and Maurice Krafft died in a volcanic explosion doing the very thing that brought them together: unraveling the mysteries of volcanoes by capturing the most explosive imagery ever recorded.",
		// 			contentRating: "PG",
		// 			imDbRating: "7.6",
		// 			imDbRatingCount: "7074",
		// 			metacriticRating: "83",
		// 			genres: "Documentary, Biography",
		// 			genreList: [
		// 				{
		// 					key: "Documentary",
		// 					value: "Documentary",
		// 				},
		// 				{
		// 					key: "Biography",
		// 					value: "Biography",
		// 				},
		// 			],
		// 			directors: "Sara Dosa",
		// 			directorList: [
		// 				{
		// 					id: "nm2393385",
		// 					name: "Sara Dosa",
		// 				},
		// 			],
		// 			stars: "Miranda July, Katia Krafft, Maurice Krafft",
		// 			starList: [
		// 				{
		// 					id: "nm0432380",
		// 					name: "Miranda July",
		// 				},
		// 				{
		// 					id: "nm0991839",
		// 					name: "Katia Krafft",
		// 				},
		// 				{
		// 					id: "nm0991840",
		// 					name: "Maurice Krafft",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt11898882",
		// 			title: "Bosch & Rockit",
		// 			fullTitle: "Bosch & Rockit (2022)",
		// 			year: "2022",
		// 			releaseState: "2023",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BY2I1ZTZlYmQtZjZiYS00ZWIzLWJmMjEtMWY2ZmExZGE0N2NhXkEyXkFqcGdeQXVyNTEwNjM1MjE@._V1_Ratio0.6986_AL_.jpg",
		// 			runtimeMins: "106",
		// 			runtimeStr: "106 mins",
		// 			plot: "In the late summer along the Australian coast, Bosch, a young father goes on the run for drug dealing with his surf gang. In tow is his son, Rockit, who believes he is on a magical holiday.",
		// 			contentRating: "",
		// 			imDbRating: "6.1",
		// 			imDbRatingCount: "485",
		// 			metacriticRating: "",
		// 			genres: "Drama",
		// 			genreList: [
		// 				{
		// 					key: "Drama",
		// 					value: "Drama",
		// 				},
		// 			],
		// 			directors: "Tyler Atkins",
		// 			directorList: [
		// 				{
		// 					id: "nm4468952",
		// 					name: "Tyler Atkins",
		// 				},
		// 			],
		// 			stars: "Isabel Lucas, Luke Hemsworth, Rasmus King, Savannah La Rain",
		// 			starList: [
		// 				{
		// 					id: "nm1456970",
		// 					name: "Isabel Lucas",
		// 				},
		// 				{
		// 					id: "nm1292661",
		// 					name: "Luke Hemsworth",
		// 				},
		// 				{
		// 					id: "nm9963129",
		// 					name: "Rasmus King",
		// 				},
		// 				{
		// 					id: "nm6742618",
		// 					name: "Savannah La Rain",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt0107048",
		// 			title: "Groundhog Day",
		// 			fullTitle: "Groundhog Day (1993)",
		// 			year: "1993",
		// 			releaseState: "12 Feb 1993",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BZWIxNzM5YzQtY2FmMS00Yjc3LWI1ZjUtNGVjMjMzZTIxZTIxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6699_AL_.jpg",
		// 			runtimeMins: "101",
		// 			runtimeStr: "101 mins",
		// 			plot: "A narcissistic, self-centered weatherman finds himself in a time loop on Groundhog Day, and the day keeps repeating until he gets it right.",
		// 			contentRating: "PG",
		// 			imDbRating: "8.1",
		// 			imDbRatingCount: "638771",
		// 			metacriticRating: "72",
		// 			genres: "Comedy, Drama, Fantasy",
		// 			genreList: [
		// 				{
		// 					key: "Comedy",
		// 					value: "Comedy",
		// 				},
		// 				{
		// 					key: "Drama",
		// 					value: "Drama",
		// 				},
		// 				{
		// 					key: "Fantasy",
		// 					value: "Fantasy",
		// 				},
		// 			],
		// 			directors: "Harold Ramis",
		// 			directorList: [
		// 				{
		// 					id: "nm0000601",
		// 					name: "Harold Ramis",
		// 				},
		// 			],
		// 			stars:
		// 				"Bill Murray, Andie MacDowell, Chris Elliott, Stephen Tobolowsky",
		// 			starList: [
		// 				{
		// 					id: "nm0000195",
		// 					name: "Bill Murray",
		// 				},
		// 				{
		// 					id: "nm0000510",
		// 					name: "Andie MacDowell",
		// 				},
		// 				{
		// 					id: "nm0254402",
		// 					name: "Chris Elliott",
		// 				},
		// 				{
		// 					id: "nm0864997",
		// 					name: "Stephen Tobolowsky",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt10354106",
		// 			title: "Stars at Noon",
		// 			fullTitle: "Stars at Noon (2022)",
		// 			year: "2022",
		// 			releaseState: "14 Oct 2022",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMGNkOTI5OTgtZGM0Yi00ZmExLTgzMzctMDkxMDk4MjE4ZTZmXkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_Ratio2.4019_AL_.jpg",
		// 			runtimeMins: "135",
		// 			runtimeStr: "135 mins",
		// 			plot: "A young American journalist stranded in present-day Nicaragua falls for an enigmatic Englishman who seems like her best chance of escape. She soon realizes, however, that he may be in even greater danger than she is.",
		// 			contentRating: "R",
		// 			imDbRating: "5.5",
		// 			imDbRatingCount: "1997",
		// 			metacriticRating: "64",
		// 			genres: "Drama, Romance, Thriller",
		// 			genreList: [
		// 				{
		// 					key: "Drama",
		// 					value: "Drama",
		// 				},
		// 				{
		// 					key: "Romance",
		// 					value: "Romance",
		// 				},
		// 				{
		// 					key: "Thriller",
		// 					value: "Thriller",
		// 				},
		// 			],
		// 			directors: "Claire Denis",
		// 			directorList: [
		// 				{
		// 					id: "nm0219136",
		// 					name: "Claire Denis",
		// 				},
		// 			],
		// 			stars: "Margaret Qualley, Joe Alwyn, Benny Safdie, Danny Ramirez",
		// 			starList: [
		// 				{
		// 					id: "nm4960279",
		// 					name: "Margaret Qualley",
		// 				},
		// 				{
		// 					id: "nm7153679",
		// 					name: "Joe Alwyn",
		// 				},
		// 				{
		// 					id: "nm1509478",
		// 					name: "Benny Safdie",
		// 				},
		// 				{
		// 					id: "nm6639989",
		// 					name: "Danny Ramirez",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt24807190",
		// 			title: "BTS: Yet to Come in Cinemas",
		// 			fullTitle: "BTS: Yet to Come in Cinemas (2023)",
		// 			year: "2023",
		// 			releaseState: "01 Feb 2023",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMGM4MmUwMmItM2FhZC00YWJlLTg0YjUtMjJkYmEzOGM2ZDIxXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_Ratio0.6699_AL_.jpg",
		// 			runtimeMins: "104",
		// 			runtimeStr: "104 mins",
		// 			plot: "It showcases BTS' massive free show at Busan's World Expo in October, which welcomed more than 50,000 in-person guests.",
		// 			contentRating: "Not Rated",
		// 			imDbRating: "9",
		// 			imDbRatingCount: "316",
		// 			metacriticRating: "",
		// 			genres: "Music",
		// 			genreList: [
		// 				{
		// 					key: "Music",
		// 					value: "Music",
		// 				},
		// 			],
		// 			directors: "Oh Yoon-Dong",
		// 			directorList: [
		// 				{
		// 					id: "nm12675888",
		// 					name: "Oh Yoon-Dong",
		// 				},
		// 			],
		// 			stars: "BTS",
		// 			starList: [
		// 				{
		// 					id: "nm7808003",
		// 					name: "BTS",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt15830702",
		// 			title:
		// 				"Sword Art Online the Movie: Progressive - Scherzo of Deep Night",
		// 			fullTitle:
		// 				"Sword Art Online the Movie: Progressive - Scherzo of Deep Night (2022)",
		// 			year: "2022",
		// 			releaseState: "03 Feb 2023",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BNzA4YWVkMmEtMGEwOS00ZGYxLTljODAtNzk4ZDA1MmQxN2Y5XkEyXkFqcGdeQXVyMTEwMjgyMzIz._V1_Ratio0.7081_AL_.jpg",
		// 			runtimeMins: "101",
		// 			runtimeStr: "101 mins",
		// 			plot: "Two months have passed since the deadly game began, and Kirito and Asuna continue to make progress. They stop for treasure, but then they must face Asuna's least favorite monster.",
		// 			contentRating: "",
		// 			imDbRating: "6.9",
		// 			imDbRatingCount: "212",
		// 			metacriticRating: "",
		// 			genres: "Animation",
		// 			genreList: [
		// 				{
		// 					key: "Animation",
		// 					value: "Animation",
		// 				},
		// 			],
		// 			directors: "Ayako Kouno",
		// 			directorList: [
		// 				{
		// 					id: "nm6100032",
		// 					name: "Ayako Kouno",
		// 				},
		// 			],
		// 			stars:
		// 				"Haruka Tomatsu, Yoshitsugu Matsuoka, Shiori Izawa, Kaede Hondo",
		// 			starList: [
		// 				{
		// 					id: "nm2955927",
		// 					name: "Haruka Tomatsu",
		// 				},
		// 				{
		// 					id: "nm4303311",
		// 					name: "Yoshitsugu Matsuoka",
		// 				},
		// 				{
		// 					id: "nm3287449",
		// 					name: "Shiori Izawa",
		// 				},
		// 				{
		// 					id: "nm7770751",
		// 					name: "Kaede Hondo",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt20205236",
		// 			title: "No Bears",
		// 			fullTitle: "No Bears (2022)",
		// 			year: "2022",
		// 			releaseState: "09 Feb 2023",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BYmY5MWM4OWItZDRhNy00NmFjLWFkNGQtMjQyMmU4YzkwNDIxXkEyXkFqcGdeQXVyNjQyMTI3MTM@._V1_Ratio0.6699_AL_.jpg",
		// 			runtimeMins: "106",
		// 			runtimeStr: "106 mins",
		// 			plot: "Two parallel love stories in which the partners are thwarted by hidden, inevitable obstacles, the force of superstition, and the mechanics of power.",
		// 			contentRating: "12",
		// 			imDbRating: "7.5",
		// 			imDbRatingCount: "789",
		// 			metacriticRating: "92",
		// 			genres: "Drama",
		// 			genreList: [
		// 				{
		// 					key: "Drama",
		// 					value: "Drama",
		// 				},
		// 			],
		// 			directors: "Jafar Panahi",
		// 			directorList: [
		// 				{
		// 					id: "nm0070159",
		// 					name: "Jafar Panahi",
		// 				},
		// 			],
		// 			stars:
		// 				"Jafar Panahi, Naser Hashemi, Vahid Mobasheri, Bakhtiyar Panjeei",
		// 			starList: [
		// 				{
		// 					id: "nm0070159",
		// 					name: "Jafar Panahi",
		// 				},
		// 				{
		// 					id: "nm0368018",
		// 					name: "Naser Hashemi",
		// 				},
		// 				{
		// 					id: "nm9186879",
		// 					name: "Vahid Mobasheri",
		// 				},
		// 				{
		// 					id: "nm11472869",
		// 					name: "Bakhtiyar Panjeei",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt21448540",
		// 			title: "Baby Ruby",
		// 			fullTitle: "Baby Ruby (2022)",
		// 			year: "2022",
		// 			releaseState: "03 Feb 2023",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BODQ1ZjY0NDktYmFiZi00NDlkLWJjNjUtMGJmNjIyN2E1Zjc2XkEyXkFqcGdeQXVyMTQzNTA5MzYz._V1_Ratio0.6699_AL_.jpg",
		// 			runtimeMins: "93",
		// 			runtimeStr: "93 mins",
		// 			plot: "The tightly scripted world of a vlogger and influencer unravels after she becomes a mother, in noted playwright Bess Wohl's feature debut.",
		// 			contentRating: "",
		// 			imDbRating: "5.5",
		// 			imDbRatingCount: "277",
		// 			metacriticRating: "57",
		// 			genres: "Drama, Thriller",
		// 			genreList: [
		// 				{
		// 					key: "Drama",
		// 					value: "Drama",
		// 				},
		// 				{
		// 					key: "Thriller",
		// 					value: "Thriller",
		// 				},
		// 			],
		// 			directors: "Bess Wohl",
		// 			directorList: [
		// 				{
		// 					id: "nm0937384",
		// 					name: "Bess Wohl",
		// 				},
		// 			],
		// 			stars: "Noémie Merlant, Kit Harington, Meredith Hagner, Reed Birney",
		// 			starList: [
		// 				{
		// 					id: "nm4374524",
		// 					name: "Noémie Merlant",
		// 				},
		// 				{
		// 					id: "nm3229685",
		// 					name: "Kit Harington",
		// 				},
		// 				{
		// 					id: "nm2993517",
		// 					name: "Meredith Hagner",
		// 				},
		// 				{
		// 					id: "nm0083714",
		// 					name: "Reed Birney",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt0034881",
		// 			title: "I Married a Witch",
		// 			fullTitle: "I Married a Witch (1942)",
		// 			year: "1942",
		// 			releaseState: "30 Oct 1942",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMjE3ZGU1MTUtZWEyMi00YjYzLWE4Y2QtNDUzYzRhMDZiOGYzXkEyXkFqcGdeQXVyNjc0MzMzNjA@._V1_Ratio0.6699_AL_.jpg",
		// 			runtimeMins: "77",
		// 			runtimeStr: "77 mins",
		// 			plot: "A beautiful 17th-century witch returns to life to plague politician Wallace Wooley, descendant of her persecutor.",
		// 			contentRating: "Passed",
		// 			imDbRating: "7.1",
		// 			imDbRatingCount: "8643",
		// 			metacriticRating: "",
		// 			genres: "Comedy, Fantasy, Romance",
		// 			genreList: [
		// 				{
		// 					key: "Comedy",
		// 					value: "Comedy",
		// 				},
		// 				{
		// 					key: "Fantasy",
		// 					value: "Fantasy",
		// 				},
		// 				{
		// 					key: "Romance",
		// 					value: "Romance",
		// 				},
		// 			],
		// 			directors: "René Clair",
		// 			directorList: [
		// 				{
		// 					id: "nm0163229",
		// 					name: "René Clair",
		// 				},
		// 			],
		// 			stars: "Fredric March, Veronica Lake, Robert Benchley, Susan Hayward",
		// 			starList: [
		// 				{
		// 					id: "nm0545298",
		// 					name: "Fredric March",
		// 				},
		// 				{
		// 					id: "nm0000043",
		// 					name: "Veronica Lake",
		// 				},
		// 				{
		// 					id: "nm0070361",
		// 					name: "Robert Benchley",
		// 				},
		// 				{
		// 					id: "nm0001333",
		// 					name: "Susan Hayward",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt1402488",
		// 			title: "Happy Feet Two",
		// 			fullTitle: "Happy Feet Two (2011)",
		// 			year: "2011",
		// 			releaseState: "18 Nov 2011",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMTg1MzU2Nzg2OV5BMl5BanBnXkFtZTcwNzE3MzAxNg@@._V1_Ratio0.6699_AL_.jpg",
		// 			runtimeMins: "100",
		// 			runtimeStr: "100 mins",
		// 			plot: "Mumble's son, Erik, is struggling to realize his talents in the Emperor Penguin world. Meanwhile, Mumble and his family and friends discover a new threat their home -- one that will take everyone working together to save them.",
		// 			contentRating: "PG",
		// 			imDbRating: "5.8",
		// 			imDbRatingCount: "45701",
		// 			metacriticRating: "50",
		// 			genres: "Animation, Adventure, Comedy",
		// 			genreList: [
		// 				{
		// 					key: "Animation",
		// 					value: "Animation",
		// 				},
		// 				{
		// 					key: "Adventure",
		// 					value: "Adventure",
		// 				},
		// 				{
		// 					key: "Comedy",
		// 					value: "Comedy",
		// 				},
		// 			],
		// 			directors: "George Miller, Gary Eck, David Peers",
		// 			directorList: [
		// 				{
		// 					id: "nm0004306",
		// 					name: "George Miller",
		// 				},
		// 				{
		// 					id: "nm0248495",
		// 					name: "Gary Eck",
		// 				},
		// 				{
		// 					id: "nm1668276",
		// 					name: "David Peers",
		// 				},
		// 			],
		// 			stars: "Elijah Wood, Robin Williams, Pink, Carlos Alazraqui",
		// 			starList: [
		// 				{
		// 					id: "nm0000704",
		// 					name: "Elijah Wood",
		// 				},
		// 				{
		// 					id: "nm0000245",
		// 					name: "Robin Williams",
		// 				},
		// 				{
		// 					id: "nm0600877",
		// 					name: "Pink",
		// 				},
		// 				{
		// 					id: "nm0016141",
		// 					name: "Carlos Alazraqui",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt9378692",
		// 			title: "Freedom's Path",
		// 			fullTitle: "Freedom's Path (2022)",
		// 			year: "2022",
		// 			releaseState: "14 Apr 2022",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BOTlhYWQ0MzItMzgxNC00MGRhLThhNjUtMWViNGNmZTM0NDE1XkEyXkFqcGdeQXVyMjk0OTE1MTQ@._V1_Ratio0.6699_AL_.jpg",
		// 			runtimeMins: "131",
		// 			runtimeStr: "131 mins",
		// 			plot: "When a soldier deserts from battle, he soon discovers the true cost of war through a young heroic black man, who teaches him the real meaning of Freedom.",
		// 			contentRating: "",
		// 			imDbRating: "7.1",
		// 			imDbRatingCount: "127",
		// 			metacriticRating: "",
		// 			genres: "Drama, History, War",
		// 			genreList: [
		// 				{
		// 					key: "Drama",
		// 					value: "Drama",
		// 				},
		// 				{
		// 					key: "History",
		// 					value: "History",
		// 				},
		// 				{
		// 					key: "War",
		// 					value: "War",
		// 				},
		// 			],
		// 			directors: "Brett Smith",
		// 			directorList: [
		// 				{
		// 					id: "nm4799854",
		// 					name: "Brett Smith",
		// 				},
		// 			],
		// 			stars: "Gerran Howell, RJ Cyler, Ewen Bremner, Harrison Gilbertson",
		// 			starList: [
		// 				{
		// 					id: "nm2228294",
		// 					name: "Gerran Howell",
		// 				},
		// 				{
		// 					id: "nm5518972",
		// 					name: "RJ Cyler",
		// 				},
		// 				{
		// 					id: "nm0001971",
		// 					name: "Ewen Bremner",
		// 				},
		// 				{
		// 					id: "nm1549295",
		// 					name: "Harrison Gilbertson",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt0053172",
		// 			title: "Pillow Talk",
		// 			fullTitle: "Pillow Talk (1959)",
		// 			year: "1959",
		// 			releaseState: "07 Oct 1959",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMTQ5NDg1NzU1OV5BMl5BanBnXkFtZTgwMDQyODgxMTE@._V1_Ratio0.6699_AL_.jpg",
		// 			runtimeMins: "102",
		// 			runtimeStr: "102 mins",
		// 			plot: "An interior decorator and a playboy songwriter share a telephone party line and size each other up.",
		// 			contentRating: "Passed",
		// 			imDbRating: "7.4",
		// 			imDbRatingCount: "17797",
		// 			metacriticRating: "73",
		// 			genres: "Comedy, Romance",
		// 			genreList: [
		// 				{
		// 					key: "Comedy",
		// 					value: "Comedy",
		// 				},
		// 				{
		// 					key: "Romance",
		// 					value: "Romance",
		// 				},
		// 			],
		// 			directors: "Michael Gordon",
		// 			directorList: [
		// 				{
		// 					id: "nm0330456",
		// 					name: "Michael Gordon",
		// 				},
		// 			],
		// 			stars: "Rock Hudson, Doris Day, Tony Randall, Thelma Ritter",
		// 			starList: [
		// 				{
		// 					id: "nm0001369",
		// 					name: "Rock Hudson",
		// 				},
		// 				{
		// 					id: "nm0000013",
		// 					name: "Doris Day",
		// 				},
		// 				{
		// 					id: "nm0709704",
		// 					name: "Tony Randall",
		// 				},
		// 				{
		// 					id: "nm0728812",
		// 					name: "Thelma Ritter",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt15309808",
		// 			title: "Michael",
		// 			fullTitle: "Michael (2023)",
		// 			year: "2023",
		// 			releaseState: "03 Feb 2023",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BYWUyOGUyNWYtOGU5Ny00MmRkLTlmYjAtZDUwMjhjZjNmNDk3XkEyXkFqcGdeQXVyODEyNjEwMDk@._V1_Ratio0.6699_AL_.jpg",
		// 			runtimeMins: "152",
		// 			runtimeStr: "152 mins",
		// 			plot: "The gang fighting over places. A youngster decides to gain control of the area. Can he complete his dream of ruling over the place?",
		// 			contentRating: "",
		// 			imDbRating: "6",
		// 			imDbRatingCount: "532",
		// 			metacriticRating: "",
		// 			genres: "Action, Drama",
		// 			genreList: [
		// 				{
		// 					key: "Action",
		// 					value: "Action",
		// 				},
		// 				{
		// 					key: "Drama",
		// 					value: "Drama",
		// 				},
		// 			],
		// 			directors: "Ranjit Jeyakodi",
		// 			directorList: [
		// 				{
		// 					id: "nm6352742",
		// 					name: "Ranjit Jeyakodi",
		// 				},
		// 			],
		// 			stars:
		// 				"Vijay Sethupathi, Sundeep Kishan, Varalaxmi Sarathkumar, Gautham Vasudev Menon",
		// 			starList: [
		// 				{
		// 					id: "nm4043111",
		// 					name: "Vijay Sethupathi",
		// 				},
		// 				{
		// 					id: "nm3807965",
		// 					name: "Sundeep Kishan",
		// 				},
		// 				{
		// 					id: "nm4174212",
		// 					name: "Varalaxmi Sarathkumar",
		// 				},
		// 				{
		// 					id: "nm1069826",
		// 					name: "Gautham Vasudev Menon",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt13328824",
		// 			title: "The Blind Man Who Did Not Want to See Titanic",
		// 			fullTitle: "The Blind Man Who Did Not Want to See Titanic (2021)",
		// 			year: "2021",
		// 			releaseState: "10 Sep 2021",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BZDFhMWMwYjQtMmM3ZS00MjJkLWI1MDYtMTQ1OTE4YzJiNTE4XkEyXkFqcGdeQXVyMTIxMTAzNzU4._V1_Ratio0.6986_AL_.jpg",
		// 			runtimeMins: "82",
		// 			runtimeStr: "82 mins",
		// 			plot: "Jaakko and Sirpa have never met face to face but used to talk on the phone every day. When he heard about her declining health, he decides to go meet her in another city ,and when he saw he was blind and paralyzed from the chest down.",
		// 			contentRating: "",
		// 			imDbRating: "7.6",
		// 			imDbRatingCount: "944",
		// 			metacriticRating: "76",
		// 			genres: "Comedy, Drama, Romance",
		// 			genreList: [
		// 				{
		// 					key: "Comedy",
		// 					value: "Comedy",
		// 				},
		// 				{
		// 					key: "Drama",
		// 					value: "Drama",
		// 				},
		// 				{
		// 					key: "Romance",
		// 					value: "Romance",
		// 				},
		// 			],
		// 			directors: "Teemu Nikki",
		// 			directorList: [
		// 				{
		// 					id: "nm1630429",
		// 					name: "Teemu Nikki",
		// 				},
		// 			],
		// 			stars:
		// 				"Petri Poikolainen, Marjaana Maijala, Samuli Jaskio, Hannamaija Nikander",
		// 			starList: [
		// 				{
		// 					id: "nm0688414",
		// 					name: "Petri Poikolainen",
		// 				},
		// 				{
		// 					id: "nm0537523",
		// 					name: "Marjaana Maijala",
		// 				},
		// 				{
		// 					id: "nm2799791",
		// 					name: "Samuli Jaskio",
		// 				},
		// 				{
		// 					id: "nm6155340",
		// 					name: "Hannamaija Nikander",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt15464742",
		// 			title: "Kali Jotta",
		// 			fullTitle: "Kali Jotta (2023)",
		// 			year: "2023",
		// 			releaseState: "03 Feb 2023",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BYzI0ZTc0ZDMtMGYwOS00NmFjLTliZmQtN2Q2NTAzNzhjYzcxXkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_Ratio0.8134_AL_.jpg",
		// 			runtimeMins: "130",
		// 			runtimeStr: "130 mins",
		// 			plot: "Kali Jotta is an upcoming Punjabi movie scheduled to be released on 3 Feb, 2023. The movie is directed by Vijay Kumar Arora and will feature Neeru Bajwa, Satinder Sartaaj and Wamiqa Gabbi ... See full summary",
		// 			contentRating: "",
		// 			imDbRating: "9.1",
		// 			imDbRatingCount: "877",
		// 			metacriticRating: "",
		// 			genres: "Crime, Drama",
		// 			genreList: [
		// 				{
		// 					key: "Crime",
		// 					value: "Crime",
		// 				},
		// 				{
		// 					key: "Drama",
		// 					value: "Drama",
		// 				},
		// 			],
		// 			directors: "Vijay Kumar Arora",
		// 			directorList: [
		// 				{
		// 					id: "nm4417706",
		// 					name: "Vijay Kumar Arora",
		// 				},
		// 			],
		// 			stars: "Satinder Sartaaj, Ankur Verma, Neeru Bajwa, Wamiqa Gabbi",
		// 			starList: [
		// 				{
		// 					id: "nm6710047",
		// 					name: "Satinder Sartaaj",
		// 				},
		// 				{
		// 					id: "nm9252605",
		// 					name: "Ankur Verma",
		// 				},
		// 				{
		// 					id: "nm1263093",
		// 					name: "Neeru Bajwa",
		// 				},
		// 				{
		// 					id: "nm3844346",
		// 					name: "Wamiqa Gabbi",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt15175188",
		// 			title: "Faraaz",
		// 			fullTitle: "Faraaz (2022)",
		// 			year: "2022",
		// 			releaseState: "03 Feb 2023",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BNjUxZmMxY2UtZTBjYi00ODYzLWJmZjQtODMyODc4N2I4MzAyXkEyXkFqcGdeQXVyMTE0MTY2Mzk2._V1_Ratio0.6699_AL_.jpg",
		// 			runtimeMins: "110",
		// 			runtimeStr: "110 mins",
		// 			plot: "Based on the real-life terrorist attack that ravaged a Dhaka cafe, Faraaz is a tense hostage drama that unfolds over one claustrophobic night.",
		// 			contentRating: "",
		// 			imDbRating: "3.1",
		// 			imDbRatingCount: "178",
		// 			metacriticRating: "",
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
		// 			directors: "Hansal Mehta",
		// 			directorList: [
		// 				{
		// 					id: "nm0576554",
		// 					name: "Hansal Mehta",
		// 				},
		// 			],
		// 			stars: "Jatin Sarin, Aamir Ali, Juhi Babbar, Ashish Bhatt",
		// 			starList: [
		// 				{
		// 					id: "nm12345878",
		// 					name: "Jatin Sarin",
		// 				},
		// 				{
		// 					id: "nm1269330",
		// 					name: "Aamir Ali",
		// 				},
		// 				{
		// 					id: "nm1318320",
		// 					name: "Juhi Babbar",
		// 				},
		// 				{
		// 					id: "nm6278693",
		// 					name: "Ashish Bhatt",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt3326138",
		// 			title: "The Last Deal",
		// 			fullTitle: "The Last Deal (2023)",
		// 			year: "2023",
		// 			releaseState: "07 Feb 2023",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMTI2MTllMGUtOWVjMC00Y2MwLWE5MjEtNjc2MmYyMDZhZmIyXkEyXkFqcGdeQXVyNTMzNzI1MQ@@._V1_Ratio0.6699_AL_.jpg",
		// 			runtimeMins: "91",
		// 			runtimeStr: "91 mins",
		// 			plot: "A black market marijuana dealer tries to make one final score before getting squeezed out of the business when cannabis becomes legal.",
		// 			contentRating: "R",
		// 			imDbRating: "8.2",
		// 			imDbRatingCount: "8",
		// 			metacriticRating: "",
		// 			genres: "Crime, Thriller",
		// 			genreList: [
		// 				{
		// 					key: "Crime",
		// 					value: "Crime",
		// 				},
		// 				{
		// 					key: "Thriller",
		// 					value: "Thriller",
		// 				},
		// 			],
		// 			directors: "Jonathan Salemi",
		// 			directorList: [
		// 				{
		// 					id: "nm1400995",
		// 					name: "Jonathan Salemi",
		// 				},
		// 			],
		// 			stars: "Anthony Molinari, Sala Baker, Gigi Gustin, Conner Floyd",
		// 			starList: [
		// 				{
		// 					id: "nm1190376",
		// 					name: "Anthony Molinari",
		// 				},
		// 				{
		// 					id: "nm1019674",
		// 					name: "Sala Baker",
		// 				},
		// 				{
		// 					id: "nm8435114",
		// 					name: "Gigi Gustin",
		// 				},
		// 				{
		// 					id: "nm7903324",
		// 					name: "Conner Floyd",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt15837716",
		// 			title: "Stars Fell Again",
		// 			fullTitle: "Stars Fell Again (2023)",
		// 			year: "2023",
		// 			releaseState: "03 Feb 2023",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BM2U2YzMxZTItMWZlMy00YWE5LWI0ZDctMjZiMDNiMmFmZTFmXkEyXkFqcGdeQXVyMjE4NzUxNDA@._V1_Ratio0.6890_AL_.jpg",
		// 			runtimeMins: "88",
		// 			runtimeStr: "88 mins",
		// 			plot: "Bryce is ready to propose to Madison while they visit her family for Christmas. However, the spontaneous wedding of Madison's sister Harper throws Bryce's perfect proposal plans into a tailspin.",
		// 			contentRating: "",
		// 			imDbRating: "0",
		// 			imDbRatingCount: "0",
		// 			metacriticRating: "",
		// 			genres: "Comedy, Romance",
		// 			genreList: [
		// 				{
		// 					key: "Comedy",
		// 					value: "Comedy",
		// 				},
		// 				{
		// 					key: "Romance",
		// 					value: "Romance",
		// 				},
		// 			],
		// 			directors: "V.W. Scheich",
		// 			directorList: [
		// 				{
		// 					id: "nm0770564",
		// 					name: "V.W. Scheich",
		// 				},
		// 			],
		// 			stars: "Ciara Hanna, James Maslow, Tom Connolly, Drew Moerlein",
		// 			starList: [
		// 				{
		// 					id: "nm3752578",
		// 					name: "Ciara Hanna",
		// 				},
		// 				{
		// 					id: "nm3148185",
		// 					name: "James Maslow",
		// 				},
		// 				{
		// 					id: "nm0175366",
		// 					name: "Tom Connolly",
		// 				},
		// 				{
		// 					id: "nm3530590",
		// 					name: "Drew Moerlein",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt0082361",
		// 			title: "The Fan",
		// 			fullTitle: "The Fan (1982)",
		// 			year: "1982",
		// 			releaseState: "06 Jun 1982",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BOTU1MTlmNjEtNjU2Ni00MDdkLWE5YzItZGZlZTEyMWUwMDVhXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_Ratio0.6699_AL_.jpg",
		// 			runtimeMins: "92",
		// 			runtimeStr: "92 mins",
		// 			plot: "The hero-worship that Simone has for a pop singer is built to a crescendo until she passes out when she finally sees him up-close in a crowd of fans. She is later shocked when he lets her know that he does not love her.",
		// 			contentRating: "Unrated",
		// 			imDbRating: "6.6",
		// 			imDbRatingCount: "1704",
		// 			metacriticRating: "",
		// 			genres: "Drama, Horror, Music",
		// 			genreList: [
		// 				{
		// 					key: "Drama",
		// 					value: "Drama",
		// 				},
		// 				{
		// 					key: "Horror",
		// 					value: "Horror",
		// 				},
		// 				{
		// 					key: "Music",
		// 					value: "Music",
		// 				},
		// 			],
		// 			directors: "Eckhart Schmidt",
		// 			directorList: [
		// 				{
		// 					id: "nm0772905",
		// 					name: "Eckhart Schmidt",
		// 				},
		// 			],
		// 			stars:
		// 				"Désirée Nosbusch, Bodo Staiger, Simone Brahmann, Jonas Vischer",
		// 			starList: [
		// 				{
		// 					id: "nm0636440",
		// 					name: "Désirée Nosbusch",
		// 				},
		// 				{
		// 					id: "nm0825314",
		// 					name: "Bodo Staiger",
		// 				},
		// 				{
		// 					id: "nm0103980",
		// 					name: "Simone Brahmann",
		// 				},
		// 				{
		// 					id: "nm0899544",
		// 					name: "Jonas Vischer",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt18764992",
		// 			title: "The Quiet Epidemic",
		// 			fullTitle: "The Quiet Epidemic (2022)",
		// 			year: "2022",
		// 			releaseState: "09 Oct 2022",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BNDBiZWIzMjQtNzg1Yy00Nzg0LWIwZmMtOGM4Njg2NGM0OTNiXkEyXkFqcGdeQXVyNTgxODc0NzY@._V1_Ratio0.6699_AL_.jpg",
		// 			runtimeMins: "102",
		// 			runtimeStr: "102 mins",
		// 			plot: "A young girl and a Duke University scientist are both diagnosed with chronic Lyme disease, and the pair searches for answers surrounding the disease.",
		// 			contentRating: "",
		// 			imDbRating: "9.3",
		// 			imDbRatingCount: "19",
		// 			metacriticRating: "",
		// 			genres: "Documentary",
		// 			genreList: [
		// 				{
		// 					key: "Documentary",
		// 					value: "Documentary",
		// 				},
		// 			],
		// 			directors: "",
		// 			directorList: [],
		// 			stars: "",
		// 			starList: [],
		// 		},
		// 		{
		// 			id: "tt24074898",
		// 			title: "Projapati",
		// 			fullTitle: "Projapati (2022)",
		// 			year: "2022",
		// 			releaseState: "23 Dec 2022",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMzllM2MyZGYtNTZmNy00ZDA0LWJiNTEtYzNhN2IyMDI0NDQ4XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_Ratio0.9952_AL_.jpg",
		// 			runtimeMins: "142",
		// 			runtimeStr: "142 mins",
		// 			plot: "A retired 65-year widower, lives alone as his son, Joy, a wedding planner running his own business, has a very busy schedule. He wishes Joy to be married. Will he be successful?",
		// 			contentRating: "",
		// 			imDbRating: "8.3",
		// 			imDbRatingCount: "515",
		// 			metacriticRating: "",
		// 			genres: "Drama",
		// 			genreList: [
		// 				{
		// 					key: "Drama",
		// 					value: "Drama",
		// 				},
		// 			],
		// 			directors: "Avijit Sen",
		// 			directorList: [
		// 				{
		// 					id: "nm2365474",
		// 					name: "Avijit Sen",
		// 				},
		// 			],
		// 			stars: "Dev, Mithun Chakraborty, Koneenica Banerjee, Biswanath Basu",
		// 			starList: [
		// 				{
		// 					id: "nm3359025",
		// 					name: "Dev",
		// 				},
		// 				{
		// 					id: "nm0149822",
		// 					name: "Mithun Chakraborty",
		// 				},
		// 				{
		// 					id: "nm3368637",
		// 					name: "Koneenica Banerjee",
		// 				},
		// 				{
		// 					id: "nm3392688",
		// 					name: "Biswanath Basu",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt25145532",
		// 			title: "Family Matters",
		// 			fullTitle: "Family Matters (2022)",
		// 			year: "2022",
		// 			releaseState: "03 Feb 2023",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMjBlYzgzMzAtYTVmYi00YzRlLWFkMGQtMDNlOGI0YTI5OTE4XkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_Ratio0.6890_AL_.jpg",
		// 			runtimeMins: "134",
		// 			runtimeStr: "134 mins",
		// 			plot: "This tear-jerking dramedy centers on a family whose members squabble with each other over who will take care of their stroke-stricken father.",
		// 			contentRating: "",
		// 			imDbRating: "7.6",
		// 			imDbRatingCount: "20",
		// 			metacriticRating: "",
		// 			genres: "Drama",
		// 			genreList: [
		// 				{
		// 					key: "Drama",
		// 					value: "Drama",
		// 				},
		// 			],
		// 			directors: "Nuel C. Naval",
		// 			directorList: [
		// 				{
		// 					id: "nm0622734",
		// 					name: "Nuel C. Naval",
		// 				},
		// 			],
		// 			stars: "Noel Trinidad, Liza Lorena, Nonie Buencamino, Agot Isidro",
		// 			starList: [
		// 				{
		// 					id: "nm0872967",
		// 					name: "Noel Trinidad",
		// 				},
		// 				{
		// 					id: "nm0520602",
		// 					name: "Liza Lorena",
		// 				},
		// 				{
		// 					id: "nm0119193",
		// 					name: "Nonie Buencamino",
		// 				},
		// 				{
		// 					id: "nm0411196",
		// 					name: "Agot Isidro",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt15341106",
		// 			title: "Writer Padmabhushan",
		// 			fullTitle: "Writer Padmabhushan (2023)",
		// 			year: "2023",
		// 			releaseState: "03 Feb 2023",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMzU3OTg2YTItOWI2Ni00N2Q3LWIwZTYtMTA1YzY1NWQ2NDI5XkEyXkFqcGdeQXVyMTU2NDkwOTAw._V1_Ratio1.0048_AL_.jpg",
		// 			runtimeMins: "123",
		// 			runtimeStr: "123 mins",
		// 			plot: "Padmabhushan, a 25-year-old aspiring writer based out of Vijayawada and his middle class family take us on a roller coaster ride packed with innocuous fun and soft emotions, with their heart in the right place.",
		// 			contentRating: "",
		// 			imDbRating: "8",
		// 			imDbRatingCount: "192",
		// 			metacriticRating: "",
		// 			genres: "Comedy, Drama",
		// 			genreList: [
		// 				{
		// 					key: "Comedy",
		// 					value: "Comedy",
		// 				},
		// 				{
		// 					key: "Drama",
		// 					value: "Drama",
		// 				},
		// 			],
		// 			directors: "Shanmukha Prasanth",
		// 			directorList: [
		// 				{
		// 					id: "nm12897462",
		// 					name: "Shanmukha Prasanth",
		// 				},
		// 			],
		// 			stars: "Ashish Vidyarthi, Tina Shilparaj, Suhas, Rohini",
		// 			starList: [
		// 				{
		// 					id: "nm0896573",
		// 					name: "Ashish Vidyarthi",
		// 				},
		// 				{
		// 					id: "nm12773022",
		// 					name: "Tina Shilparaj",
		// 				},
		// 				{
		// 					id: "nm8819004",
		// 					name: "Suhas",
		// 				},
		// 				{
		// 					id: "nm0737513",
		// 					name: "Rohini",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt0088992",
		// 			title: "The Runner",
		// 			fullTitle: "The Runner (1984)",
		// 			year: "1984",
		// 			releaseState: "1984",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BNmI2MWEwNzctZGYwOS00NDQ1LThmNTktMTVmZTgzNTRiMjE1XkEyXkFqcGdeQXVyNDE0OTU3NDY@._V1_Ratio0.6699_AL_.jpg",
		// 			runtimeMins: "94",
		// 			runtimeStr: "94 mins",
		// 			plot: "After enrolling in a school, an impoverished boy finds conflict with his classmates and decides to compete to earn their respect.",
		// 			contentRating: "",
		// 			imDbRating: "7.7",
		// 			imDbRatingCount: "2098",
		// 			metacriticRating: "",
		// 			genres: "Drama",
		// 			genreList: [
		// 				{
		// 					key: "Drama",
		// 					value: "Drama",
		// 				},
		// 			],
		// 			directors: "Amir Naderi",
		// 			directorList: [
		// 				{
		// 					id: "nm0618881",
		// 					name: "Amir Naderi",
		// 				},
		// 			],
		// 			stars: "Madjid Niroumand, Abbas Nazeri, Musa Torkizadeh",
		// 			starList: [
		// 				{
		// 					id: "nm0632572",
		// 					name: "Madjid Niroumand",
		// 				},
		// 				{
		// 					id: "nm0623414",
		// 					name: "Abbas Nazeri",
		// 				},
		// 				{
		// 					id: "nm0868092",
		// 					name: "Musa Torkizadeh",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			id: "tt12725876",
		// 			title: "The Arctic: Our Last Great Wilderness",
		// 			fullTitle: "The Arctic: Our Last Great Wilderness (2021)",
		// 			year: "2021",
		// 			releaseState: "28 May 2021",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BZDk2YzgzMDgtZGVlNy00ZTE0LTg3NTgtYmI4MjhhNTMxNDJiXkEyXkFqcGdeQXVyNjAzNDk1OTQ@._V1_Ratio0.6986_AL_.jpg",
		// 			runtimeMins: "45",
		// 			runtimeStr: "45 mins",
		// 			plot: "Imagine a place that is vast, wild and untouched, where some of the world's greatest wildlife spectacles unfold. The Arctic National Wildlife refuge, situated in the northeastern corner of ... See full summary",
		// 			contentRating: "",
		// 			imDbRating: "5.9",
		// 			imDbRatingCount: "8",
		// 			metacriticRating: "",
		// 			genres: "Documentary",
		// 			genreList: [
		// 				{
		// 					key: "Documentary",
		// 					value: "Documentary",
		// 				},
		// 			],
		// 			directors: "Myles Connolly, Florian Schulz",
		// 			directorList: [
		// 				{
		// 					id: "nm0174915",
		// 					name: "Myles Connolly",
		// 				},
		// 				{
		// 					id: "nm6146131",
		// 					name: "Florian Schulz",
		// 				},
		// 			],
		// 			stars:
		// 				"Bernadette Demientieff, Emil Herrera-Schulz, Isaiah Horace, Daazhraii Johnson",
		// 			starList: [
		// 				{
		// 					id: "nm11963325",
		// 					name: "Bernadette Demientieff",
		// 				},
		// 				{
		// 					id: "nm11566358",
		// 					name: "Emil Herrera-Schulz",
		// 				},
		// 				{
		// 					id: "nm13023130",
		// 					name: "Isaiah Horace",
		// 				},
		// 				{
		// 					id: "nm8508589",
		// 					name: "Daazhraii Johnson",
		// 				},
		// 			],
		// 		},
		// 	],
		// 	errorMessage: "",
		// };
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
