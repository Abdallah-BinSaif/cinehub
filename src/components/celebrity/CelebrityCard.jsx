import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const CelebrityCard = ({ celebrity }) => {
    const { name, photo, awards, socialMedia } = celebrity;

    return (
        <div className="w-full md:w-4/12 p-8 border-8 border-pri shadow-xl rounded-3xl md:rounded-full flex flex-col items-center">
            <figure className="h-48 w-48 rounded-full border-2 border-pri">
                <img src={photo} alt={name} className="object-cover w-full h-full rounded-full" />
            </figure>
            <div className="card-body text-center p-4">
                <h2 className="card-title text-xl font-semibold">{name}</h2>
                <p>Awards: {awards}</p>
                <div className="flex justify-center space-x-4 mt-4">
                    {socialMedia.instagram && (
                        <a
                            href={socialMedia.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-pri hover:text-gold"
                        >
                            <FaInstagram />
                        </a>
                    )}
                    {socialMedia.twitter && (
                        <a
                            href={socialMedia.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-pri hover:text-gold"
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
