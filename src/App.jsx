import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Details from "./Pages/Details";
import SearchResults from "./Pages/SearchResults";

const App = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/movie/:movieId" element={<Details />} />
                <Route
                    path="/movie/search/:movieName"
                    element={<SearchResults />}
                />
            </Routes>
        </>
    );
};

export default App;
