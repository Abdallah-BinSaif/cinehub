import {useState} from 'react';
import Banner from "./components/Banner.jsx";
import {MdLightMode, MdOutlineLightMode} from "react-icons/md";
import TopMovies from "./components/TopMovies.jsx";
import Celebrities from "./components/Celebrities.jsx";
import MetaScore from "./components/MetaScore.jsx";

const Home = () => {



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

    return (
        <div>
            <div className={"flex justify-end items-center"}>
                Theme
                <button onClick={handleTheme} className={"p-2 text-xl"}>{theme? <MdLightMode/>  : <MdOutlineLightMode/>}</button>
            </div>
            <div className={"container mx-auto"}>
                <Banner/>
            </div>

            <TopMovies/>

            <Celebrities/>

            <MetaScore/>
        </div>
    );
};

export default Home;