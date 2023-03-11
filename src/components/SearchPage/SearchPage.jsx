import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { LinearProgress, Typography } from "@mui/material";
import { Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch } from "../../rtk/slices/SearchSlice";

const SearchPage = () => {
	const dispatch = useDispatch();
	const { searchName } = useParams();
	const state = useSelector(state => state.search);
	const isLoading = useSelector(state => state.search.isLoading);
	console.log(isLoading);

	React.useEffect(() => {
		dispatch(fetchSearch(searchName));
	}, []);
	return (
		<>
			<Box component={"div"} sx={{ minHeight: "100vh" }}>
				{isLoading ? (
					<Box
						component="div"
						sx={{
							position: "absolute",
							width: "100%",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							zIndex: 2,
						}}
					>
						<Box sx={{ width: "100%" }}>
							<LinearProgress />
						</Box>
					</Box>
				) : (
					state.results.length !== 0 && (
						<Box component="div" className="container">
							<Box sx={{ flexGrow: 1, marginTop: "10rem" }}>
								<Box
									component={"div"}
									sx={{
										display: "flex",
										justifyContent: "center",
										marginBottom: "1.5rem",
									}}
								>
									<Typography
										variant="h4"
										sx={{
											width: "fit-content",
											height: "auto",
											padding: "0 .5rem !important",
											cursor: "auto",
											color: "#ffffff",
										}}
									>
										Searched For:
									</Typography>
									<Typography
										variant="h4"
										className="main-btn btn-primary"
										sx={{
											width: "fit-content",
											height: "auto",
											padding: "0 .5rem !important",
											cursor: "auto",
										}}
									>
										{state.expression}
									</Typography>
								</Box>
								<Grid
									container
									spacing={{ xs: 1 }}
									columns={{ xs: 2, sm: 6, md: 6, lg: 12 }}
								>
									{state.results.map(item => {
										// console.log(item.image);
										return (
											<Grid xs={12} sm={3} md={2} lg={2.4}>
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
													<Link to={`/movie_details/${item.id}`}>
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
						</Box>
					)
				)}
			</Box>
		</>
	);
};

export default SearchPage;
