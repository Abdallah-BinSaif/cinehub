import {useEffect, useState} from "react";
import BehindCard from "../../components/BehindCard.jsx";
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {Swiper,SwiperSlide} from "swiper/react";
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
        <div className={"screen py-12"}>
            <h2 className={"text-center text-xl md:text-3xl lg:text-5xl mb-8"}>Explore What Happen Behind</h2>
            <Swiper
                slidesPerView={3}

                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"

            >
                {
                    // TODO: here id should me a problem have to change
                    explosive.map(item => <SwiperSlide key={item.id}>
                        <BehindCard
                                    title={item.title}
                                    duration={item.duration}
                                    thumbnail={item.thumbnail}
                        ></BehindCard>
                    </SwiperSlide> )
                }
            </Swiper>
        </div>
    );
};

export default BehindScenes;