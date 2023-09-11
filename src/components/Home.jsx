import { useEffect } from "react";

const Home = ({ result, fetchData }) => {
    const movieCard = "movie-card";
    const moviePoster = "movie-poster";
    const movieTitle = "movie-title";
    const movieReleaseDate = "movie-release-date";

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <main className="px-10 md:px-20">
            <div className="flex justify-between mb-11 items-center">
                <h1 className="font-bold text-3xl">Featured Movie</h1>
                <button className="text-rose-700">
                    See more <span>&#62;</span>
                </button>
            </div>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-10 place-items-center">
                {result.map(({ poster_path, title, release_date }) => {
                    return (
                        <div data-testid={movieCard} key={title}>
                            <img
                                className="h-[23.125rem] w-[15.625rem]"
                                data-testid={moviePoster}
                                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                                alt={title}
                            />
                            <h3
                                data-testid={movieTitle}
                                className="font-semibold text-sm mt-2"
                            >
                                {title}
                            </h3>
                            <p
                                data-testid={movieReleaseDate}
                                className="text-xs"
                            >
                                {release_date}
                            </p>
                        </div>
                    );
                })}
            </section>
        </main>
    );
};

export default Home;
