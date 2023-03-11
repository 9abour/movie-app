import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "k_98sb98vr";

export const getMovieDetails = createAsyncThunk(
	"movieDetails/getMoveDetails",
	async movieId => {
		const resp = await fetch(
			`https://imdb-api.com/en/API/Title/${API_KEY}/${movieId}/FullActor,Posters,Trailer,Ratings`
		);
		const data = await resp.json();
		// const data = {
		// 	id: "tt1375666",
		// 	title: "Inception",
		// 	originalTitle: "",
		// 	fullTitle: "Inception (2010)",
		// 	type: "Movie",
		// 	year: "2010",
		// 	image:
		// 		"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6762_AL_.jpg",
		// 	releaseDate: "2010-07-16",
		// 	runtimeMins: "148",
		// 	runtimeStr: "2h 28min",
		// 	plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
		// 	plotLocal: "",
		// 	plotLocalIsRtl: false,
		// 	awards:
		// 		"Top rated movie #14 | Won 4 Oscars, 158 wins & 220 nominations total",
		// 	directors: "Christopher Nolan",
		// 	directorList: [
		// 		{
		// 			id: "nm0634240",
		// 			name: "Christopher Nolan",
		// 		},
		// 	],
		// 	writers: "Christopher Nolan",
		// 	writerList: [
		// 		{
		// 			id: "nm0634240",
		// 			name: "Christopher Nolan",
		// 		},
		// 	],
		// 	stars: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
		// 	starList: [
		// 		{
		// 			id: "nm0000138",
		// 			name: "Leonardo DiCaprio",
		// 		},
		// 		{
		// 			id: "nm0330687",
		// 			name: "Joseph Gordon-Levitt",
		// 		},
		// 		{
		// 			id: "nm0680983",
		// 			name: "Elliot Page",
		// 		},
		// 	],
		// 	actorList: [
		// 		{
		// 			id: "nm0000138",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_Ratio0.7273_AL_.jpg",
		// 			name: "Leonardo DiCaprio",
		// 			asCharacter: "Cobb",
		// 		},
		// 		{
		// 			id: "nm0330687",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMTY3NTk0NDI3Ml5BMl5BanBnXkFtZTgwNDA3NjY0MjE@._V1_Ratio0.7273_AL_.jpg",
		// 			name: "Joseph Gordon-Levitt",
		// 			asCharacter: "Arthur",
		// 		},
		// 		{
		// 			id: "nm0680983",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BNmNhZmFjM2ItNTlkNi00ZTQ4LTk3NzYtYTgwNTJiMTg4OWQzXkEyXkFqcGdeQXVyMTM1MjAxMDc3._V1_Ratio0.7273_AL_.jpg",
		// 			name: "Elliot Page",
		// 			asCharacter: "Ariadne (as Ellen Page)",
		// 		},
		// 		{
		// 			id: "nm0362766",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMTQ3ODEyNjA4Nl5BMl5BanBnXkFtZTgwMTE4ODMyMjE@._V1_Ratio0.7273_AL_.jpg",
		// 			name: "Tom Hardy",
		// 			asCharacter: "Eames",
		// 		},
		// 		{
		// 			id: "nm0913822",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMTQzMTUzNjc4Nl5BMl5BanBnXkFtZTcwMTUyODU2Mw@@._V1_Ratio0.7273_AL_.jpg",
		// 			name: "Ken Watanabe",
		// 			asCharacter: "Saito",
		// 		},
		// 		{
		// 			id: "nm2438307",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMTI5Nzc2NTc2MF5BMl5BanBnXkFtZTcwMDM2MTc1Mg@@._V1_Ratio1.5000_AL_.jpg",
		// 			name: "Dileep Rao",
		// 			asCharacter: "Yusuf",
		// 		},
		// 		{
		// 			id: "nm0614165",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMTUzMjg1NzIyOV5BMl5BanBnXkFtZTYwMzg2Mjgy._V1_Ratio0.7273_AL_.jpg",
		// 			name: "Cillian Murphy",
		// 			asCharacter: "Robert Fischer",
		// 		},
		// 		{
		// 			id: "nm0000297",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMTk1OTQ5MzUzM15BMl5BanBnXkFtZTgwMDUxMTY1NDE@._V1_Ratio0.7273_AL_.jpg",
		// 			name: "Tom Berenger",
		// 			asCharacter: "Browning",
		// 		},
		// 		{
		// 			id: "nm0182839",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMTQxNTEzNTkwNF5BMl5BanBnXkFtZTcwNzQ2NDIwOQ@@._V1_Ratio0.7273_AL_.jpg",
		// 			name: "Marion Cotillard",
		// 			asCharacter: "Mal",
		// 		},
		// 		{
		// 			id: "nm0000592",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMTMyMjIxMTQ2NV5BMl5BanBnXkFtZTYwNDQ0NTE1._V1_Ratio0.7273_AL_.jpg",
		// 			name: "Pete Postlethwaite",
		// 			asCharacter: "Maurice Fischer",
		// 		},
		// 		{
		// 			id: "nm0000323",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMjAwNzIwNTQ4Ml5BMl5BanBnXkFtZTYwMzE1MTUz._V1_Ratio0.7273_AL_.jpg",
		// 			name: "Michael Caine",
		// 			asCharacter: "Miles",
		// 		},
		// 		{
		// 			id: "nm0001305",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMTQ3MjU1MDMxM15BMl5BanBnXkFtZTgwODk5ODE4MDE@._V1_Ratio0.7273_AL_.jpg",
		// 			name: "Lukas Haas",
		// 			asCharacter: "Nash",
		// 		},
		// 		{
		// 			id: "nm2581730",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			name: "Tai-Li Lee",
		// 			asCharacter: "Tadashi",
		// 		},
		// 		{
		// 			id: "nm3637500",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BNGY5NWFkMTItNGFkNi00NzNiLWEyMDctZmM0NWNjMmVkNjg2XkEyXkFqcGdeQXVyMTAwMzUyMzUy._V1_Ratio0.7273_AL_.jpg",
		// 			name: "Claire Geare",
		// 			asCharacter: "Phillipa (3 Years Old)",
		// 		},
		// 		{
		// 			id: "nm3960408",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BN2ZjZTA4MGUtNGFiOS00MmExLTljMTQtNmVlODJmYTU2ZDU4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDAxOTExNTM@._V1_Ratio2.3636_AL_.jpg",
		// 			name: "Magnus Nolan",
		// 			asCharacter: "James (20 Months Old)",
		// 		},
		// 		{
		// 			id: "nm2855622",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BZTlkM2U2YWQtMjFmZS00ODVjLTg1ODMtYmRkMWUxMWZmYTE0XkEyXkFqcGdeQXVyMTI0NjI2Mzg5._V1_Ratio0.7273_AL_.jpg",
		// 			name: "Taylor Geare",
		// 			asCharacter: "Phillipa (5 Years Old)",
		// 		},
		// 		{
		// 			id: "nm3638213",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			name: "Johnathan Geare",
		// 			asCharacter: "James (3 Years Old)",
		// 		},
		// 		{
		// 			id: "nm0556070",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BNmVlMWVhYzktODE1Ny00YWYzLTlhOGYtNTZlZmNkMTJiMDAyXkEyXkFqcGdeQXVyNDAxMDUxOA@@._V1_Ratio0.7273_AL_.jpg",
		// 			name: "Tohoru Masamune",
		// 			asCharacter: "Japanese Security Guard",
		// 		},
		// 		{
		// 			id: "nm0645785",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BZGUxZGYwYTktYmQxYy00MDY1LWJhMmUtOTkwOWNmMDc1NzM5XkEyXkFqcGdeQXVyMzI0NTEwMjY@._V1_Ratio1.8182_AL_.jpg",
		// 			name: "Yuji Okumoto",
		// 			asCharacter: "Saito's Attendant",
		// 		},
		// 		{
		// 			id: "nm0131565",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMTk3NzEyMTI5MV5BMl5BanBnXkFtZTcwNDgxNDIzOA@@._V1_Ratio0.7273_AL_.jpg",
		// 			name: "Earl Cameron",
		// 			asCharacter: "Elderly Bald Man",
		// 		},
		// 		{
		// 			id: "nm1147074",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			name: "Ryan Hayward",
		// 			asCharacter: "Lawyer",
		// 		},
		// 		{
		// 			id: "nm3886541",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			name: "Miranda Nolan",
		// 			asCharacter: "Flight Attendant",
		// 		},
		// 		{
		// 			id: "nm0270383",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMTMzNDE5MjI2MV5BMl5BanBnXkFtZTYwOTgwNzcy._V1_Ratio0.7273_AL_.jpg",
		// 			name: "Russ Fega",
		// 			asCharacter: "Cab Driver",
		// 		},
		// 		{
		// 			id: "nm0445551",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMjAwMjEwODE1N15BMl5BanBnXkFtZTgwNzM4MzY4ODE@._V1_Ratio1.2727_AL_.jpg",
		// 			name: "Tim Kelleher",
		// 			asCharacter: "Thin Man",
		// 		},
		// 		{
		// 			id: "nm1506908",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMjE0MzUwNTUxM15BMl5BanBnXkFtZTcwNzU1OTY5Ng@@._V1_Ratio0.7273_AL_.jpg",
		// 			name: "Talulah Riley",
		// 			asCharacter: "Blonde",
		// 		},
		// 		{
		// 			id: "nm3862333",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			name: "Nicolas Clerc",
		// 			asCharacter: "Bridge Sub Con",
		// 		},
		// 		{
		// 			id: "nm1886397",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			name: "Coralie Dedykere",
		// 			asCharacter: "Bridge Sub Con",
		// 		},
		// 		{
		// 			id: "nm0481472",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			name: "Silvie Laguna",
		// 			asCharacter: "Bridge Sub Con",
		// 		},
		// 		{
		// 			id: "nm1522531",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMTc1MzU5Mjk5NF5BMl5BanBnXkFtZTYwMDI0OTcy._V1_Ratio0.7273_AL_.jpg",
		// 			name: "Virgile Bramly",
		// 			asCharacter: "Bridge Sub Con",
		// 		},
		// 		{
		// 			id: "nm0196815",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			name: "Jean-Michel Dagory",
		// 			asCharacter: "Bridge Sub Con",
		// 		},
		// 		{
		// 			id: "nm2197472",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			name: "Helena Cullinan",
		// 			asCharacter: "Penrose Sub Con",
		// 		},
		// 		{
		// 			id: "nm2855554",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BOTQxZmVhODgtZmEwOS00ZThmLWEzODQtNjE0NjExMWUwZDVkXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio0.8636_AL_.jpg",
		// 			name: "Mark Fleischmann",
		// 			asCharacter: "Penrose Sub Con",
		// 		},
		// 		{
		// 			id: "nm2689325",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			name: "Shelley Lang",
		// 			asCharacter: "Penrose Sub Con",
		// 		},
		// 		{
		// 			id: "nm2462275",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			name: "Adam Cole",
		// 			asCharacter: "Bar Sub Con",
		// 		},
		// 		{
		// 			id: "nm0615007",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			name: "Jack Murray",
		// 			asCharacter: "Bar Sub Con",
		// 		},
		// 		{
		// 			id: "nm1620995",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			name: "Kraig Thornber",
		// 			asCharacter: "Bar Sub Con",
		// 		},
		// 		{
		// 			id: "nm3960627",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			name: "Angela Nathenson",
		// 			asCharacter: "Bar Sub Con",
		// 		},
		// 		{
		// 			id: "nm1068659",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMTU4ODkzNDg1MV5BMl5BanBnXkFtZTcwOTM4NDAzNw@@._V1_Ratio0.7273_AL_.jpg",
		// 			name: "Natasha Beaumont",
		// 			asCharacter: "Bar Sub Con",
		// 		},
		// 		{
		// 			id: "nm0705874",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BZmRjMzFkZGMtZGVkNS00NDFhLTk2MWEtNmE2NjRmYzZlZDFlXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio0.7273_AL_.jpg",
		// 			name: "Marc Raducci",
		// 			asCharacter: "Lobby Sub Con",
		// 		},
		// 		{
		// 			id: "nm0318784",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BZGNlMDZjYzAtNzkyMy00OWQzLTg0OGQtNzhkNDg0YzRkMmViXkEyXkFqcGdeQXVyNDk3MDE1OQ@@._V1_Ratio0.7273_AL_.jpg",
		// 			name: "Carl Gilliard",
		// 			asCharacter: "Lobby Sub Con",
		// 		},
		// 		{
		// 			id: "nm1781653",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BYTQ0ODg4ZDMtZjNlNC00MDM3LWJhM2UtNTEwZGVjNmI5ZjMwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio1.1364_AL_.jpg",
		// 			name: "Jill Maddrell",
		// 			asCharacter: "Lobby Sub Con",
		// 		},
		// 		{
		// 			id: "nm3123016",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BNDY2ZGNhNGYtNWYyZS00NTEzLTk3NTktMDc1M2E1ODgwYWZjXkEyXkFqcGdeQXVyMTk4MjczOTg@._V1_Ratio0.7273_AL_.jpg",
		// 			name: "Alex Lombard",
		// 			asCharacter: "Lobby Sub Con",
		// 		},
		// 		{
		// 			id: "nm0700445",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			name: "Nicole Pulliam",
		// 			asCharacter: "Lobby Sub Con",
		// 		},
		// 		{
		// 			id: "nm3462529",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			name: "Peter Basham",
		// 			asCharacter: "Fischer's Jet Captain",
		// 		},
		// 		{
		// 			id: "nm0309461",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BNjVjMGE3NDYtMDk2Yi00YjhiLWIzNTUtMTIyNjI4NTU3YzgzXkEyXkFqcGdeQXVyMzIxNDc2MDI@._V1_Ratio2.5000_AL_.jpg",
		// 			name: "Michael Gaston",
		// 			asCharacter: "Immigration Officer",
		// 		},
		// 		{
		// 			id: "nm1907658",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BYWQwMmE5ZTAtNTYwZC00MDUyLWE4MjQtZDA4N2RjYzVmOWU3XkEyXkFqcGdeQXVyMTA0MzM0ODgz._V1_Ratio0.7273_AL_.jpg",
		// 			name: "Felix Scott",
		// 			asCharacter: "Businessman",
		// 		},
		// 		{
		// 			id: "nm0687091",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMTIwMTIzNTk4OV5BMl5BanBnXkFtZTcwOTc3NjIzMQ@@._V1_Ratio0.9545_AL_.jpg",
		// 			name: "Andrew Pleavin",
		// 			asCharacter: "Businessman",
		// 		},
		// 		{
		// 			id: "nm0721835",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			name: "Lisa Reynolds",
		// 			asCharacter: "Private Nurse",
		// 		},
		// 		{
		// 			id: "nm2278735",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			name: "Jason Tendell",
		// 			asCharacter: "Fischer's Driver",
		// 		},
		// 		{
		// 			id: "nm0319669",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			name: "Jack Gilroy",
		// 			asCharacter: "Old Cobb",
		// 		},
		// 		{
		// 			id: "nm0919952",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			name: "Shannon Welles",
		// 			asCharacter: "Old Mal",
		// 		},
		// 		{
		// 			id: "nm3230097",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			name: "Michael August",
		// 			asCharacter: "LAX Passenger (uncredited)",
		// 		},
		// 		{
		// 			id: "nm2145616",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BYzQzZmFkNzctMzQ3Yi00NmFjLTg5NWYtZGI3ZDc4YjMzOTAzXkEyXkFqcGdeQXVyMjIwOTcwODA@._V1_Ratio0.7273_AL_.jpg",
		// 			name: "Ken Bhan",
		// 			asCharacter: "Mombasan Gambler (uncredited)",
		// 		},
		// 		{
		// 			id: "nm0132711",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BNjAwMDE4MDQzOF5BMl5BanBnXkFtZTcwNDc3NjQ2OA@@._V1_Ratio0.7727_AL_.jpg",
		// 			name: "Marvin Campbell",
		// 			asCharacter: "Hallway Guard (uncredited)",
		// 		},
		// 		{
		// 			id: "nm0136563",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BZGYxMjVhYTQtYWQzZS00Y2RmLWIwMTctMmZiMTgzNWY4YzRhXkEyXkFqcGdeQXVyMjMwMzQ0Ng@@._V1_Ratio0.7273_AL_.jpg",
		// 			name: "Hélène Cardona",
		// 			asCharacter: "French Student (voice) (uncredited)",
		// 		},
		// 		{
		// 			id: "nm2554469",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BODE5YzQyYjktNjE0Ny00YTE0LWE0NjctMmQ3NjViMWRkZjhmXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio0.8182_AL_.jpg",
		// 			name: "John Ceallach",
		// 			asCharacter: "LAX Passenger (uncredited)",
		// 		},
		// 		{
		// 			id: "nm0160324",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BNWNkZjdiZmMtNzkzZC00ZDA1LWE0NzktN2VjODhkZThlMzdiXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio0.7273_AL_.jpg",
		// 			name: "Gregg Christie",
		// 			asCharacter: "Stock Broker (uncredited)",
		// 		},
		// 		{
		// 			id: "nm0189162",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMjA1OTY4ODQyM15BMl5BanBnXkFtZTcwMjYxNDAzMQ@@._V1_Ratio0.7273_AL_.jpg",
		// 			name: "Garvin Cross",
		// 			asCharacter: "Snow Commander (uncredited)",
		// 		},
		// 		{
		// 			id: "nm3050181",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			name: "James Currie",
		// 			asCharacter: "Lawyer (uncredited)",
		// 		},
		// 		{
		// 			id: "nm3769592",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BNjEzNGRmYTYtOTM5NS00M2Y4LTliMWQtNzZkODljZmJhY2JlXkEyXkFqcGdeQXVyNTk1MDc1MDQ@._V1_Ratio0.7273_AL_.jpg",
		// 			name: "Youlanda Davis",
		// 			asCharacter: "Mombasan Cashier (uncredited)",
		// 		},
		// 		{
		// 			id: "nm1994157",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BZjFiNGEyNDMtYzZlMi00Y2I2LTljNTEtYTUwOGUyNDNhNjJkXkEyXkFqcGdeQXVyNDEzODY3OTA@._V1_Ratio0.7727_AL_.jpg",
		// 			name: "Julie Eagleton",
		// 			asCharacter: "Stockbroker (uncredited)",
		// 		},
		// 		{
		// 			id: "nm4131076",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMTgyNzIwMjc3OV5BMl5BanBnXkFtZTgwMDAwNjE0OTE@._V1_Ratio0.7273_AL_.jpg",
		// 			name: "Seve Esposito",
		// 			asCharacter: "Italian Gambler (uncredited)",
		// 		},
		// 		{
		// 			id: "nm4414994",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMTZiMmRjMjMtMzFlOC00NDY5LThiMDUtMGFhMjNlN2U0YmRhXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio0.7273_AL_.jpg",
		// 			name: "Marcus Everett",
		// 			asCharacter: "Stock Broker (uncredited)",
		// 		},
		// 		{
		// 			id: "nm3917836",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			name: "Zachary Christopher Fay",
		// 			asCharacter: "Extra (uncredited)",
		// 		},
		// 		{
		// 			id: "nm3549892",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BZTJmNGM5ZWUtYjJlNS00ODFkLWJhZGYtOGY0MTZkOTY4N2E4XkEyXkFqcGdeQXVyOTc5MzkyNg@@._V1_Ratio0.7273_AL_.jpg",
		// 			name: "Daniel Girondeaud",
		// 			asCharacter: "Bridge Sub Con (uncredited)",
		// 		},
		// 		{
		// 			id: "nm3653808",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BNTA1OGI0N2YtZTc2My00ZTcxLWJiYjctMGVhYWUwZDBiY2YwXkEyXkFqcGdeQXVyMjI5Nzg2MDM@._V1_Ratio0.7273_AL_.jpg",
		// 			name: "Natalie Goldwin",
		// 			asCharacter: "LAX Passenger (uncredited)",
		// 		},
		// 		{
		// 			id: "nm1368534",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMjE3Mzc4NTM5NF5BMl5BanBnXkFtZTcwMzc0NTgyMQ@@._V1_Ratio1.1364_AL_.jpg",
		// 			name: "Allan Hale",
		// 			asCharacter: "Immigration Officer (uncredited)",
		// 		},
		// 		{
		// 			id: "nm1660476",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			name: "Andrew Hoagland",
		// 			asCharacter: "Pedestrian (uncredited)",
		// 		},
		// 		{
		// 			id: "nm7703817",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			name: "Guy Iannacone",
		// 			asCharacter: "Airport Patron (uncredited)",
		// 		},
		// 		{
		// 			id: "nm3638581",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			name: "Marguerite Gioia Insolia",
		// 			asCharacter: "Reporter (uncredited)",
		// 		},
		// 		{
		// 			id: "nm4346594",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			name: "Charles Jarrell",
		// 			asCharacter: "Hotel Guest (uncredited)",
		// 		},
		// 		{
		// 			id: "nm3780879",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			name: "Seong-hwan Jo",
		// 			asCharacter: "Japanese Landing Crew (uncredited)",
		// 		},
		// 		{
		// 			id: "nm1115889",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BZmU1Y2M4OWEtMGVkOC00ZWI4LTk1NzEtYzFjNDRkMDlhOGRlXkEyXkFqcGdeQXVyMTA1OTU3MjM@._V1_Ratio0.7273_AL_.jpg",
		// 			name: "Alonzo F. Jones",
		// 			asCharacter: "Mombasan Casino Staff (uncredited)",
		// 		},
		// 		{
		// 			id: "nm1783154",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMjA3NzExOTY3OF5BMl5BanBnXkFtZTcwMjQ1NTAzMQ@@._V1_Ratio0.7727_AL_.jpg",
		// 			name: "Mobin Khan",
		// 			asCharacter: "Mombasa Casino Cashier (uncredited)",
		// 		},
		// 		{
		// 			id: "nm1402638",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			name: "Shunsaku Kudô",
		// 			asCharacter: "Saito's Bodyguard Officer (uncredited)",
		// 		},
		// 		{
		// 			id: "nm3254124",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMzdlMTlmYjYtZWM5OS00NDVkLTlmZmItMDc0MzZiNjFiM2QxXkEyXkFqcGdeQXVyMjU4NDk1ODc@._V1_Ratio0.8636_AL_.jpg",
		// 			name: "Leticia LaBelle",
		// 			asCharacter: "Airport Patron (uncredited)",
		// 		},
		// 		{
		// 			id: "nm2364305",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BYzdlMmM3ODQtNGQzOC00YzRiLWJhN2MtNWQ2ZTlhMDAxOTdjXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio0.7727_AL_.jpg",
		// 			name: "John Lawson",
		// 			asCharacter: "Street Person (uncredited)",
		// 		},
		// 		{
		// 			id: "nm2545052",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			name: "Jean-Christophe Leger",
		// 			asCharacter: "French Student (uncredited)",
		// 		},
		// 		{
		// 			id: "nm7419291",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			name: "Arnold Montey",
		// 			asCharacter: "Stock Broker (uncredited)",
		// 		},
		// 		{
		// 			id: "nm4451348",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			name: "François-Marie Nivon",
		// 			asCharacter: "A Passer-By (uncredited)",
		// 		},
		// 		{
		// 			id: "nm3792623",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			name: "Scott Pretty",
		// 			asCharacter: "Pedestrian (uncredited)",
		// 		},
		// 		{
		// 			id: "nm2411840",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BOTcxYTA4MzItMjg2Ny00N2JkLTkwODItMTFjNWY3ODRmNTRlXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio0.8182_AL_.jpg",
		// 			name: "Benjamin Riley",
		// 			asCharacter: "Bridge Sub Con (uncredited)",
		// 		},
		// 		{
		// 			id: "nm0757955",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BNDkxNDAyODQ1M15BMl5BanBnXkFtZTcwMTcyNzcyMQ@@._V1_Ratio0.7273_AL_.jpg",
		// 			name: "Norman Saleet",
		// 			asCharacter: "Airport Patron (uncredited)",
		// 		},
		// 		{
		// 			id: "nm4195263",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			name: "Colin Smith",
		// 			asCharacter: "Airport Patron (uncredited)",
		// 		},
		// 		{
		// 			id: "nm3934065",
		// 			image: "https://imdb-api.com/images/original/nopicture.jpg",
		// 			name: "Affan Tareen",
		// 			asCharacter: "Denison (uncredited)",
		// 		},
		// 		{
		// 			id: "nm0900934",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BNTlhNjY3OWMtMmQzOC00YjM3LWJlOWYtYmM2MTM2MTYzNTRmXkEyXkFqcGdeQXVyMTI1MzE5OTkz._V1_Ratio1.0909_AL_.jpg",
		// 			name: "Matt Vogel",
		// 			asCharacter: "Zeke - Pedestrian (uncredited)",
		// 		},
		// 	],
		// 	fullCast: null,
		// 	genres: "Action, Adventure, Sci-Fi",
		// 	genreList: [
		// 		{
		// 			key: "Action",
		// 			value: "Action",
		// 		},
		// 		{
		// 			key: "Adventure",
		// 			value: "Adventure",
		// 		},
		// 		{
		// 			key: "Sci-Fi",
		// 			value: "Sci-Fi",
		// 		},
		// 	],
		// 	companies: "Warner Bros., Legendary Entertainment, Syncopy",
		// 	companyList: [
		// 		{
		// 			id: "co0002663",
		// 			name: "Warner Bros.",
		// 		},
		// 		{
		// 			id: "co0159111",
		// 			name: "Legendary Entertainment",
		// 		},
		// 		{
		// 			id: "co0147954",
		// 			name: "Syncopy",
		// 		},
		// 	],
		// 	countries: "USA, UK",
		// 	countryList: [
		// 		{
		// 			key: "USA",
		// 			value: "USA",
		// 		},
		// 		{
		// 			key: "UK",
		// 			value: "UK",
		// 		},
		// 	],
		// 	languages: "English, Japanese, French",
		// 	languageList: [
		// 		{
		// 			key: "English",
		// 			value: "English",
		// 		},
		// 		{
		// 			key: "Japanese",
		// 			value: "Japanese",
		// 		},
		// 		{
		// 			key: "French",
		// 			value: "French",
		// 		},
		// 	],
		// 	contentRating: "PG-13",
		// 	imDbRating: "8.8",
		// 	imDbRatingVotes: "2357363",
		// 	metacriticRating: "74",
		// 	ratings: {
		// 		imDbId: "tt1375666",
		// 		title: "Inception",
		// 		fullTitle: "Inception (2010)",
		// 		type: "Movie",
		// 		year: "2010",
		// 		imDb: "8.8",
		// 		metacritic: "74",
		// 		theMovieDb: "8.4",
		// 		rottenTomatoes: "87",
		// 		filmAffinity: "8.0",
		// 		errorMessage: "",
		// 	},
		// 	wikipedia: null,
		// 	posters: null,
		// 	images: null,
		// 	trailer: {
		// 		imDbId: "tt1375666",
		// 		title: "Inception",
		// 		fullTitle: "Inception (2010)",
		// 		type: "Movie",
		// 		year: "2010",
		// 		videoId: "vi2959588889",
		// 		videoTitle: "10th Anniversary Dream Trailer",
		// 		videoDescription:
		// 			"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
		// 		thumbnailUrl:
		// 			"https://m.media-amazon.com/images/M/MV5BMTQ1ZmIzOTAtNDcwZi00NDVkLWE4NWItYWNhZGY1MmVlZGU0XkEyXkFqcGdeQWRvb2xpbmhk._V1_.jpg",
		// 		uploadDate: "08/02/2020 21:45:05",
		// 		link: "https://www.imdb.com/video/vi2959588889",
		// 		linkEmbed: "https://www.imdb.com/video/imdb/vi2959588889/imdb/embed",
		// 		errorMessage: "",
		// 	},
		// 	boxOffice: {
		// 		budget: "$160,000,000 (estimated)",
		// 		openingWeekendUSA: "$62,785,337",
		// 		grossUSA: "$292,587,330",
		// 		cumulativeWorldwideGross: "$836,848,102",
		// 	},
		// 	tagline: null,
		// 	keywords:
		// 		"dream,ambiguous ending,subconscious,mindbender,surprise ending",
		// 	keywordList: [
		// 		"dream",
		// 		"ambiguous ending",
		// 		"subconscious",
		// 		"mindbender",
		// 		"surprise ending",
		// 	],
		// 	similars: [
		// 		{
		// 			id: "tt0816692",
		// 			title: "Interstellar",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6763_AL_.jpg",
		// 			imDbRating: "8.6",
		// 		},
		// 		{
		// 			id: "tt0468569",
		// 			title: "The Dark Knight",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_Ratio0.6763_AL_.jpg",
		// 			imDbRating: "9.0",
		// 		},
		// 		{
		// 			id: "tt0137523",
		// 			title: "Fight Club",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_Ratio0.6763_AL_.jpg",
		// 			imDbRating: "8.8",
		// 		},
		// 		{
		// 			id: "tt0109830",
		// 			title: "Forrest Gump",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.6957_AL_.jpg",
		// 			imDbRating: "8.8",
		// 		},
		// 		{
		// 			id: "tt0993846",
		// 			title: "The Wolf of Wall Street",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_Ratio0.6763_AL_.jpg",
		// 			imDbRating: "8.2",
		// 		},
		// 		{
		// 			id: "tt7286456",
		// 			title: "Joker",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6763_AL_.jpg",
		// 			imDbRating: "8.4",
		// 		},
		// 		{
		// 			id: "tt0110912",
		// 			title: "Pulp Fiction",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6860_AL_.jpg",
		// 			imDbRating: "8.9",
		// 		},
		// 		{
		// 			id: "tt0114369",
		// 			title: "Se7en",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6763_AL_.jpg",
		// 			imDbRating: "8.6",
		// 		},
		// 		{
		// 			id: "tt0111161",
		// 			title: "The Shawshank Redemption",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6763_AL_.jpg",
		// 			imDbRating: "9.3",
		// 		},
		// 		{
		// 			id: "tt1130884",
		// 			title: "Shutter Island",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6763_AL_.jpg",
		// 			imDbRating: "8.2",
		// 		},
		// 		{
		// 			id: "tt0133093",
		// 			title: "The Matrix",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6763_AL_.jpg",
		// 			imDbRating: "8.7",
		// 		},
		// 		{
		// 			id: "tt1853728",
		// 			title: "Django Unchained",
		// 			image:
		// 				"https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_Ratio0.6763_AL_.jpg",
		// 			imDbRating: "8.4",
		// 		},
		// 	],
		// 	tvSeriesInfo: null,
		// 	tvEpisodeInfo: null,
		// 	errorMessage: "",
		// };
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
