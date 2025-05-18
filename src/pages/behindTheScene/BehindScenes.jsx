import {useEffect, useState} from "react";
import BehindCard from "../../components/BehindCard.jsx";
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {Swiper,SwiperSlide} from "swiper/react";
import SectionHeading from "../../components/SectionHeading.jsx";
const BehindScenes = () => {
    const [explosive, setExplosive] = useState([]);
    useEffect(() => {
        fetch("./explosive.json")
            .then(res => res.json())
            .then(data => {
                setExplosive(data)
            })
    }, []);
    return (
        <section className={"screen px-4"}>
            <SectionHeading heading={"Explore What Happen Behind"} subHeading={"explore movies"}/>
            <Swiper
                slidesPerView={3}
                spaceBetween={15}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"

            >
                {
                    // TODO: here id should me a problem have to change
                    explosive.map(item => <SwiperSlide className={""} key={item.id}>
                        <BehindCard
                                    title={item.title}
                                    duration={item.duration}
                                    thumbnail={item.thumbnail}
                        ></BehindCard>
                    </SwiperSlide> )
                }
            </Swiper>
        </section>
    );
};

export default BehindScenes;