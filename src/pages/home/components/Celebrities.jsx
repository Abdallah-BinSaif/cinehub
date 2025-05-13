import React, {useEffect, useState} from 'react';
import CelebrityCard from "../../../components/CelebrityCard.jsx";

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
            <div className={"bg-gold-seco py-20 my-8"}>
                <h3 className={"text-3xl mb-6 font-bold text-pri container mx-auto"}>Most Awarded Celebrities</h3>
                <div className={"flex flex-col md:flex-row overflow-scroll gap-8 container mx-auto"}>
                    {
                        celebrity?.map((item, idx) => <CelebrityCard key={idx} celebrity={item}/>)
                    }

                </div>
            </div>
    );
};

export default Celebrities;