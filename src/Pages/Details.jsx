import { Link, NavLink, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { FaEquals } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import { API_KEY, searchMovieUrl } from "../data/Urls";
import { ScaleLoader } from "react-spinners";

const Details = () => {
    const [openSideBar, setOpenSideBar] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [movie, setMovie] = useState([]);
    console.log(movie);

    const { movieId } = useParams();

    const { backdrop_path, title, release_date, runtime, overview } = movie;

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

            <section className="mt-7 mx-20">
                <div>
                    <img
                        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                        alt={title}
                        className="rounded-2xl w-full h-[20rem] md:h-[28rem]"
                    />
                </div>
                <div className=" text-2xl font-medium text-[#404040] flex gap-4 my-6">
                    <h2 data-testid="movie-title">{title}</h2>
                    <p data-testid="movie-release-date">{release_date}</p>
                    <p data-testid="movie-runtime">{runtime}</p>
                </div>
                <div className=" text-xl text-[#333] w-3/4">
                    <p data-testid="movie-overview">{overview}</p>
                </div>
            </section>
        </div>
    );
};

export default Details;
