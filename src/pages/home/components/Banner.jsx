import React from "react";

const Banner = () => {
    const slides = [
        {
            id: 1,
            title: "Discover Blockbusters",
            description: "Explore the latest and greatest movies from all genres.",
            image: "https://i.ibb.co/k1wwVDc/Discover-Blockbusters.jpg",
        },
        {
            id: 2,
            title: "Top Picks for You",
            description: "Tailored recommendations based on your interests.",
            image: "https://i.ibb.co/kcxYXPx/Top-Picks-for-You.jpg",
        },
        {
            id: 3,
            title: "Upcoming Releases",
            description: "Stay ahead of the curve with upcoming movie releases.",
            image: "https://i.ibb.co/KGnyczW/Upcoming-Releases.jpg",
        },
    ];

    return (
        <div className="carousel rounded-xl w-full bg-base-200">
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
                    <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
                        <h2 className="text-6xl text-pri font-bold">{slide.title}</h2>
                        <p className="text-lg text-pri mt-2">{slide.description}</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
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
    );
};

export default Banner;
