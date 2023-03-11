import * as React from "react";
import Box from "@mui/material/Box";
import { Avatar, Typography } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Unstable_Grid2";
import { fetchCategories } from "../../rtk/slices/moviesSlice";
import { useEffect } from "react";

const CategoryTabs = () => {
	const state = useSelector(state => state);
	const dispatch = useDispatch();
	const [tabs, setTabs] = React.useState([
		{
			isActive: true,
			name: "movies",
			icon: "https://api.iconify.design/mdi:movie-open.svg?color=%23ffffff",
			api: "https://imdb-api.com/en/API/InTheaters",
		},
		{
			isActive: false,
			name: "top",
			icon: "https://api.iconify.design/mdi:movie-star.svg?color=%23ffffff",
			api: "https://imdb-api.com/en/API/Top250Movies",
		},
		{
			isActive: false,
			name: "popular",
			icon: "https://api.iconify.design/mdi:movie-open-check.svg?color=%23ffffff",
			api: "https://imdb-api.com/en/API/MostPopularMovies",
		},
		{
			isActive: false,
			name: "top tvs",
			icon: "https://api.iconify.design/bx:bxs-tv.svg?color=%23ffffff",
			api: "https://imdb-api.com/en/API/Top250TVs",
		},
		{
			isActive: false,
			name: "Soon",
			icon: "https://api.iconify.design/mdi:movie-plus.svg?color=%23ffffff",
			api: "https://imdb-api.com/en/API/ComingSoon",
		},
	]);

	const handleActive = tab => {
		tabs.map(item => {
			tab.name === item.name ? (item.isActive = true) : (item.isActive = false);
		});
		setTabs([...tabs]);
	};

	return (
		<Box className="categories-tabs" sx={{ flexGrow: 1, marginY: "2rem" }}>
			<Grid
				container
				spacing={{ xs: 1 }}
				columns={{ xs: 4, sm: 6, md: 12, lg: 12 }}
				sx={{ justifyContent: "center" }}
			>
				{tabs.map(tab => {
					return (
						<Grid key={tab.name} xs={12} sm={1.5} md={2.2} lg={2}>
							<button
								className="main-btn btn-purple tab"
								style={{
									backgroundColor: tab.isActive ? "#2f157d" : "#301e6769",
								}}
								onClick={() => {
									handleActive(tab);
									dispatch(fetchCategories(tab.api));
								}}
							>
								<Box sx={{ width: 30 }} component="img" src={tab.icon} />

								<Typography
									variant="span"
									sx={{
										color: "#ffffff",
										textTransform: "uppercase",
										fontWeight: "500",
										marginLeft: ".5rem",
									}}
								>
									{tab.name}
								</Typography>
							</button>
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
};

export default CategoryTabs;
