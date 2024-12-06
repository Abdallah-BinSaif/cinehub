import React, {useEffect, useState} from 'react';
import MovieCard from "../components/MovieCard.jsx";
import {useNavigate} from "react-router-dom";
import Banner from "../components/Banner.jsx";
import CelebrityCard from "../components/celebrity/CelebrityCard.jsx";

const Home = () => {
    const navigate = useNavigate()
    const [movies, setMovies] = useState();
    const [celebrity, setCelebrity] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/cinemas")
            .then(res => res.json())
            .then(data => {
                const sorted = data.sort((a , b)=> b.rating - a.rating)
                setMovies(sorted.slice(0, 6))

            })
        fetch("./celebrity.json")
            .then(res => res.json())
            .then(data => {
                setCelebrity(data)

            })
    }, []);
    return (
        <div>
            <div className={"container mx-auto"}>
                <Banner/>
            </div>
            <div className={"container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-3"}>
                {
                    movies?.map(item => <MovieCard key={item._id} movie={item}></MovieCard>)
                }
            </div>
            <div className={"flex justify-center items-center"}>
                <button onClick={()=>navigate("/all")} className="btn bg-pri text-seco hover:bg-gold">Show All</button>
            </div>

            <div className={"bg-gold-seco py-20 my-8"}>
                <div className={"flex overflow-hidden gap-8 container mx-auto"}>
                    {
                        celebrity?.map(item => <CelebrityCard celebrity={item}/>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Home;