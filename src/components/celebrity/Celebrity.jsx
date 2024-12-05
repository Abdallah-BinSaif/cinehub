import React, { useState } from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const CelebrityCard = ({ celebrity }) => {
    const { name, photo, awards, socialMedia } = celebrity;

    return (
        <div className="card w-64 bg-base-100 shadow-xl">
            <figure className="h-48">
                <img src={photo} alt={name} className="object-cover w-full h-full" />
            </figure>
            <div className="card-body text-center">
                <h2 className="card-title">{name}</h2>
                <p className="text-gray-600">Awards: {awards}</p>
                <div className="flex justify-center space-x-4 mt-4">
                    {socialMedia.instagram && (
                        <a
                            href={socialMedia.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-600 text-2xl hover:text-pink-800"
                        >
                            <FaInstagram />
                        </a>
                    )}
                    {socialMedia.twitter && (
                        <a
                            href={socialMedia.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 text-2xl hover:text-blue-700"
                        >
                            <FaTwitter />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

const CelebritySlider = ({ celebrities }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (currentIndex < celebrities.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0); // Loop back to the first slide
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(celebrities.length - 1); // Loop back to the last slide
        }
    };

    return (
        <div className="relative flex items-center justify-center w-full overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {celebrities.map((celebrity, index) => (
                    <div key={index} className="flex-shrink-0 w-64 mx-2">
                        <CelebrityCard celebrity={celebrity} />
                    </div>
                ))}
            </div>

            {/* Prev and Next buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-0 bg-gray-800 text-white p-3 rounded-full top-1/2 transform -translate-y-1/2"
            >
                ❮
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 bg-gray-800 text-white p-3 rounded-full top-1/2 transform -translate-y-1/2"
            >
                ❯
            </button>
        </div>
    );
};

const App = () => {
    const celebrities = [
        {
            name: "Leonardo DiCaprio",
            photo: "https://via.placeholder.com/150",
            awards: 3,
            socialMedia: {
                instagram: "https://instagram.com/leonardo",
                twitter: "https://twitter.com/leonardo",
            },
        },
        {
            name: "Scarlett Johansson",
            photo: "https://via.placeholder.com/150",
            awards: 2,
            socialMedia: {
                instagram: "https://instagram.com/scarlett",
                twitter: "https://twitter.com/scarlett",
            },
        },
        {
            name: "Robert Downey Jr.",
            photo: "https://via.placeholder.com/150",
            awards: 3,
            socialMedia: {
                instagram: "https://instagram.com/robertdowneyjr",
                twitter: "https://twitter.com/robertdowneyjr",
            },
        },
        {
            name: "Emma Watson",
            photo: "https://via.placeholder.com/150",
            awards: 1,
            socialMedia: {
                instagram: "https://instagram.com/emmawatson",
                twitter: "https://twitter.com/emmawatson",
            },
        },
        // Add more celebrities as needed...
    ];

    return (
        <div className="p-4">
            <CelebritySlider celebrities={celebrities} />
        </div>
    );
};

export default App;
