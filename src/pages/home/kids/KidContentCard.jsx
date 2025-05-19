import useTheme from "../../../hooks/useTheme.jsx";

const KidContentCard = ({item}) => {
    const {isDarkMode} = useTheme()

    return (
        <div className="flex-none md:w-full rounded-lg overflow-hidden shadow-lg hover:-translate-y-0.5">
            <img className="w-full h-48 md:h-56 object-cover object-center " src={item.imageUrl} alt={item.title} onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/300x450/FF69B4/FFFFFF?text=${encodeURIComponent(item.title)}`; }} />
            <div className={`p-2 text-center  ${isDarkMode ? "bg-dark-secondary":"bg-light-secondary"}`}>
                <h3 className="text-sm font-semibold truncate">{item.title}</h3>
            </div>
        </div>
    );
};

export default KidContentCard;