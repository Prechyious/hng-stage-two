import { imgUrl } from "../data/Urls";
import imdbIcon from "../assets/imdb.png";
import tomato from "../assets/tomato.png";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ poster_path, title, release_date, id, vote_average }) => {
    const [liked, setLiked] = useState(false);

    const handleLiked = () => {
        setLiked(!liked);
    };

    const utcDate = new Date(release_date).toUTCString();

    return (
        <div
            data-testid="movie-card"
            className="overflow-hidden flex flex-col gap-2 relative"
        >
            <button
                className={`absolute z-20 p-2 rounded-full top-4 right-4 ${
                    liked
                        ? "text-rose-600 bg-white/80"
                        : "text-gray-300 bg-gray-100/40"
                }`}
                onClick={handleLiked}
            >
                <FaHeart />
            </button>
            <Link to={`/movie/${id}`} className="max-h-[28rem] w-[15.625rem]">
                <img
                    className="h-[21.125rem] w-full hover:scale-105 transition-all duration-700 ease-in-out mb-2"
                    data-testid="movie-poster"
                    src={`${imgUrl}/w500${poster_path}`}
                    alt={title}
                />
                <h2
                    className="text-xs font-semibold text-gray-400"
                    data-testid="movie-release-date"
                >
                    {utcDate}
                </h2>
                <h2
                    data-testid="movie-title"
                    className="font-bold text-gray-900 leading-6 text-lg"
                >
                    {title}
                </h2>
                <div className="flex items-center justify-between">
                    <h4 className="flex gap-2 items-center">
                        <img src={imdbIcon} alt="imdb" />
                        <p className="text-gray-900 text-xs">
                            {Math.floor(vote_average * 10)}.0 / 100
                        </p>
                    </h4>
                    <h4 className="flex gap-1 items-center">
                        <img src={tomato} alt="popularity" />
                        <p className="text-gray-900 text-xs">80%</p>
                    </h4>
                </div>

                <p className="text-gray-400 text-xs font-bold">
                    Action, Adventure
                </p>
            </Link>
        </div>
    );
};

export default Card;
