import { motion } from "motion/react"
import {FaStar} from "react-icons/fa";
import {useLocation, useNavigate} from "react-router-dom";
import useTheme from "../hooks/useTheme.jsx";

const MovieCard = ({movie, handleFavDelete}) => {
    const {isDarkMode} = useTheme();
    const navigate = useNavigate()
    const location = useLocation();

    const {duration, genre, poster, rating, summary, title, year, _id} = movie
    return (
        <div className={`rounded shadow-xl duration-300 transition border ${isDarkMode ? "border-dark-primary hover:shadow-dark-primary":"border-light-secondary hover:shadow-light-secondary"}  hover:shadow-2xl`}>
            <figure className="px-4 pt-4">
                <motion.img whileHover={{scale:1.02}} src={poster} alt={title} className="rounded-xl w-full h-56 object-cover" />
            </figure>
            <div className="card-body space-y-2">
                <h2 title={title} className="card-title text-lg font-bold">
                    {title.slice(0,14)}...
                    <div className="badge bg-secondary text-light-secondary border-none text-seco ml-2">{year}</div>
                </h2>
                <p title={summary} className="text-sm text-gray-600">{summary.slice(24)}...</p>
                <div className="flex items-center">
                    <FaStar className="text-gold mr-1" />
                    <span className="text-sm text-gold font-semibold">{rating}/10</span>
                </div>
                <div className="">
                    <span className="badge badge-outline border-pri text-gold mr-1">{duration} min</span>

                    <span className="badge badge-outline border-pri text-gold mr-1">{genre}</span>
                </div>
                <div className="">
                    {
                        location.pathname === "/favorites"
                            ? <motion.button whileTap={{y: -1.5}} whileHover={{scale:1.05}} onClick={()=>handleFavDelete(_id)} className={`py-1 px-2 text-sm rounded ${isDarkMode ? "bg-dark-primary":"bg-light-primary text-light-secondary"}`}>Delete Favorite</motion.button>
                            : <motion.button whileTap={{y: -1.5}} whileHover={{scale:1.05}} onClick={()=> navigate(`/details/${_id}`)} className={`py-1 px-2 text-sm rounded ${isDarkMode ? "bg-dark-primary":"bg-light-primary text-light-secondary"}`}>See Details</motion.button>
                    }

                </div>
            </div>
        </div>
    );
};

export default MovieCard;