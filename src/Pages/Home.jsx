import Footer from "../components/Footer";
import Header from "../components/Header";
import FeaturedMovies from "../components/FeaturedMovies";
import { useEffect, useState } from "react";
import { topRated } from "../data/Urls";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [errors, setErrors] = useState([]);

    const fetchMovies = async () => {
        setIsLoading(true);
        try {
            const res = await fetch(topRated);
            const data = await res.json();
            const firstTen = data.results.slice(0, 10);
            setMovies(firstTen);
        } catch (error) {
            setErrors(error.stack);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);
    return (
        <>
            <Header movies={movies} />
            <FeaturedMovies
                movies={movies}
                isLoading={isLoading}
                errors={errors}
            />
            <Footer />
        </>
    );
};

export default Home;
