import React from 'react';
import {FaPlay} from "react-icons/fa";

const BehindCard = ({thumbnail, title,duration}) => {
    return (
        <div
            className="relative min-w-64 h-64 rounded-lg overflow-hidden shadow-md bg-cover bg-center"
            style={{backgroundImage: `url(${thumbnail})`}}
        >
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <button className="p-3 bg-white text-black rounded-full shadow-lg hover:scale-110 transition-transform">
                    <FaPlay className="text-xl"/>
                </button>
            </div>

            {/* Info Section */}
            <div className="absolute bottom-0 left-0 w-full p-2">
                <h3 className="text-sm font-semibold truncate">{title}</h3>
                <p className="text-xs">{duration}</p>
            </div>
        </div>
    );
};

export default BehindCard;