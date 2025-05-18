import { motion } from "motion/react"
import useTheme from "../../../hooks/useTheme.jsx";
import { FaCheck } from "react-icons/fa";
import {Link} from "react-router-dom";
import useAuth from "../../../hooks/useAuth.jsx";

const SubscriptionCard = ({plan}) => {
    const {currentUser} = useAuth();
    const {isDarkMode} = useTheme();
    return (
        <div className={`flex flex-col items-center p-6 rounded-lg shadow-lg m-4 ${isDarkMode ? "bg-dark-secondary":"bg-light-secondary"} hover:-translate-y-1 w-full md:w-1/3`}>
            {/* Plan Title */}
            <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>

            {/* Plan Price */}
            <div className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-dark-accent":"text-light-accent"}`}>
                {plan.price === 'Free' ? 'Free' : `$${plan.price}`}
                {plan.price !== 'Free' && <span className="text-base font-normal">/{plan.duration}</span>}
            </div>

            {/* Plan Features */}
            <ul className="text-gray-300 flex-1 mb-6 text-center">
                {plan.features.map((feature, index) => (
                    <li key={index} className="mb-2 flex items-center">
                        {/* Placeholder check icon */}
                        <FaCheck className={`mr-2 ${isDarkMode ? "text-dark-accent":"text-light-accent"}`}/>
                        {feature}
                    </li>
                ))}
            </ul>

            {/* Call to Action Button */}
            <Link to={"/register"}>
                <motion.button
                    to={"/register"}
                    whileHover={{scale: 1.05}}
                    className={`text-sm border px-4 py-1 ${isDarkMode ? "" : "text-light-accent"} font-semibold rounded`}>
                    {currentUser?.email ? plan.name === "Free" ?"Subscribed":plan.buttonText:plan.buttonText}

                </motion.button>
            </Link>

        </div>
    );
};

export default SubscriptionCard;