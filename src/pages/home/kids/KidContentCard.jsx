
const KidContentCard = ({item}) => {
    const imageUrl = item.imageUrl

    return (
        <div className="flex-none w-full mr-4 rounded-lg overflow-hidden shadow-lg m-2 hover:-translate-y-0.5">
            <img className="w-full h-48 md:h-56 object-cover" src={imageUrl} alt={item.title} onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/300x450/FF69B4/FFFFFF?text=${encodeURIComponent(item.title)}`; }} />
            <div className="p-2 text-center bg-light-secondary">
                <h3 className="text-sm font-semibold truncate">{item.title}</h3>
            </div>
        </div>
    );
};

export default KidContentCard;