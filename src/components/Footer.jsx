import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center gap-7 pb-9 font-bold text-lg">
            <div className="flex items-center gap-12">
                <Link>
                    <FaFacebookSquare />
                </Link>
                <Link>
                    <FaInstagram />
                </Link>
                <Link>
                    <FaTwitter />
                </Link>
                <Link>
                    <FaYoutube />
                </Link>
            </div>

            <div className="flex items-center gap-12">
                <Link>Conditions of Use</Link>
                <Link>Privacy & Policy</Link>
                <Link>Press Room</Link>
            </div>

            <div className="text-gray-500">
                <p>&copy; 2023 MovieBox by Leghemo Precious</p>
            </div>
        </footer>
    );
};

export default Footer;
