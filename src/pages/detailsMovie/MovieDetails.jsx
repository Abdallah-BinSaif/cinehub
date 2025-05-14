import {FaClock, FaStar} from "react-icons/fa";
import {useLoaderData, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth.jsx";
import useTheme from "../../hooks/useTheme.jsx";
import { motion } from "motion/react"

const MovieDetails = () => {
    const navigate = useNavigate();
    const movie = useLoaderData();
    const {currentUser} = useAuth();
    const {isDarkMode} = useTheme();


    const {duration, genre, poster, rating, summary, title, year, _id} = movie

    const handleDelete = (id) => {
        fetch(`https://movie-portal-server-pink-one.vercel.app/cinemas/${id}`,{
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
        fetch(`https://movie-portal-server-pink-one.vercel.app/favorites`,{
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

                            <div className="mt-6 flex gap-4">
                                <motion.button
                                    whileHover={{y:-2}}
                                    whileTap={{y:2}}
                                    onClick={() => handleDelete(_id)}
                                    className="btnOutline text-error flex-1"
                                >
                                    Delete Movie
                                </motion.button>
                                <motion.button
                                    whileHover={{y:-2}}
                                    whileTap={{y:2}}
                                    onClick={handleFavorite}
                                    className={`border-none rounded ${isDarkMode ? "bg-dark-primary text-light-secondary":"bg-light-primary text-light-secondary"} flex-1`}
                                >
                                    Add to Favorite
                                </motion.button>
                                <motion.button
                                    whileHover={{y:-2}}
                                    whileTap={{y:2}}
                                    onClick={()=>navigate(`/update/${_id}`)}
                                    className={`border-none rounded ${isDarkMode ? "bg-dark-primary text-light-secondary":"bg-light-primary text-light-secondary"} flex-1`}
                                >
                                    Update Movie
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
        ;
};

export default MovieDetails;