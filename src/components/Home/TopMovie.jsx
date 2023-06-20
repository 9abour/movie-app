import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import { ThemeProvider } from "@mui/material";
import topMovieImage from "../../../public/avatar-2-the-way-of-water.jpg";
import myTheme from "../Theme/Theme";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTopMovie } from "../../rtk/slices/TopMovieSlice";

const TopMovie = () => {
	const topMovie = useSelector(state => state.topMovie);
	const { id, title, imDbRating, year, plot } = topMovie;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getTopMovie());
	}, []);

	return (
		<ThemeProvider theme={myTheme}>
			{topMovie.length !== 0 && (
				<Paper
					sx={{
						position: "relative",
						width: "100%",
						height: "35rem",
						marginTop: "55px",
						borderRadius: "0",
						boxShadow: "none",
					}}
				>
					<Box
						className="links"
						component="div"
						sx={{
							position: "absolute",
							top: "1.5rem",
							left: "1.5rem",
							zIndex: 1,
						}}
					>
						<Link to="/">
							<Typography variant="span" className="link active" href="#">
								Home
							</Typography>
						</Link>
						<Link to="/">
							<Typography className="link" href="#">
								Movies
							</Typography>
						</Link>
						<Link to="/">
							<Typography className="link" href="#">
								Top
							</Typography>
						</Link>
						<Link to="/">
							<Typography className="link" href="#">
								Popular
							</Typography>
						</Link>
						<Link to="/">
							<Typography className="link" href="#">
								Tvs
							</Typography>
						</Link>
					</Box>
					{/* Info */}
					<Box
						component="div"
						sx={{
							position: "absolute",
							bottom: 0,
							padding: "1.5rem",
							color: "#d9d9d9",
							zIndex: 1,
						}}
					>
						{/* Title */}
						<Box component="div">
							<Typography variant="h3">{title}</Typography>
						</Box>
						{/* About */}
						<Box
							component="div"
							sx={{
								display: "flex",
								alignItems: "center",
								gap: ".2rem",
								marginTop: ".5rem",
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="25"
								height="25"
								viewBox="0 0 24 24"
							>
								<path
									fill="#ECB365"
									d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27z"
								/>
							</svg>
							<Typography variant="span" className="rate">
								{imDbRating}
							</Typography>
							<Typography variant="p">- {year}</Typography>
						</Box>
						{/* Description */}
						<Box
							component="div"
							sx={{
								width: "100%",
								color: "#bbbbbb",
								marginY: "1rem",
							}}
						>
							<Typography variant="p">{plot}</Typography>
						</Box>
						{/* Buttons */}
						<Box component="div" sx={{ display: "flex", gap: ".5rem" }}>
							<Link to={`movie_details/${id}`}>
								<button className="main-btn btn-primary">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32"
										height="32"
										viewBox="0 0 24 24"
									>
										<path
											fill="#ffffff"
											d="M9.525 18.025q-.5.325-1.013.037Q8 17.775 8 17.175V6.825q0-.6.512-.888q.513-.287 1.013.038l8.15 5.175q.45.3.45.85t-.45.85Z"
										/>
									</svg>{" "}
									play now
								</button>
							</Link>
							<Link to={`movie_details/${id}`}>
								<button className="main-btn btn-secondary">trailer</button>
							</Link>
						</Box>
					</Box>
					<Box
						component="div"
						sx={{
							position: "absolute",
							top: "0",
							width: "100%",
							height: "100%",
							background: `linear-gradient(180deg, rgba(2,0,36,0) 20%, rgba(11,7,40,3) 100%)`,
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
							zIndex: 0,
						}}
					></Box>
					<img
						src={topMovieImage}
						style={{ width: "100%", height: "560px", objectFit: "cover" }}
					/>
				</Paper>
			)}
		</ThemeProvider>
	);
};
export default TopMovie;
