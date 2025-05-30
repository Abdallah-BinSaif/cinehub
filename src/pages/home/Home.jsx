import Banner from "./components/Banner.jsx";
import TopMovies from "./components/TopMovies.jsx";
import Celebrities from "./components/Celebrities.jsx";
import MetaScore from "./components/MetaScore.jsx";
import Subscription from "./subscription/Subscription.jsx";
import Kids from "./kids/Kids.jsx";

const Home = () => {

    return (
        <div>
            <Banner/>

            <TopMovies/>

            <Kids/>

            <Celebrities/>

            <Subscription/>

            <MetaScore/>
        </div>
    );
};

export default Home;