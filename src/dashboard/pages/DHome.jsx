import Card1 from "../components/Card1.jsx";
import {BarChart} from "@mantine/charts";
import Charts from "./Charts.jsx";


const DHome = () => {
    return (
        <section className={"pt-12"}>
            <div className={"flex gap-3 w-2/3"}>
                <Card1 color={"#ffffff"} title={"You Added Movie"} count={23}/>
                <Card1 title={"Your Favourite Movie"} count={23}/>
                <Card1 title={"You Watched Movie"} count={23}/>
            </div>
            <div className={"py-12 px-6 mt-12 w-2/3 bg-light-secondary"}>
                <Charts/>

            </div>
        </section>
    );
};

export default DHome;