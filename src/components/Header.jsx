import { Link } from "react-router-dom";
import { FaImdb } from "react-icons/fa";

const Header = () => {
    return (
        <header>
            <div className="h-[37.5rem] bg-center bg-no-repeat bg-cover px-20 text-white mb-16 bg-bgImg">
                <div className="flex justify-between py-4">
                    <div>
                        <Link>MovieBox</Link>
                    </div>
                    <nav>
                        <Link>Sign In</Link>
                    </nav>
                </div>
                <div className="bg-opacity-75 flex flex-col items-start mt-[15%]">
                    <h2 className="text-4xl max-w-xs mb-3 font-bold">
                        John Wick 3: <br />
                        Parabellum
                    </h2>
                    <div>
                        <FaImdb />
                    </div>
                    <p className="font-semibold max-w-xs">
                        John Wick is on the run after killing a member of the
                        international assassins' guild, and with a $14 million
                        price tag on his head, he is the target of hit men and
                        women everywhere.
                    </p>
                    <button>Watch Trailer</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
