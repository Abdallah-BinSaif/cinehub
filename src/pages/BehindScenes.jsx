import {useEffect, useState} from "react";
import BehindCard from "../components/behind the scenes/BehindCard.jsx";

const BehindScenes = () => {
    const [explosive, setExplosive] = useState([]);
    useEffect(() => {
        fetch("./explosive.json")
            .then(res => res.json())
            .then(data => {
                setExplosive(data)
            })
    }, []);
    console.log(explosive)
    return (
        <div className={"flex overflow-x-scroll gap-8 text-pri overflow-hidden container mx-auto"}>
            {
                explosive.map(item => <BehindCard
                    title={item.title}
                    duration={item.duration}
                    thumbnail={item.thumbnail}
                ></BehindCard>)
            }
        </div>
    );
};

export default BehindScenes;