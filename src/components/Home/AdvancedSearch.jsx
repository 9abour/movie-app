import * as React from "react";
import { useState } from "react";
import {
	Box,
	FormControlLabel,
	ThemeProvider,
	Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import myTheme from "../Theme/Theme";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdvancedSearch } from "../../rtk/slices/moviesSlice";
import { fetchCategories } from "../../rtk/slices/moviesSlice";
import Swal from "sweetalert2";
import CircularProgress from "@mui/material/CircularProgress";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

function getStyles(name, personName, theme) {
	return {
		fontWeight:
			personName.indexOf(name) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	};
}

const AdvancedSearch = () => {
	const dispatch = useDispatch();

	const [isSearchOpen, setIsSearchOpen] = useState(false);

	const BpIcon = styled("span")(({ theme }) => ({
		borderRadius: 3,
		width: 16,
		height: 16,
		boxShadow:
			theme.palette.mode === "dark"
				? "0 0 0 1px rgb(16 22 26 / 40%)"
				: "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
		backgroundColor: theme.palette.mode === "dark" ? "#d9d9d9" : "#d9d9d9",
		backgroundImage:
			theme.palette.mode === "dark"
				? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
				: "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
		".Mui-focusVisible &": {
			outline: "2px auto rgba(19,124,189,.6)",
			outlineOffset: 2,
		},
		"input:hover ~ &": {
			backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
		},
		"input:disabled ~ &": {
			boxShadow: "none",
			background:
				theme.palette.mode === "dark"
					? "rgba(57,75,89,.5)"
					: "rgba(206,217,224,.5)",
		},
	}));
	const BpCheckedIcon = styled(BpIcon)({
		backgroundColor: "#784dfd33",
		backgroundImage:
			"linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
		"&:before": {
			display: "block",
			width: 16,
			height: 16,
			backgroundImage:
				"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
				" fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
				"1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
			content: '""',
		},
		"input:hover ~ &": {
			backgroundColor: "#784dfd33",
		},
	});

	const titleTypes = [
		{ name: "feature", value: "feature" },
		{ name: "tv movie", value: "tv_movie" },
		{ name: "tv episode", value: "tv_episode" },
		{ name: "tv series", value: "tv_series" },
		{ name: "movie short", value: "short" },
		{ name: "tv short", value: "tv_short" },
		{ name: "podcast series", value: "podcast_series" },
		{ name: "podcast episode", value: "podcast_episode" },
	];

	const genres = [
		"action",
		"adventure",
		"animation",
		"biography",
		"comedy",
		"crime",
		"documentary",
		"drama",
		"family",
		"fantasy",
		"film_noir",
		"game_show",
		"history",
		"horror",
		"music",
		"musical",
		"mystery",
		"news",
		"reality_tv",
		"romance",
		"sci_fi",
		"sport",
		"talk_show",
		"thriller",
		"war",
		"western",
	];

	const countries = [
		{ name: "United States", value: "us" },
		{ name: "United States", value: "gb" },
		{ name: "Spain", value: "es" },
		{ name: "Mexico", value: "mx" },
		{ name: "Italy", value: "it" },
	];

	const theme = useTheme();
	const [title, setTitle] = useState("");
	const [year, setYear] = useState({ start: "", end: "" });
	const [titleType, setTitleType] = useState([]);
	const [genreValue, setGenreValue] = React.useState([]);
	const [country, setCountry] = useState("");

	const handleTitleChange = event => {
		setTitle(event.target.value);
	};

	const handleStartYearChange = event => {
		setYear({ start: event.target.value, end: year.end });
	};

	const handleEndYearChange = event => {
		setYear({ start: year.start, end: event.target.value });
	};

	const handleTitleTypeSelect = (event, value) => {
		if (event.target.checked) {
			setTitleType([...titleType, value]);
		} else {
			const newData = titleType.filter(type => type !== value);
			setTitleType([...newData]);
		}
	};

	const handleGenreChange = event => {
		const {
			target: { value },
		} = event;
		setGenreValue(value);
	};

	const handleCountryChange = event => {
		setCountry(event.target.value);
	};

	const API_KEY = "k_98sb98vr";

	const handleSubmit = e => {
		e.preventDefault();
		const startYear = year.start;
		const endYear = year.end;
		const titleResult = title.split(" ").join("").toLowerCase();
		const titleTypeResult = titleType.join(",");
		const genresResult = genreValue.join(",");
		let countries = "";
		if (country.length !== 0) {
			countries = country;
		}
		let API_URL = `https://imdb-api.com/API/AdvancedSearch/${API_KEY}?title=${titleResult}&title_type=${titleTypeResult}&release_date=${startYear}-01-01,${endYear}-01-01&genres=${genresResult}${countries}`;

		if (
			titleResult.length > 0 &&
			titleTypeResult.length > 0 &&
			genresResult.length > 0 &&
			startYear.length > 0 &&
			endYear.length > 0
		) {
			dispatch(fetchAdvancedSearch(API_URL));
		} else {
			Swal.fire({
				icon: "error",
				title: "Error...",
				text: "Check Your Search Info",
			});
		}
	};

	let isLoading = useSelector(state => state.movies.isLoading);

	return (
		<ThemeProvider theme={myTheme}>
			<Box component="div" sx={{ flexGrow: 1, marginBottom: "2rem" }}>
				<Box sx={{ flexGrow: 1 }}>
					<button
						onClick={() => {
							setIsSearchOpen(!isSearchOpen);
							if (isSearchOpen) {
								dispatch(
									fetchCategories("https://imdb-api.com/en/API/InTheaters")
								);
							}
						}}
						className="main-btn btn-info"
						style={{ width: "fit-content", margin: "0 auto" }}
					>
						{isSearchOpen ? (
							<>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="25"
									height="25"
									viewBox="0 0 24 24"
								>
									<path
										fill="#ffffff"
										d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 0 0 9.5 3C6.08 3 3.28 5.64 3.03 9h2.02C5.3 6.75 7.18 5 9.5 5C11.99 5 14 7.01 14 9.5S11.99 14 9.5 14c-.17 0-.33-.03-.5-.05v2.02c.17.02.33.03.5.03c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5z"
									/>
									<path
										fill="currentColor"
										d="M6.47 10.82L4 13.29l-2.47-2.47l-.71.71L3.29 14L.82 16.47l.71.71L4 14.71l2.47 2.47l.71-.71L4.71 14l2.47-2.47z"
									/>
								</svg>
								<Typography variant="span">Close And Clear</Typography>
							</>
						) : (
							<>
								<svg
									style={{ marginRight: ".5rem" }}
									xmlns="http://www.w3.org/2000/svg"
									width="25"
									height="25"
									viewBox="0 0 24 24"
								>
									<path
										fill="#ffffff"
										d="M4 19q-.825 0-1.412-.587Q2 17.825 2 17V5q0-.825.588-1.413Q3.175 3 4 3l2 4h3L7 3h2l2 4h3l-2-4h2l2 4h3l-2-4h3q.825 0 1.413.587Q22 4.175 22 5v4H4v8h8v2Zm10 1v-2.125l5.15-5.175l2.15 2.1l-5.175 5.2Zm8.025-5.9L19.9 11.975l.7-.7q.3-.3.725-.3t.7.3l.7.725q.275.3.275.712q0 .413-.275.688Z"
									/>
								</svg>
								<Typography variant="span">Open Advanced Search</Typography>
							</>
						)}
					</button>
				</Box>
				{isSearchOpen && (
					<Box component="form">
						<Box component="div" sx={{ display: "flex", gap: ".5rem" }}>
							{/* Title */}
							<Box
								sx={{
									width: "calc(70% - .5rem)",
								}}
							>
								<Typography component="h6" sx={{ color: "#784dfd" }}>
									Title
								</Typography>
								<TextField
									sx={{
										width: "100%",
										backgroundColor: "#301e67a7",
									}}
									label="e.g. The Godfather (Required)"
									variant="outlined"
									color="clrPrimaryThird"
									onChange={handleTitleChange}
								/>
							</Box>
							{/* Year */}
							<Box
								sx={{
									width: "calc(30% - 1.5rem)",
								}}
							>
								<Typography component="h6" sx={{ color: "#784dfd" }}>
									Year
								</Typography>
								<Box
									component="div"
									sx={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										gap: ".3rem",
									}}
								>
									{/* Start */}
									<TextField
										onChange={handleStartYearChange}
										sx={{
											width: "100%",
											backgroundColor: "#301e67a7",
										}}
										label="2010 (Required)"
										variant="outlined"
										color="clrPrimaryThird"
										type="number"
										InputProps={{ inputProps: { min: "4", max: "4" } }}
									/>
									<Typography component="h6" sx={{ color: "#784dfd" }}>
										to
									</Typography>
									{/* End */}
									<TextField
										onChange={handleEndYearChange}
										sx={{
											width: "100%",
											backgroundColor: "#301e67a7",
										}}
										label="2023 (Required)"
										variant="outlined"
										color="clrPrimaryThird"
										type="number"
									/>
								</Box>
							</Box>
						</Box>
						<Typography
							component="h6"
							sx={{ margin: "1rem 0 0em 0", color: "#784dfd" }}
						>
							Title Type (Required)
						</Typography>
						{/* Title Type */}
						<Box
							component="div"
							sx={{
								display: "grid",
								justifyContent: "start",
								gridTemplateColumns: "repeat(4, 1fr)",
							}}
							className="title-type"
						>
							{titleTypes.map(item => {
								return (
									<FormControlLabel
										key={item.value}
										label={item.name}
										control={
											<Checkbox
												sx={{
													"&:hover": { bgcolor: "transparent" },
												}}
												disableRipple
												color="default"
												checkedIcon={<BpCheckedIcon />}
												icon={<BpIcon />}
												inputProps={{ "aria-label": "Checkbox demo" }}
												onChange={() => {
													handleTitleTypeSelect(event, item.value);
												}}
											/>
										}
									/>
								);
							})}
						</Box>
						<Box component="div" sx={{ display: "flex", gap: "1rem" }}>
							{/* Genres */}
							<Box component="div" sx={{ width: "100%" }}>
								<Typography
									component="h6"
									sx={{ margin: "1rem 0 0em 0", color: "#784dfd" }}
								>
									Genres (Required)
								</Typography>
								<Select
									labelId="demo-multiple-chip-label"
									id="demo-multiple-chip"
									multiple
									value={genreValue}
									onChange={handleGenreChange}
									input={
										<OutlinedInput id="select-multiple-chip" label="Chip" />
									}
									renderValue={selected => (
										<Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
											{selected.map(value => (
												<Chip key={value} label={value} />
											))}
										</Box>
									)}
									MenuProps={MenuProps}
								>
									{genres.map(genre => (
										<MenuItem
											key={genre}
											value={genre}
											style={getStyles(genre, genreValue, theme)}
										>
											{genre}
										</MenuItem>
									))}
								</Select>
							</Box>
							{/* Countries */}
							<Box component="div" sx={{ width: "100%" }}>
								<Typography
									component="h6"
									sx={{ margin: "1rem 0 0em 0", color: "#784dfd" }}
								>
									Countries (Optional)
								</Typography>
								<Select
									labelId="demo-simple-select-autowidth-label"
									id="demo-simple-select-autowidth"
									value={country}
									onChange={handleCountryChange}
									autoWidth
									label="Age"
								>
									<MenuItem value="">
										<em>None</em>
									</MenuItem>
									{countries.map(item => {
										return (
											<MenuItem key={item.value} value={item.value}>
												{item.name}
											</MenuItem>
										);
									})}
								</Select>
							</Box>
						</Box>
						<button
							className="main-btn btn-info"
							style={{ width: "fit-content", margin: "1rem auto" }}
							onClick={e => {
								handleSubmit(e);
							}}
						>
							Search{" "}
							{isLoading && (
								<CircularProgress
									color="inherit"
									size={20}
									sx={{ marginLeft: ".5rem" }}
								/>
							)}
						</button>
					</Box>
				)}
			</Box>
		</ThemeProvider>
	);
};
export default AdvancedSearch;
