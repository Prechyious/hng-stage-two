import { Link } from "react-router-dom";
import { FaEquals, FaPlayCircle, FaSearch } from "react-icons/fa";
import imdb from "../assets/imdb.png";
import tomato from "../assets/tomato.png";
import tv from "../assets/tv.png";
import SearchMovie from "./SearchMovie";

const Header = () => {
    return (
        <header>
            <div className="h-screen bg-center bg-no-repeat bg-cover px-5 md:px-20 text-white mb-16 bg-bgImg bg-opacity-90 z-0">
                <div className="flex flex-col md:flex-row gap-5  items-start md:items-center justify-between py-4 md:gap-20 z-10">
                    <div>
                        <Link className="flex items-center gap-2 md:gap-5 text-2xl font-bold">
                            <img src={tv} alt="logo" />
                            MovieBox
                        </Link>
                    </div>

                    <SearchMovie />

                    <nav>
                        <Link className="flex items-center gap-2 md:gap-4">
                            Sign In
                            <FaEquals className="bg-rose-700 h-7 md:h-8 w-7 md:w-8 rounded-full p-1 md:p-1.5" />
                        </Link>
                    </nav>
                </div>
                <div className="bg-opacity-75 flex flex-col items-start justify-center h-[90dvh]">
                    <h2 className="text-4xl max-w-xs mb-3 font-bold">
                        John Wick 3: <br />
                        Parabellum
                    </h2>
                    <div className="flex items-center gap-10 mb-2">
                        <div className="flex items-center gap-2">
                            <img src={imdb} alt="imdb" />

                            <p className="text-sm">86.0 / 100</p>
                        </div>

                        <div className="flex items-center justify-center gap-2 text-sm">
                            <img src={tomato} alt="rating" />
                            <p>97%</p>
                        </div>
                    </div>
                    <p className="font-semibold max-w-xs mb-4">
                        John Wick is on the run after killing a member of the
                        international assassins' guild, and with a $14 million
                        price tag on his head, he is the target of hit men and
                        women everywhere.
                    </p>
                    <button className="bg-rose-700 flex items-center gap-2 px-4 py-2 rounded-lg">
                        <FaPlayCircle />
                        Watch Trailer
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
