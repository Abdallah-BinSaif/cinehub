import React, {useContext} from 'react';
import {FaClock, FaStar} from "react-icons/fa";
import {useLoaderData, useNavigate} from "react-router-dom";
import {authContext} from "../components/AuthProvider.jsx";
import Swal from "sweetalert2";

const MovieDetails = () => {
    const navigate = useNavigate();
    const movie = useLoaderData();
    const {currentUser} = useContext(authContext)


    const {duration, genre, poster, rating, summary, title, year, _id} = movie

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/cinemas/${id}`,{
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                navigate("/all")
                Swal.fire("Deleted From Cinema List")
            })
    }
    const handleFavorite = () => {
        const favId = _id+currentUser.email;
        console.log(favId)
        fetch(`http://localhost:5000/favorites`,{
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                favId,
                duration,
                genre,
                poster,
                rating,
                summary,
                title,
                year,
                favoriteEmail: currentUser.email
            })
        })
            .then(res => res.json())
            .then(data => {
                if(data.upsertedCount){
                    Swal.fire(`${title} added to Favorite list`)
                }else if(data.matchedCount){
                    Swal.fire(`${title} already exist in Favorite list`)
                }
            })
    }

    return (
        <div className={"max-w-4xl mx-auto"}>
            <div className="flex justify-center py-10 px-4">
                <div className="max-w-4xl w-full rounded-lg shadow-lg overflow-hidden">
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
                            <h1 className="text-3xl font-bold text-pri">{title}</h1>
                            <p className="text-sm text-gray-500 mt-1">Released: {year}</p>
                            <div className="flex items-center mt-4">
                                <FaStar className="text-gold mr-2"/>
                                <span className="text-lg text-third font-semibold">{rating}/10</span>
                            </div>
                            <div className="flex items-center mt-2">
                                <FaClock className="text-gold mr-2"/>
                                <span className="text-third">{duration} minutes</span>
                            </div>
                            <div className="mt-4">
                                <h2 className="text-lg font-semibold text-third">Genre:</h2>
                                <div className="flex flex-wrap mt-2">
                                    <span className="badge badge-outline  border-pri text-gold mr-2 mt-1">{genre}</span>
                                </div>
                            </div>
                            <div className="mt-6">
                                <h2 className="text-lg font-semibold text-third">Summary:</h2>
                                <p className="text-gray-700 mt-2">{summary}</p>
                            </div>
                            {/*<div className="mt-6">*/}
                            {/*    <button onClick={() => navigate("/all")} className="btn bg-pri text-seco hover:bg-gold">See*/}
                            {/*        all movies*/}
                            {/*    </button>*/}
                            {/*</div>*/}
                            <div className="mt-6 flex gap-4">
                                <button
                                    onClick={() => handleDelete(_id)}
                                    className="btn btn-error flex-1"
                                >
                                    Delete Movie
                                </button>
                                <button
                                    onClick={handleFavorite}
                                    className="btn bg-pri text-seco hover:bg-gold flex-1"
                                >
                                    Add to Favorite
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button
                onClick={()=> navigate("/all")}
                className="btn bg-pri my-10 mx-4 text-seco hover:bg-gold flex-1"
            >
                See all movie
            </button>
        </div>

    )
        ;
};

export default MovieDetails;