import AdvancedSearch from "./AdvancedSearch";
import CategoryTabs from "./CategoryTabs";
import Movies from "./Movies";

const MoviesList = () => {
	return (
		<>
			<CategoryTabs />
			<AdvancedSearch />
			<Movies />
		</>
	);
};
export default MoviesList;
