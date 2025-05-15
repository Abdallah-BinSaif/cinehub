import MovieCard from "../../../components/MovieCard.jsx";
import Swal from "sweetalert2";
import useFav from "../../../hooks/useFav.jsx";
import axiosSecure from "../../../axios/SecureAxios.jsx";
import SectionHeading from "../../../components/SectionHeading.jsx";

const Favorites = () => {

    const {favorites, refetch} = useFav()

    const handleFavDelete = (id) => {
        axiosSecure.delete(`/favorites/${id}`)
            .then(res => {
                if(res.data.deletedCount){
                    refetch()
                    Swal.fire("Deleted from Your Favorite List")
                }
                else{
                    Swal.fire("Can't delete this item")
                }
            })
    }
    return (
        <div>
            <SectionHeading heading={"Favorites Items"} subHeading={"stay with us"} />
            <div className={"container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-8 gap-3"}>
                {
                    favorites?.map(item => <MovieCard key={item._id} movie={item} handleFavDelete={handleFavDelete}></MovieCard>)
                }
            </div>
        </div>
    );
};

export default Favorites;