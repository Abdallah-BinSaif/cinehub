import useTheme from "../hooks/useTheme.jsx";

const SectionHeading = ({heading, subHeading}) => {
    const {isDarkMode} = useTheme()
    return (
        <div className={"mb-2 md:mb-8 md:mt-12"}>
            <h3 className={`text-center ${isDarkMode ? "text-dark-accent":"text-light-accent"} font-semibold text-2xl md:text-3xl lg:text-5xl mt-8`}>{heading}</h3>
            <p className={"text-center text-sm md:text-xl"}>{subHeading}</p>
        </div>
    );
};

export default SectionHeading;