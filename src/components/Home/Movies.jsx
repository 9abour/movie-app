import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import { Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../rtk/slices/moviesSlice";
import { useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

const Movies = () => {
	let movies = useSelector(state => state.movies.defaultMovies);
	let isLoading = useSelector(state => state.movies.isLoading);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCategories("https://imdb-api.com/en/API/InTheaters"));
	}, []);

	const [pageNumber, setNewPage] = React.useState(1);
	const moviesPerPage = 10;

	const moviesEl = document.getElementById("movies");
	let moviesHeight;
	if (moviesEl !== null) {
		moviesHeight = moviesEl.offsetTop;
	}

	const handleChangePage = (event, newPage) => {
		setNewPage(newPage);
		window.scrollTo(400, moviesHeight - 70);
	};

	let pages = [];
	if (movies.length !== 0) {
		for (let i = 1; i <= Math.ceil(movies.items.length / moviesPerPage); i++) {
			pages.push(i);
		}
	}

	const indexOfLastMovie = pageNumber * moviesPerPage;
	const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
	let currentMovies;
	if (movies.length !== 0) {
		currentMovies = movies.items.slice(indexOfFirstMovie, indexOfLastMovie);
	}

	console.log(isLoading);

	return (
		<>
			<Box sx={{ flexGrow: 1 }} component="div" id="movies">
				<Grid
					container
					spacing={{ xs: 1 }}
					columns={{ xs: 2, sm: 6, md: 6, lg: 12 }}
				>
					{movies.length !== 0 &&
						currentMovies.map(item => {
							return (
								<Grid xs={12} sm={3} md={2} lg={2.4} key={item.id}>
									<Card
										className="card"
										sx={{
											width: "100%",
											height: "100%",
											boxShadow: "none",
											position: "relative",
											cursor: "pointer",
											border: "3px solid #18124a",
											margin: "0 auto",
										}}
									>
										<Box className="overlay">
											<Box
												component="div"
												sx={{
													width: "100%",
													height: "100%",
													position: "absolute",
													background: "#0b07285c",
												}}
											></Box>
										</Box>
										<Link to={`movie_details/${item.id}`}>
											<Box
												className="watch-icon"
												sx={{
													position: "absolute",
													top: "50%",
													left: "50%",
													transform: "translate(-50%, -50%)",
													zIndex: 1,
												}}
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="50"
													height="50"
													viewBox="0 0 24 24"
												>
													<path
														fill="#784dfd"
														d="m10.8 15.9l4.67-3.5c.27-.2.27-.6 0-.8L10.8 8.1a.5.5 0 0 0-.8.4v7c0 .41.47.65.8.4zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"
													/>
												</svg>
											</Box>
										</Link>
										{/* Rate & Year */}
										<Box
											sx={{
												display: "flex",
												gap: 1,
												position: "absolute",
												top: ".5rem",
												left: ".5rem",
												zIndex: "1",
											}}
										>
											<Typography
												variant="span"
												className="year"
												sx={{
													width: "3rem",
												}}
											>
												{item.year || item.description}
											</Typography>
											<Typography
												variant="span"
												className="rate"
												sx={{
													backgroundColor:
														item.imDbRating > 7 ? "#F2CD5C" : "#d9d9d9",
												}}
											>
												{item.imDbRating}
											</Typography>
										</Box>
										<Box
											component="div"
											sx={{
												position: "absolute",
												top: "0",
												width: "100%",
												height: "100%",
												background:
													"linear-gradient(180deg, rgba(2,0,36,0) 10%, rgba(3,2,16,3) 100%)",
												zIndex: 0,
											}}
										/>
										<Box
											sx={{
												position: "absolute",
												width: "100%",
												left: "50%",
												transform: "translate(-50%)",
												bottom: ".5rem",
											}}
										>
											<Box
												component="div"
												sx={{
													display: "flex",
													justifyContent: "center",
													gap: ".1rem",
												}}
											>
												<Typography
													key={item.key}
													variant="span"
													className="genre"
												>
													genre_2
												</Typography>
												<Typography
													key={item.key}
													variant="span"
													className="genre"
												>
													genre_3
												</Typography>
												<Typography
													key={item.key}
													variant="span"
													className="genre"
												>
													genre_1
												</Typography>
											</Box>
											<Typography
												sx={{
													width: "100%",
													bottom: ".5rem",
													textAlign: "center",
													lineHeight: 1.2,
													textOverflow: "ellipsis",
													lineClamp: "2",
													WebkitLineClamp: "2",
													display: "-webkit-box",
													WebkitBoxOrient: "vertical",
													overflow: "hidden",
													paddingX: "1rem",
													color: "#d9d9d9",
													zIndex: 1,
												}}
												variant="h6"
											>
												{item.title}
											</Typography>
										</Box>
										<CardMedia
											sx={{
												zIndex: 0,
											}}
											component="img"
											image={`${
												item.image.split("V1")[0]
											}V1_UX384_CR0,1,384,528_AL_.jpg`}
										/>
									</Card>
								</Grid>
							);
						})}
				</Grid>
			</Box>
			<Stack
				spacing={2}
				sx={{ border: "2px solid #18124a", marginTop: ".5rem" }}
			>
				<Pagination
					sx={{
						display: "flex",
						justifyContent: "center",
						width: "100%",
						backgroundColor: "#301e67",
						padding: "0.4rem",
					}}
					count={pages.length}
					variant="outlined"
					shape="rounded"
					page={pageNumber}
					onChange={handleChangePage}
				/>
			</Stack>
		</>
	);
};
export default Movies;
