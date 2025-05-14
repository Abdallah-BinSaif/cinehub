import {useEffect, useState} from 'react';
import MovieCard from "../../components/MovieCard.jsx";
import axiosSecure from "../../axios/SecureAxios.jsx";
import Swal from "sweetalert2";

const AllMovies = () => {
    const [movies, setMovies] = useState(null)
    const [search, setSearch] = useState({});
    useEffect(() => {

        axiosSecure.get(`/cinemas?searchParams=${search}`)
            .then(res => setMovies(res.data))
            .catch(err =>{
                Swal.fire({
                    title: "Error",
                    text: `${err.code}`,
                    icon: "error"
                })
            })

    }, [search]);

    return (
        <section className={"screen py-12"}>

            <div className={"text-center text-xl md:text-3xl lg:text-5xl mb-8"}>
                <h2>Explore Your Movie</h2>
            </div>
            <div className={"flex justify-center "}>
                <label className="input input-bordered border-pri hover:border-pri flex w-1/2 items-center gap-2">
                    <p className={"border-r border-gold pr-2 text-pri"}>Search </p>

                    <input placeholder={"Popcorn ready? Let's Find a movie"} onChange={(e)=>setSearch(e.target.value)} type="text" className="w-full text-gold"/>
                </label>
            </div>
            <div className={"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"}>
                {
                    movies?.map(item => <MovieCard key={item._id} movie={item}></MovieCard>)
                }
            </div>
        </section>
    );
};

export default AllMovies;