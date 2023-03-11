import TopMovie from "./components/Home/TopMovie";
import Navbar from "./components/Navbar/Navbar";
import "./Styles.scss";
import TopMovies from "./components/Home/TopMovies";
import MoviesList from "./components/Home/MoviesList";
import Footer from "./components/Home/Footer/Footer";
import { Route, Routes } from "react-router";
import MovieDetails from "./components/Home/MovieDetails";
import SearchPage from "./components/SearchPage/SearchPage";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<div className="container">
								<TopMovie />
								<TopMovies />
								<MoviesList />
							</div>
						</>
					}
				/>
				<Route path="/movie_details/:movieId" element={<MovieDetails />} />
				<Route path="/search-page/:searchName" element={<SearchPage />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
