import { Link, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { FaEquals, FaList, FaPlay, FaStar, FaTicketAlt } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import Sidebar from "../components/Sidebar";
import { API_KEY, imgUrl } from "../data/Urls";
import { ScaleLoader } from "react-spinners";
import moreOptions from "../assets/more.png";

const Details = () => {
    const [openSideBar, setOpenSideBar] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [movie, setMovie] = useState([]);
    console.log(movie);

    const { movieId } = useParams();

    const {
        backdrop_path,
        title,
        release_date,
        runtime,
        overview,
        vote_average,
    } = movie;

    const releaseYear = release_date;

    const fetchMovie = async () => {
        setIsLoading(true);
        try {
            const res = await fetch(
                `https://api.themoviedb.org/3/movie/${movieId}?${API_KEY}`
            );
            const data = await res.json();
            setMovie(data);
        } catch (error) {
            setErrors(error.stack);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchMovie();
    }, []);
    const openMenu = () => {
        setOpenSideBar(!openSideBar);
    };

    if (isLoading) {
        return (
            <div className="flex w-full h-screen items-center justify-center">
                <ScaleLoader color="#be123c" height={25} />
            </div>
        );
    }

    return (
        <div className="bg-white h-screen flex justify-between">
            <div
                onClick={openMenu}
                className="absolute md:hidden z-10 cursor-pointer right-5 top-2"
            >
                <FaEquals className="bg-rose-700 h-7 md:h-8 w-7 md:w-8 rounded-full p-1 md:p-1.5 text-white" />
            </div>
            <Sidebar openSideBar={openSideBar} />

            <section className="mt-7 mx-10">
                <div className="relative">
                    <img
                        src={`${imgUrl}/original/${backdrop_path}`}
                        alt={title}
                        className="rounded-2xl w-full h-[20rem] md:h-[28rem]"
                    />
                    <button className="absolute top-28 left-52 md:top-[10rem] md:left-[26rem] flex flex-col items-center gap-2 text-white">
                        <div className="bg-white/20 p-4 rounded-full">
                            <FaPlay className=" opacity-75" size={25} />
                        </div>
                        <span className="text-xl md:text-2xl text-[#E8E8E8]">
                            Watch Trailer
                        </span>
                    </button>
                </div>
                <div className="text-base md:text-xl font-medium text-[#404040] flex items-center justify-between my-5">
                    <div className="flex items-center gap-1 md:gap-2 text-xl md:text-2xl">
                        <h2 data-testid="movie-title">{title}</h2>
                        <BsDot size={30} />
                        <p data-testid="movie-release-date">{releaseYear}</p>
                        <BsDot size={30} />
                        <p data-testid="movie-runtime">{runtime}</p>
                    </div>
                    <p className="flex items-center">
                        <FaStar className="text-yellow-400" />
                        <span className="text-[#E8E8E8] mx-1">
                            {vote_average}
                        </span>
                        | 250K
                    </p>
                </div>
                <div className="flex flex-col gap-3 md:flex-row text-base md:text-xl font-normal text-[#333] justify-between">
                    <p data-testid="movie-overview" className=" max-w-xl">
                        {overview}
                    </p>
                    <div className="flex flex-col gap-2 font-medium">
                        <button className="bg-rose-700 px-6 py-2 rounded-lg text-white flex items-center gap-3">
                            <FaTicketAlt className=" -rotate-45" />
                            See Showtime
                        </button>
                        <button className="bg-rose-100 px-6 py-2 rounded-lg text-[#333] border border-rose-700 flex items-center gap-3">
                            <FaList />
                            More watch options
                        </button>
                        <div className="mt-4">
                            <img src={moreOptions} alt="watch more" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Details;
