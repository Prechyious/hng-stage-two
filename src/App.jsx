import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Details from "./Pages/Details";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:movieId" element={<Details />} />
            </Routes>
        </>
    );
};

export default App;
