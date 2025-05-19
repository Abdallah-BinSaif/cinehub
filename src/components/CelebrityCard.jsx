
import { FaInstagram } from "react-icons/fa";
import useTheme from "../hooks/useTheme.jsx";
import { FaXTwitter} from "react-icons/fa6";

const CelebrityCard = ({ celebrity }) => {
    const { name, photo, awards, socialMedia } = celebrity;
    const {isDarkMode} = useTheme();

    return (
        <div className={`w-full mx-3 md:w-4/12 p-8 hover:shadow-lg ${isDarkMode ? "border-dark-secondary":"border-light-secondary hover:shadow-light-secondary"} rounded-3xl  md:rounded-full flex flex-col items-center`}>
            <figure className="h-48 w-48 rounded-full">
                <img src={photo} alt={name} className="object-cover w-full h-full rounded-full" />
            </figure>
            <div className="text-center p-4 ">
                <h2 className="card-title text-xl font-semibold">{name}</h2>
                <p>Awards: {awards}</p>
                <div className={`flex ${isDarkMode ? "text-dark-primary" : "text-light-accent"} justify-center space-x-4 mt-4`}>
                    {socialMedia.instagram && (
                        <a
                            href={socialMedia.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl"
                        >
                            <FaInstagram />
                        </a>
                    )}
                    {socialMedia.twitter && (
                        <a
                            href={socialMedia.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl"
                        >
                            <FaXTwitter />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CelebrityCard;
