import useTheme from "../../hooks/useTheme.jsx";

const Card1 = ({count, title}) => {
    const {isDarkMode} = useTheme();
    return (
        <div className={`md:w-72 h-36 px-2}] ${isDarkMode ? "bg-dark-secondary":"bg-light-secondary"} flex flex-col justify-center items-center rounded`}>
            <p className={"text-6xl font-bold"}>{count}+</p>
            <h4 className={"font-bold text-xl"}>{title}</h4>
        </div>
    );
};

export default Card1;