import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Slider from "react-slick";
import CardMedia from "@mui/material/CardMedia";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../../rtk/slices/TopMoviesSlice";
import { Link } from "react-router-dom";

const TopMovies = () => {
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 1200px)",
	});
	const isIpad = useMediaQuery({
		query: "(min-width: 991px)",
	});
	const isPhone = useMediaQuery({
		query: "(min-width: 768px)",
	});

	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: isDesktopOrLaptop ? 5 : isIpad ? 4 : isPhone ? 3 : 2,
		slidesToScroll: 2,
		arrows: true,
	};

	const dispatch = useDispatch();
	const topMovies = useSelector(state => state.topMovies);

	useEffect(() => {
		dispatch(fetchCategories("https://imdb-api.com/en/API/MostPopularMovies"));
	}, []);

	return (
		<Box component={"div"} className="top-movies">
			{topMovies.length !== 0 && (
				<Slider {...settings}>
					{topMovies.items.map(item => {
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
										{item.year}
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
										bottom: "0.3rem",
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
									sx={{ zIndex: 0 }}
									component="img"
									image={`${
										item.image.split("V1")[0]
									}V1_UX384_CR0,1,384,528_AL_.jpg`}
								/>
							</Card>
						);
					})}
				</Slider>
			)}
		</Box>
	);
};
export default TopMovies;
