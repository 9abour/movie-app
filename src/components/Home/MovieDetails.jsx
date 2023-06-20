import { Card, CardMedia, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getMovieDetails } from "../../rtk/slices/movieDetailsSlice";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";

const MovieDetails = () => {
	const { movieId } = useParams();
	const dispatch = useDispatch();
	const movieDetails = useSelector(state => state.movieDetails.movies);
	const isLoading = useSelector(state => state.movieDetails.isLoading);
	useEffect(() => {
		dispatch(getMovieDetails(movieId));
	}, []);

	const handleUpdateDetails = id => {
		dispatch(getMovieDetails(id));
	};

	const {
		year,
		actorList,
		countryList,
		fullTitle,
		genreList,
		image,
		languageList,
		plot,
		imDbRating,
		trailer,
		similars,
		runtimeStr,
	} = movieDetails;

	const [trailerOpen, setTrailerOpen] = useState(false);

	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 1200px)",
	});
	const isIpad = useMediaQuery({
		query: "(min-width: 991px)",
	});
	const isPhone = useMediaQuery({
		query: "(min-width: 768px)",
	});
	const isSmallPhone = useMediaQuery({
		query: "(min-width: 576px)",
	});

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: isDesktopOrLaptop ? 5 : isIpad ? 4 : isPhone ? 3 : 2,
		slidesToScroll: 2,
		arrows: true,
	};

	return (
		<div className="container">
			<Box
				component={"div"}
				className="movies-details"
				sx={{
					position: "relative",
					flexGrow: 1,
					marginTop: "3.4375rem",
					backgroundColor: "rgba(48, 30, 103, 0.41)",
					padding: "2rem 1rem",
					minHeight: "100vh",
				}}
			>
				{isLoading ? (
					<Box
						component="div"
						sx={{
							position: "absolute",
							zIndex: 2,
							width: "100%",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
						}}
					>
						<Box sx={{ width: "100%" }}>
							<LinearProgress />
						</Box>
					</Box>
				) : (
					movieDetails.length !== 0 && (
						<>
							<Grid container columnGap={0.5} className="movie-details">
								<Grid item xs={12} md={8}>
									<Box>
										<Box component="div" sx={{ marginTop: "1rem" }}>
											{/* Title */}
											<Box component="div">
												<Typography
													variant="h3"
													sx={{
														fontSize: "2rem",
														fontWeight: 600,
														color: "#ffffff",
													}}
												>
													{fullTitle}
												</Typography>
											</Box>
											{/* Description */}
											<Box
												component="div"
												sx={{
													width: "100%",
													color: "#bbbbbb",
													marginY: "1rem",
													padding: ".5rem",
													borderRadius: "2px",
													backgroundColor: "#dff6ff0e",
												}}
											>
												<Typography variant="p">{plot}</Typography>
											</Box>
											{/* Buttons */}
											<Box
												component="div"
												className="btns"
												sx={{
													display: "flex",
													gap: ".5rem",
													marginBottom: "1.5rem",
												}}
											>
												<button className="main-btn btn-danger">
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
													</svg>
													<Typography variant="span">watch now</Typography>
												</button>
												<button className="main-btn btn-success">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="30"
														height="30"
														viewBox="0 0 24 24"
													>
														<path
															fill="#ffffff"
															d="M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71zM5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1z"
														/>
													</svg>
													<Typography variant="span">Download</Typography>
												</button>
											</Box>
											{/* Info */}
											<Box component="div" className="info">
												<Box
													component="div"
													sx={{ display: "flex", gap: ".5rem" }}
												>
													<Typography
														variant="span"
														className="main-btn btn-info"
														sx={{ cursor: "auto" }}
													>
														year
													</Typography>
													<Typography
														variant="span"
														sx={{
															cursor: "auto",
															color: "#bbbbbb",
															padding: ".1rem .8rem",
															borderRadius: "2px",
															backgroundColor: "#dff6ff0e",
															textAlign: "center",
															lineHeight: "2",
														}}
													>
														{year}
													</Typography>
												</Box>
												<Box
													component="div"
													sx={{ display: "flex", gap: ".5rem" }}
												>
													<Typography
														variant="span"
														className="main-btn btn-info"
														sx={{ cursor: "auto" }}
													>
														Languages
													</Typography>
													{languageList.map(item => {
														return (
															<Typography
																key={item.key}
																variant="span"
																sx={{
																	cursor: "auto",
																	color: "#bbbbbb",
																	padding: ".1rem .8rem",
																	borderRadius: "2px",
																	backgroundColor: "#dff6ff0e",
																	textAlign: "center",
																	lineHeight: "2",
																}}
															>
																{item.value}
															</Typography>
														);
													})}
												</Box>
												<Box
													component="div"
													sx={{ display: "flex", gap: ".5rem" }}
												>
													<Typography
														variant="span"
														className="main-btn btn-info"
														sx={{ cursor: "auto" }}
													>
														Countries
													</Typography>
													{countryList.map(item => {
														return (
															<Typography
																key={item.key}
																variant="span"
																sx={{
																	cursor: "auto",
																	color: "#bbbbbb",
																	padding: ".1rem .8rem",
																	borderRadius: "2px",
																	backgroundColor: "#dff6ff0e",
																	textAlign: "center",
																	lineHeight: "2",
																}}
															>
																{item.value}
															</Typography>
														);
													})}
												</Box>
												<Box
													component="div"
													sx={{ display: "flex", gap: ".5rem" }}
												>
													<Typography
														variant="span"
														className="main-btn btn-info"
														sx={{ cursor: "auto" }}
													>
														Genres
													</Typography>
													{genreList.map(item => {
														return (
															<Typography
																key={item.key}
																variant="span"
																sx={{
																	cursor: "auto",
																	color: "#bbbbbb",
																	padding: ".1rem .8rem",
																	borderRadius: "2px",
																	backgroundColor: "#dff6ff0e",
																	textAlign: "center",
																	lineHeight: "2",
																}}
															>
																{item.value}
															</Typography>
														);
													})}
													<Typography
														variant="span"
														sx={{
															cursor: "auto",
															color: "#bbbbbb",
															padding: ".1rem .8rem",
															borderRadius: "2px",
															backgroundColor: "#dff6ff0e",
															textAlign: "center",
															lineHeight: "2",
														}}
													>
														fantasy
													</Typography>
												</Box>
											</Box>
											{/* Actors */}
											<AvatarGroup
												total={actorList.length}
												max={7}
												className="actors"
											>
												{actorList.map(item => {
													return (
														<Box key={item.id} className="actor">
															<Avatar
																alt={item.name}
																src={`https://ik.imagekit.io/demo/tr:w-100,h-100/${item.image}`}
															/>
															<Typography variant="span" className="name">
																{item.name}
															</Typography>
														</Box>
													);
												})}
											</AvatarGroup>
										</Box>
									</Box>
								</Grid>
								<Grid item xs={12} md={3} sx={{ position: "relative" }}>
									<Box
										component="span"
										sx={{
											position: "absolute",
											width: "35px",
											height: "20px",
											top: "1rem",
											left: "1rem",
											backgroundColor: imDbRating > 7 ? "#F2CD5C" : "#d9d9d9",
											textAlign: "center",
											borderRadius: "2px",
											fontWeight: 600,
											color: "#301e67",
										}}
									>
										{imDbRating}
									</Box>
									<Box
										component="span"
										sx={{
											position: "absolute",
											width: "8rem",
											height: "20px",
											top: "1rem",
											left: "3.5rem",
											backgroundColor: "#eeeeee",
											textAlign: "center",
											borderRadius: "2px",
											fontWeight: 600,
											color: "#301e67",
										}}
									>
										{runtimeStr}
									</Box>
									<CardMedia
										sx={{
											maxWidth: "20rem",
											border: "3px solid #18124a",
											margin: "0 auto",
										}}
										component="img"
										image={image}
									/>
									<Box
										sx={{
											display: "flex",
											justifyContent: "center",
											padding: ".5rem",
										}}
									>
										<button
											className="main-btn btn-primary"
											onClick={() => {
												setTrailerOpen(true);
											}}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="25"
												height="25"
												viewBox="0 0 24 24"
											>
												<path
													fill="#ffffff"
													d="m4.26 18.32l1.43-1.43A7.868 7.868 0 0 1 4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32zM7.1 5.69A7.941 7.941 0 0 1 11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69zM2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9L4.26 5.68A9.949 9.949 0 0 0 2.05 11zm11-8.95v2.02C16.97 4.59 20 7.95 20 12s-3.03 7.41-6.95 7.93v2.02C18.08 21.42 22 17.16 22 12c0-5.16-3.92-9.42-8.95-9.95zM16 12l-2.95-2.21L10 7.5v9l3.05-2.29zM5.68 19.74A9.981 9.981 0 0 0 11 21.95v-2.02a7.941 7.941 0 0 1-3.9-1.62l-1.42 1.43z"
												/>
											</svg>
											<Typography sx={{ marginLeft: ".2rem" }} variant="span">
												Trailer
											</Typography>
										</button>
									</Box>
								</Grid>
							</Grid>
							<Box component="div" sx={{ marginTop: "3rem" }}>
								<Typography
									variant="span"
									className="main-btn btn-primary"
									sx={{
										cursor: "auto",
										marginLeft: "3px",
										marginBottom: "1rem",
									}}
								>
									Similar
								</Typography>
								<Slider {...settings}>
									{similars.map(item => {
										return (
											<Card
												key={item.id}
												className="card"
												sx={{
													maxWidth: 300,
													maxHeight: 250,
													boxShadow: "none",
													position: "relative",
													cursor: "pointer",
													border: "3px solid #18124a",
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
												<Link
													to={`/movie_details/${item.id}`}
													onClick={() => {
														handleUpdateDetails(item.id);
													}}
												>
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
												{/* Rate*/}
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
															display: "grid",
															gridTemplateColumns: "repeat(2, 80px)",
															justifyContent: "center",
														}}
													>
														<Typography variant="span" className="genre">
															action
														</Typography>
														<Typography variant="span" className="genre">
															Fantasy
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
												<img
													sx={{ width: "100%", zIndex: 0 }}
													src={`https://ik.imagekit.io/demo/tr:w-300,h-400/${item.image}`}
												/>
											</Card>
										);
									})}
								</Slider>
							</Box>
							{trailerOpen && (
								<Box component="div" className="trailer-container">
									<Box
										component="div"
										className="trailer-video"
										sx={{
											position: "absolute",
											top: "100%",
											left: "50%",
											transform: "translate(-50%, -50%)",
											backgroundColor: "#784dfd",
											borderRadius: "6px",
											padding: ".8rem",
											zIndex: 2,
										}}
									>
										<iframe className="video" src={trailer.linkEmbed}></iframe>
										<Box
											component="button"
											className="btn-danger"
											sx={{
												position: "absolute",
												top: "-2.5rem",
												left: "50%",
												transform: "translateX(-50%)",
												backgroundColor: "#784dfd",
												borderRadius: "2px",
												cursor: "pointer",
											}}
											onClick={() => {
												setTrailerOpen(false);
											}}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="32"
												height="32"
												viewBox="0 0 512 512"
											>
												<path
													fill="#ffffff"
													d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z"
												/>
											</svg>
										</Box>
									</Box>
									<Box
										component="div"
										sx={{
											position: "absolute",
											width: "100%",
											height: "100%",
											top: "50%",
											left: "50%",
											transform: "translate(-50%, -50%)",
											backgroundColor: "#0b0728a3",
											zIndex: 1,
										}}
									></Box>
								</Box>
							)}
						</>
					)
				)}
			</Box>
		</div>
	);
};
export default MovieDetails;
