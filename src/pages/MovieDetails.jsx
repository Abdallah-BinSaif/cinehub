import React from 'react';
import {FaStar} from "react-icons/fa";
import {useLoaderData} from "react-router-dom";

const MovieDetails = () => {
    const movie = useLoaderData();
    console.log(movie)

    const {duration, genre, poster, rating, summary, title, year, _id} = movie
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
            <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    {/* Movie Poster */}
                    <div className="md:w-1/3">
                        <img
                            src={poster}
                            alt={title}
                            className="w-full h-full object-cover rounded-t-lg md:rounded-tr-none md:rounded-l-lg"
                        />
                    </div>
                    {/* Movie Details */}
                    <div className="md:w-2/3 p-6">
                        <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
                        <p className="text-sm text-gray-500 mt-1">Released: {year}</p>
                        <div className="flex items-center mt-4">
                            <FaStar className="text-yellow-500 mr-2" />
                            <span className="text-lg font-semibold">{rating}/10</span>
                        </div>
                        <div className="flex items-center mt-2">
                            <FaClock className="text-gray-500 mr-2" />
                            <span className="text-gray-700">{duration} minutes</span>
                        </div>
                        <div className="mt-4">
                            <h2 className="text-lg font-semibold text-gray-800">Genre:</h2>
                            <div className="flex flex-wrap mt-2">
                                {genre.map((g, index) => (
                                    <span
                                        key={index}
                                        className="badge badge-outline badge-sm mr-2 mt-1"
                                    >
                    {g}
                  </span>
                                ))}
                            </div>
                        </div>
                        <div className="mt-6">
                            <h2 className="text-lg font-semibold text-gray-800">Summary:</h2>
                            <p className="text-gray-700 mt-2">{summary}</p>
                        </div>
                        <div className="mt-6">
                            <button className="btn btn-primary">Go Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;