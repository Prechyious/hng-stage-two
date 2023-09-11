import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { key } from "./data/Data";

const App = () => {
    const [result, setResult] = useState([]);

    const fetchData = async () => {
        try {
            const res = await fetch(
                `https://api.themoviedb.org/3/movie/top_rated?${key}`
            );
            const data = await res.json();
            const firstTen = data.results.slice(0, 10);
            setResult(firstTen);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <Header />
            <Home result={result} fetchData={fetchData} />
        </>
    );
};

export default App;
