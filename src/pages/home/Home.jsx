import Banner from "./components/Banner.jsx";
import TopMovies from "./components/TopMovies.jsx";
import Celebrities from "./components/Celebrities.jsx";
import MetaScore from "./components/MetaScore.jsx";

const Home = () => {

    return (
        <div>
            <Banner/>

            <TopMovies/>

            <Celebrities/>

            <MetaScore/>
        </div>
    );
};

export default Home;