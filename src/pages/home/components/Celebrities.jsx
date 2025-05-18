import {useEffect, useState} from 'react';
import CelebrityCard from "../../../components/CelebrityCard.jsx";
import SectionHeading from "../../../components/SectionHeading.jsx";

const Celebrities = () => {
    const [celebrity, setCelebrity] = useState([])

    useEffect(() => {
        fetch("./celebrity.json")
            .then(res => res.json())
            .then(data => {
                setCelebrity(data)

            })
    }, []);
    return (
            <section className={"screen"}>
                <SectionHeading heading={"Most Awarded Celebrities"} subHeading={"Focus on them"}/>

                <div className={"flex flex-col md:flex-row pr-4 md:overflow-scroll gap-12 md:gap-8 container mx-auto"}>
                    {
                        celebrity?.map((item, idx) => <CelebrityCard key={idx} celebrity={item}/>)
                    }

                </div>
            </section>
    );
};

export default Celebrities;