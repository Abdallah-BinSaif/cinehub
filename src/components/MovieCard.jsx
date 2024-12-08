import React from 'react';
import {FaStar} from "react-icons/fa";
import {useLocation, useNavigate} from "react-router-dom";

const MovieCard = ({movie, handleFavDelete}) => {
    const navigate = useNavigate()
    const location = useLocation();

    const {duration, genre, poster, rating, summary, title, year, _id} = movie
    return (
        <div className="card shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow">
            <figure className="px-4 pt-4">
                <img src={poster} alt={title} className="rounded-xl w-full h-56 object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-lg font-bold">
                    {title}
                    <div className="badge badge-secondary bg-gold border-none text-seco ml-2">{year}</div>
                </h2>
                <p className="text-sm text-gray-600">{summary}</p>
                <div className="flex items-center mt-2">
                    <FaStar className="text-gold mr-1" />
                    <span className="text-sm text-gold font-semibold">{rating}/10</span>
                </div>
                <div className="mt-2">
                    <span className="badge badge-outline border-pri text-gold mr-1">{duration} min</span>

                        <span className="badge badge-outline border-pri text-gold mr-1">{genre}</span>
                </div>
                <div className="card-actions justify-end mt-4">
                    {
                        location.pathname === "/favorites"
                            ? <button onClick={()=>handleFavDelete(_id)} className="btn-sm btn bg-pri text-seco hover:bg-gold">Delete Favorite</button>
                            : <button onClick={()=> navigate(`/details/${_id}`)} className="btn-sm btn bg-pri text-seco hover:bg-gold">See Details</button>
                    }

                </div>
            </div>
        </div>
    );
};

export default MovieCard;