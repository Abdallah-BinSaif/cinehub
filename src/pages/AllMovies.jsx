import React, {useEffect, useState} from 'react';
import {useLoaderData} from "react-router-dom";
import MovieCard from "../components/MovieCard.jsx";

const AllMovies = () => {
    const fetchMovies = useLoaderData();
    const [movies, setMovies] = useState(null)
    const [search, setSearch] = useState({});
    useEffect(() => {

        fetch(`http://localhost:5000/cinemas?searchParams=${search}`)
            .then(res=>res.json())
            .then(data => setMovies(data))
    }, [search]);

    // const handleSearch = (e) => {
    //     console.log(e.target.value)
    // }
    return (
        <div>

            <div className={"text-center text-5xl"}>
                <h2>Explore Your Movie</h2>
            </div>
            <div className={"flex justify-center mt-8"}>
                <label className="input input-bordered border-pri hover:border-pri flex w-1/2 items-center gap-2">
                    <p className={"border-r border-gold pr-2 text-pri"}>Search </p>

                    <input placeholder={"Popcorn ready? Let's Find a movie"} onChange={(e)=>setSearch(e.target.value)} type="text" className="w-full text-gold"/>
                </label>
            </div>
            <div className={"container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-3"}>
                {
                    movies?.map(item => <MovieCard key={item._id} movie={item}></MovieCard>)
                }
            </div>
        </div>
    );
};

export default AllMovies;