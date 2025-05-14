import MovieCard from "../../components/MovieCard.jsx";
import Swal from "sweetalert2";
import useFav from "../../hooks/useFav.jsx";
import axiosSecure from "../../axios/SecureAxios.jsx";

const Favorites = () => {

    const {favorites, refetch} = useFav()

    console.log(favorites)
    const handleFavDelete = (id) => {
        axiosSecure.delete(`/favorites/${id}`)
            .then(res => {
                if(res.data.deletedCount){
                    refetch
                    Swal.fire("Deleted from Your Favorite List")
                }
                else{
                    Swal.fire("Can't delete this item")
                }
            })
        // fetch(`https://movie-portal-server-pink-one.vercel.app/favorites/${id}`,{
        //     method: "DELETE"
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if(data.deletedCount){
        //             const remaining = favorites.filter(item => item._id !== id)
        //             setFavorites(remaining)
        //             Swal.fire("Deleted from Your Favorite List")
        //         }
        //         else{
        //             Swal.fire("Can't delete this item")
        //         }
        //     })
    }
    return (
        <div>
            <div className={"container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-3"}>
                {
                    favorites?.map(item => <MovieCard key={item._id} movie={item} handleFavDelete={handleFavDelete}></MovieCard>)
                }
            </div>
        </div>
    );
};

export default Favorites;