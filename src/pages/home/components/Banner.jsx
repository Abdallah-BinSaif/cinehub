import useTheme from "../../../hooks/useTheme.jsx";



const Banner = () => {
    // const {isDarkMode} = useTheme()
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

    return (
        <section className={"screen"}>
            <div className="carousel h-[800px] rounded w-full">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        id={`slide${index + 1}`}
                        className="carousel-item relative w-full"
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full object-cover"
                        />
                        <div
                            className={`absolute left-0 top-0 text-light-secondary w-full h-full bg-light-primary/30 flex flex-col justify-center items-center`}>
                            <h2 className="text-6xl text-pri font-bold">{slide.title}</h2>
                            <p className="text-lg text-pri mt-2">{slide.description}</p>
                        </div>
                        <div
                            className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a
                                href={`#slide${index === 0 ? slides.length : index}`}
                                className="btn btn-circle btn-sm"
                            >
                                ❮
                            </a>
                            <a
                                href={`#slide${index === slides.length - 1 ? 1 : index + 2}`}
                                className="btn btn-circle btn-sm"
                            >
                                ❯
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
};

export default Banner;
