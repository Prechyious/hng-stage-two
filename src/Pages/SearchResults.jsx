import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_KEY, searchMovieUrl } from "../data/Urls";
import { ScaleLoader } from "react-spinners";
import Card from "../components/Card";
import SearchMovie from "../components/SearchInput";
import { FaArrowLeft } from "react-icons/fa";

const SearchResults = () => {
    const [movie, setMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const { movieName } = useParams();

    const searchMovie = async () => {
        try {
            setIsLoading(true);
            const res = await fetch(`${searchMovieUrl}${movieName}&${API_KEY}`);
            const data = await res.json();
            setMovie(data.results);
        } catch (error) {
            setErrors(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        searchMovie();
    }, [movieName]);

    return (
        <>
            {isLoading ? (
                <div className="flex w-full h-screen items-center justify-center">
                    <ScaleLoader color="#be123c" />
                </div>
            ) : (
                <main>
                    <section className="mb-2">
                        <div className="border-b w-full py-2 px-10 mb-5 flex flex-col md:flex-row gap-3 justify-between bg-rose-200">
                            <Link
                                className="font-bold text-lg text-gray-700 flex items-center gap-2"
                                to="/"
                            >
                                <FaArrowLeft size={16} />
                                <span>Go Back</span>
                            </Link>

                            <SearchMovie />
                        </div>
                        <h2 className="px-10 text-xl md:text-2xl">
                            Search results for{" "}
                            <span className="font-semibold text-gray-700">
                                {movieName}
                            </span>
                        </h2>
                    </section>
                    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:grid-cols-4 2xl:grid-cols-5 place-items-center">
                        {!movie.length ? (
                            <h2 className="font-semibold text-xl md:text-2xl text-gray-700 text-center mx-0">
                                Sorry,{" "}
                                <span className="font-bold">{movieName}</span>{" "}
                                not found
                            </h2>
                        ) : (
                            movie.map(
                                ({
                                    poster_path,
                                    title,
                                    release_date,
                                    id,
                                    vote_average,
                                }) => {
                                    return (
                                        <Card
                                            key={id}
                                            poster_path={poster_path}
                                            title={title}
                                            release_date={release_date}
                                            vote_average={vote_average}
                                            id={id}
                                        />
                                    );
                                }
                            )
                        )}
                    </section>
                </main>
            )}
        </>
    );
};

export default SearchResults;
