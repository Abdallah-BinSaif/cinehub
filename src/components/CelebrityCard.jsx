import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const CelebrityCard = ({ celebrity }) => {
    const { name, photo, awards, socialMedia } = celebrity;

    return (
        <div className="w-4/12 p-8 bg-base-100 shadow-xl rounded-lg flex flex-col items-center">
            <figure className="h-48 w-48 rounded-full ">
                <img src={photo} alt={name} className="object-cover w-full h-full rounded-full" />
            </figure>
            <div className="card-body text-center p-4">
                <h2 className="card-title text-xl font-semibold">{name}</h2>
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

export default CelebrityCard;
