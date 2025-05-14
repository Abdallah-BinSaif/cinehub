import { motion } from "motion/react"
import MovieCard from "../../../components/MovieCard.jsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const TopMovies = () => {
    const navigate = useNavigate()
    const [movies, setMovies] = useState();
    useEffect(() => {
        fetch("https://movie-portal-server-pink-one.vercel.app/cinemas")
            .then(res => res.json())
            .then(data => {
                const sorted = data.sort((a , b)=> b.rating - a.rating)
                setMovies(sorted.slice(0, 6))
            })
    }, []);
    return (
        <section className={"screen"}>
            <div className={"text-center"}>
                <h3 className={"text-6xl mt-20 mb-14"}>Top Movies</h3>
            </div>
            <div className={"container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3"}>
                {
                    movies?.map(item => <MovieCard key={item._id} movie={item}></MovieCard>)
                }
            </div>
            <div className={"flex justify-center items-center"}>
                <motion.button
                    animate={{
                        boxShadow: ["3px 3px 3px #dedcff","10px 10px 10px #9996e0","3px 3px 3px #dedcff"],
                        transition:{
                        duration:2,
                            repeat:Infinity,
                        } }}
                    whileHover={{y:-2}}
                    whileTap={{y:2}}

                    onClick={() => navigate("/all")} className="border px-36 py-2 mt-12 text-light-primary">Show All
                </motion.button>
            </div>
        </section>
    );
};

export default TopMovies;