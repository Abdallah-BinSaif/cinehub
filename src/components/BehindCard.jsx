import {FaPlay} from "react-icons/fa";
import useTheme from "../hooks/useTheme.jsx";

const BehindCard = ({thumbnail, title,duration}) => {
    const {isDarkMode} = useTheme()
    return (
        <div
            className="relative min-w-64 h-64 rounded-lg overflow-hidden shadow-md bg-cover bg-center mb-12"
            style={{backgroundImage: `url(${thumbnail})`}}
        >
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
                <button className={`p-3 ${isDarkMode ? "text-dark-primary":"text-light-primary"}  rounded-full shadow-lg hover:scale-150 transition-transform`}>
                    <FaPlay className="text-xl"/>
                </button>
            </div>

            {/* Info Section */}
            <div className="absolute bottom-0 left-0 w-full p-2 bg-dark-secondary/40 text-light-secondary text-sm font-bold ">
                <div className={""}>
                    <h3>{title}</h3>
                    <p>{duration}</p>
                </div>

            </div>
        </div>
    );
};

export default BehindCard;