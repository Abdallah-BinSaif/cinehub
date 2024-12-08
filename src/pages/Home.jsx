import React, {useEffect, useState} from 'react';
import MovieCard from "../components/MovieCard.jsx";
import {useNavigate} from "react-router-dom";
import Banner from "../components/Banner.jsx";
import logo from "../../public/logo.webp"
import CelebrityCard from "../components/celebrity/CelebrityCard.jsx";
import {MdLightMode, MdOutlineLightMode} from "react-icons/md";

const Home = () => {


    const navigate = useNavigate()
    const [movies, setMovies] = useState();
    const [celebrity, setCelebrity] = useState([])
    const [theme, setTheme] = useState(false)

    const handleTheme = () => {
        if(theme){
            document.documentElement.setAttribute("data-theme", "dark")
            setTheme(!theme)
        }else{
            document.documentElement.setAttribute("data-theme", "light")
            setTheme(!theme)
        }
    }
    useEffect(() => {
        fetch("https://movie-portal-server-pink-one.vercel.app/cinemas")
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
            <div className={"flex justify-end items-center"}>
                Theme
                <button onClick={handleTheme} className={"p-2 text-xl"}>{theme? <MdLightMode/>  : <MdOutlineLightMode/>}</button>
            </div>
            <div className={"container mx-auto"}>
                <Banner/>
            </div>
            <div className={"text-center"}>
                <h3 className={"text-6xl mt-32"}>Top Most Movies</h3>
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
                <h3 className={"text-3xl mb-6 font-bold text-pri container mx-auto"}>Most Awarded Celebrities</h3>
                <div className={"flex overflow-scroll gap-8 container mx-auto"}>
                    {
                        celebrity?.map((item, idx) => <CelebrityCard key={idx} celebrity={item}/>)
                    }

                </div>
            </div>

            <div className={"flex justify-between container mx-auto my-32"}>
                <div className={"flex flex-col items-start gap-4 justify-center"}>
                    <div className={"flex items-center text-4xl text-gold font-bold gap-4"}>
                        <img className={"w-16 h-16"} src={logo}/>
                        <p>CineHub</p>
                    </div>
                    <h3 className={"text-5xl text-pri"}>The Gold Standard <br/>in Critical Analysis</h3>
                </div>
                <div className={"card bg-[#fff] text-pri p-10 lg:w-5/12"}>
                    <h3 className={"text-2xl font-bold"}>The Metascore Breakdown</h3>
                    <div className={"flex my-4"}>
                        <div className={"flex-1 border-4 border-red"}></div>
                        <div className={"flex-1 border-4 border-gold"}></div>
                        <div className={"flex-1 border-4 border-pri"}></div>
                    </div>
                    <ul className={"list-disc ml-6 font-semibold text-lg mb-6"}>
                        <li>We collect reviews from the world's top critics.</li>
                        <li>Each review is scored based on its overall quality.</li>
                        <li>The summarized weighted average captures the essence of critical opinion</li>
                    </ul>
                    <button className={"btn"}>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Home;