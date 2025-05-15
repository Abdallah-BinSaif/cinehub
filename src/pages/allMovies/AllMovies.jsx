import {useEffect, useState} from 'react';
import MovieCard from "../../components/MovieCard.jsx";
import axiosSecure from "../../axios/SecureAxios.jsx";
import Swal from "sweetalert2";
import SectionHeading from "../../components/SectionHeading.jsx";

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
        <section className={"screen"}>

            <SectionHeading heading={"Explore Your Movie"} subHeading={"Search Your Movie"}/>

            <div className={"flex justify-center pb-8"}>
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