import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Details from "./Pages/Details";
import SearchResults from "./Pages/SearchResults";
import ErrorPage from "./Pages/ErrorPage";

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
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    );
};

export default App;
