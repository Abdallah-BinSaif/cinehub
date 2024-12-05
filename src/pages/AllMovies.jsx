import React from 'react';
import {useLoaderData} from "react-router-dom";
import MovieCard from "../components/MovieCard.jsx";

const AllMovies = () => {
    const movies = useLoaderData()
    console.log(movies)
    return (
        <div>

            <div className={"container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-3"}>
                {
                    movies?.map(item => <MovieCard key={item._id} movie={item}></MovieCard>)
                }
            </div>
        </div>
    );
};

export default AllMovies;