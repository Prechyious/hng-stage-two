import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchMovie = () => {
    const [value, setValue] = useState("");
    const navigate = useNavigate();

    const handleSearchMovie = (e) => {
        e.preventDefault();
        navigate(`/movie/search/${value}`);
        setValue("");
    };
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
