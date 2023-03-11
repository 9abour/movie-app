import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { ThemeProvider } from "@mui/material";
import myTheme from "../Theme/Theme";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearch } from "../../rtk/slices/SearchSlice";

const Navbar = () => {
	const dispatch = useDispatch();

	const [searchValue, setSearchValue] = useState("");

	const handleSearchChange = e => {
		setSearchValue(e.target.value);
	};

	const handleSearchSubmit = () => {
		dispatch(fetchSearch(searchValue));
	};

	return (
		<ThemeProvider theme={myTheme}>
			<Box
				sx={{
					position: "fixed",
					width: "100%",
					top: 0,
					zIndex: 999999999,
				}}
			>
				<AppBar position="static" color="clrPrimarySecond">
					<div className="container">
						<Toolbar
							sx={{
								minHeight: "55px !important",
								justifyContent: "space-between",
							}}
						>
							<Box component="div">
								<Link to="/">
									<button className="logo">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="38"
											height="38"
											viewBox="0 0 16 16"
										>
											<path
												fill="#ffffff"
												d="M13.218 4.246L7.087 6.238a.502.502 0 0 1-.24.079L4.741 7H13.5a.5.5 0 0 1 .5.5v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 12.5v-5c0-.106.033-.205.09-.287l-.195-.602A2.5 2.5 0 0 1 3.5 3.461l6.657-2.163a2.5 2.5 0 0 1 3.15 1.605l.232.713a.5.5 0 0 1-.321.63Zm-3.744.165l1.285-2.226a1.508 1.508 0 0 0-.293.064l-1.245.404l-1.308 2.265l1.56-.507Zm2.295-1.979a.515.515 0 0 1-.02.037l-.854 1.48l1.538-.5l-.077-.237a1.494 1.494 0 0 0-.587-.78Zm-3.97.683l-1.56.507L4.93 5.887l1.56-.507L7.8 3.115ZM2.923 6.54l.587-.19l1.307-2.266l-1.008.328a1.5 1.5 0 0 0-.963 1.89l.077.238ZM3 8v4.5A1.5 1.5 0 0 0 4.5 14h7a1.5 1.5 0 0 0 1.5-1.5V8H3Z"
											/>
										</svg>
									</button>
								</Link>
							</Box>
							<Box
								component="div"
								sx={{
									maxWidth: "40rem",
									display: "flex",
									alignItems: "center",
									flexGrow: 1,
								}}
							>
								<Box component="form" sx={{ flexGrow: 1, display: "flex" }}>
									<input
										type="text"
										onChange={handleSearchChange}
										style={{
											width: "100%",
											height: "33.3px",
											fontSize: "1rem",
											padding: "0 1rem",
											border: "1px solid #a8b3cf",
											borderRadius: "2px",
											outline: "none",
										}}
										placeholder="Search..."
									/>
									<Link to={`/search-page/${searchValue}`}>
										<button
											onClick={handleSearchSubmit}
											className="main-btn btn-primary account"
											style={{ height: "33px", width: "33.3px" }}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="25"
												height="25"
												viewBox="0 0 24 24"
											>
												<path
													fill="#ffffff"
													d="M11.03 20H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1l2 4h3L8 4h2l2 4h3l-2-4h2l2 4h3l-2-4h4v9.05A6.487 6.487 0 0 0 16.5 10c-3.58 0-6.5 2.92-6.5 6.5c0 1.29.38 2.5 1.03 3.5m12.36 2L22 23.39l-3.12-3.07c-.69.43-1.51.68-2.38.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5s4.5 2 4.5 4.5c0 .88-.25 1.71-.69 2.4l3.08 3.1M19 16.5a2.5 2.5 0 0 0-5 0a2.5 2.5 0 0 0 5 0Z"
												/>
											</svg>
										</button>
									</Link>
								</Box>
							</Box>
						</Toolbar>
					</div>
				</AppBar>
			</Box>
		</ThemeProvider>
	);
};

export default Navbar;
