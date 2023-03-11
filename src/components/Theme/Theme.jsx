import { createTheme } from "@mui/material";

const Colors = {
	// ### Primary
	clrPrimaryFirst: "#0b0728",
	clrPrimarySecond: "#301e67",
	clrPrimaryThird: "#784dfd",

	// ### Grey
	clrGrey_1: "#333333",
	clrGrey_2: "#888888",
	clrGrey_3: "#bbbbbb",
	clrGrey_4: "#eeeeee",
	clrGrey_5: "#d9d9d9",
	clrGrey_6: "#dff6ff",

	// ###W&B
	clrBlack: "#000000",
	clrWhite: "#ffffff",
};

const myTheme = createTheme({
	palette: {
		clrPrimaryFirst: {
			main: Colors.clrPrimaryFirst,
		},
		clrPrimarySecond: {
			main: Colors.clrPrimarySecond,
		},
		clrPrimaryThird: {
			main: Colors.clrPrimaryThird,
		},
		clrGrey_1: {
			main: Colors.clrGrey_1,
		},
		clrGrey_2: {
			main: Colors.clrGrey_2,
		},
		clrGrey_3: {
			main: Colors.clrGrey_3,
		},
		clrGrey_4: {
			main: Colors.clrGrey_4,
		},
		clrGrey_5: {
			main: Colors.clrGrey_5,
		},
		clrGrey_6: {
			main: Colors.clrGrey_6,
		},
		clrBlack: {
			main: Colors.clrBlack,
		},
		clrWhite: {
			main: Colors.clrWhite,
		},
	},
	breakpoints: {
		values: {
			mobile: 0,
			tablet: 640,
			laptop: 1024,
			desktop: 1200,
		},
	},
});

export default myTheme;
