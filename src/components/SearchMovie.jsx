import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { API_KEY, searchMovieUrl } from "../data/Urls";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const SearchMovie = () => {
    const [movie, setMovie] = useState([]);
    const [value, setValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { movieName } = useParams();
    // console.log(movie);
    const navigate = useNavigate();

    const searchMovie = async (e) => {
        try {
            setIsLoading(true);
            const res = await fetch(`${searchMovieUrl}${value}&${API_KEY}`);
            const data = await res.json();
            setMovie(data.results);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearchMovie = (e) => {
        e.preventDefault();
        searchMovie();
        setMovie("");
    };

    useEffect(() => {
        searchMovie();
    }, []);
    // console.log(movie);
    return (
        <div className="w-full md:w-2/4 border-2 border-white rounded-lg p-2 relative">
            <form
                onSubmit={handleSearchMovie}
                className="w-full flex items-center"
            >
                <input
                    className="bg-transparent placeholder:text-white outline-none border-none focus:border-none w-full"
                    type="text"
                    id="search"
                    placeholder="What do you want to watch?"
                    name={value}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button className="absolute right-2" type="submit">
                    <FaSearch />
                </button>
            </form>
        </div>
    );
};

export default SearchMovie;
