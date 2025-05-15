import useTheme from "../hooks/useTheme.jsx";

const SectionHeading = ({heading, subHeading}) => {
    const {isDarkMode} = useTheme()
    return (
        <div className={"mb-8 mt-12"}>
            <h3 className={`text-center ${isDarkMode ? "text-dark-accent":"text-light-accent"} text-xl md:text-3xl lg:text-5xl mt-8`}>{heading}</h3>
            <p className={"text-center text-lg md:text-xl"}>{subHeading}</p>
        </div>
    );
};

export default SectionHeading;