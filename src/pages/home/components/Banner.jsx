import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import useTheme from "../../../hooks/useTheme.jsx";

const Banner = () => {
    const slides = [
        {
            id: 1,
            title: "Discover Blockbusters",
            description: "Explore the latest and greatest movies from all genres.",
            image: "https://i.ibb.co/Xrb1ZwBR/slide3.jpg",
        },
        {
            id: 2,
            title: "Top Picks for You",
            description: "Tailored recommendations based on your interests.",
            image: "https://i.ibb.co/MxKVSpNg/slide1.jpg",
        },
        {
            id: 3,
            title: "Upcoming Releases",
            description: "Stay ahead of the curve with upcoming movie releases.",
            image: "https://i.ibb.co/XxGs0bQT/slide2.jpg",
        },
    ];
    const {isDarkMode} = useTheme();

    return (
        <section className={"screen"}>
            <Swiper navigation={true} modules={[Navigation]} className={"swiper h-[600px]"}>
                {
                    slides.map(slide => <SwiperSlide style={{backgroundImage: `url("${slide.image}")`, backgroundSize: "cover", backgroundPosition: "center"}} key={slide.id}>
                        <div
                            className={`h-full ${isDarkMode ? "" : ""} text-light-secondary flex justify-center items-center`}>
                            <div className={"px-8 py-4 md:px-16 md:py-12 lg:px-36 lg:py-24 shadow-2xl rounded bg-light-secondary/60 text-light-accent text-center"}>
                                <h2 className="text-6xl font-bold">{slide.title}</h2>
                                <p className="text-lg mt-2">{slide.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
                {/*<SwiperSlide style={{backgroundImage: `url("${slides[0].image}")`}}>*/}
                {/*    <div*/}
                {/*        className={`h-full ${isDarkMode ? "" : ""} text-light-secondary flex flex-col justify-center items-center`}>*/}
                {/*        <div className={" px-36 py-24 bg-gradient- from-40% from-light-secondary text-center"}>*/}
                {/*            <h2 className="text-6xl font-bold">{slides[0].title}</h2>*/}
                {/*            <p className="text-lg mt-2">{slides[0].description}</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    /!*<div>*!/*/}
                {/*    /!*    <p className={"z-10"}>{slides[0].title}</p>*!/*/}
                {/*    /!*</div>*!/*/}
                {/*</SwiperSlide>*/}
                {/*<SwiperSlide>slide2</SwiperSlide>*/}
                {/*<SwiperSlide>slide3</SwiperSlide>*/}
            </Swiper>
            {/*<div className="carousel h-[600px] rounded w-full">*/}
            {/*    {slides.map((slide, index) => (*/}
            {/*        <div*/}
            {/*            key={slide.id}*/}
            {/*            id={`slide${index + 1}`}*/}
            {/*            className="carousel-item relative w-full"*/}
            {/*        >*/}
            {/*            <img*/}
            {/*                src={slide.image}*/}
            {/*                alt={slide.title}*/}
            {/*                className="w-full object-cover"*/}
            {/*            />*/}
            {/*            <div*/}
            {/*                className={`absolute left-0 top-0 text-light-secondary w-full h-full bg-light-primary/30 flex flex-col justify-center items-center`}>*/}
            {/*                <h2 className="text-6xl text-pri font-bold">{slide.title}</h2>*/}
            {/*                <p className="text-lg text-pri mt-2">{slide.description}</p>*/}
            {/*            </div>*/}
            {/*            <div*/}
            {/*                className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">*/}
            {/*                <a*/}
            {/*                    href={`#slide${index === 0 ? slides.length : index}`}*/}
            {/*                    className="btn btn-circle btn-sm"*/}
            {/*                >*/}
            {/*                    ❮*/}
            {/*                </a>*/}
            {/*                <a*/}
            {/*                    href={`#slide${index === slides.length - 1 ? 1 : index + 2}`}*/}
            {/*                    className="btn btn-circle btn-sm"*/}
            {/*                >*/}
            {/*                    ❯*/}
            {/*                </a>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </section>

    );
};

export default Banner;
