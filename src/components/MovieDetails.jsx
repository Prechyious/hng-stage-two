import { imgUrl } from "../data/Urls";
import { FaList, FaPlay, FaStar, FaTicketAlt } from "react-icons/fa";
import { BsChevronDown, BsDot } from "react-icons/bs";
import moreOptions from "../assets/more.png";

const MovieDetails = ({
    backdrop_path,
    title,
    utcDate,
    runtime,
    overview,
    vote_average,
}) => {
    return (
        <section className="mt-3 mx-10 flex-1">
            <div className="relative w-full flex items-center justify-center">
                <img
                    src={`${imgUrl}/original/${backdrop_path}`}
                    alt={title}
                    className="rounded-2xl w-full h-[15rem] sm:h-[17rem] md:h-[20rem]"
                />
                <button className="absolute flex flex-col items-center gap-2 text-white">
                    <div className="bg-white/20 p-4 rounded-full">
                        <FaPlay className=" opacity-75" size={25} />
                    </div>
                    <span className="text-xl md:text-2xl text-[#E8E8E8]">
                        Watch Trailer
                    </span>
                </button>
            </div>
            <div className="text-lg font-medium text-[#404040] flex items-center justify-between my-3">
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-xl md:text-2xl">
                    <h3 data-testid="movie-title">{title}</h3>
                    <BsDot className="hidden md:block" size={30} />
                    <h3 className="text-lg" data-testid="movie-release-date">
                        {utcDate}
                    </h3>
                    <BsDot className="hidden md:block" size={30} />
                    <h3 className="text-lg" data-testid="movie-runtime">
                        {runtime}mins
                    </h3>
                </div>
                <p className="flex items-center">
                    <FaStar className="text-yellow-400" />
                    <span className="text-[#E8E8E8] mx-1">{vote_average}</span>|
                    250K
                </p>
            </div>
            <div className="flex flex-col gap-4 md:flex-row text-lg md:text-xl font-normal text-[#333]">
                <div className="mb-3 md:mb-0 leading-6">
                    <p
                        data-testid="movie-overview"
                        className="md:max-w-[46rem]"
                    >
                        {overview}
                    </p>

                    <div className="mt-5 mb-3">
                        <h3 className="mb-3">
                            Director:{" "}
                            <span className="text-rose-700">John Doe</span>
                        </h3>
                        <h3 className="mb-3">
                            Writers:{" "}
                            <span className="text-rose-700">
                                John Doe, Jane Doe, Foo Bar
                            </span>
                        </h3>
                        <h3>
                            Stars:{" "}
                            <span className="text-rose-700">
                                John Doe, Jane Doe, Foo Bar
                            </span>
                        </h3>
                    </div>

                    <div className="flex items-center w-full border gap-3 rounded-lg font-medium">
                        <button className="bg-rose-700 px-6 py-2 rounded-lg text-white">
                            Top rated movie #65
                        </button>
                        <div className="flex items-center justify-between cursor-pointer flex-1 px-3 text-[#333]">
                            <p>Awards 9 nominations</p>
                            <BsChevronDown />
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-between md:justify-normal gap-3 font-medium text-base md:text-lg mb-2 md:mb-0">
                    <div className="flex flex-col gap-3">
                        <button className="bg-rose-700 px-6 py-2 rounded-lg text-white flex items-center gap-3">
                            <FaTicketAlt className=" -rotate-45" />
                            See Showtime
                        </button>
                        <button className="bg-rose-100 px-6 py-2 rounded-lg text-[#333] border border-rose-700 flex items-center gap-3">
                            <FaList />
                            More watch options
                        </button>
                    </div>
                    <div className="relative">
                        <img
                            src={moreOptions}
                            alt="watch more"
                            className="md:h-[11.5rem] w-full h-fit"
                        />

                        <h4 className="absolute bg-black/50 backdrop-blur-sm bottom-0 text-sm md:text-xs text-gray-200 flex items-center justify-center w-full gap-3 p-3 md:p-2 rounded-b-xl">
                            <FaList />
                            The Best Movies and Shows in September
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MovieDetails;
