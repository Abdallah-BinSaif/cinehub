import React, {useContext, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {authContext} from "../components/AuthProvider.jsx";
import MovieCard from "../components/MovieCard.jsx";
import Swal from "sweetalert2";

const Favorites = () => {
    const {currentUser} = useContext(authContext)
    const [favorites, setFavorites] = useState();
    useEffect(() => {
        fetch(`https://movie-portal-server-pink-one.vercel.app/favorites?email=${currentUser.email}`)
            .then(res => res.json())
            .then(data => {
                setFavorites(data)
            })
    }, []);
    const handleFavDelete = (id) => {
        fetch(`https://movie-portal-server-pink-one.vercel.app/favorites/${id}`,{
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount){
                    const remaining = favorites.filter(item => item._id !== id)
                    setFavorites(remaining)
                    Swal.fire("Deleted from Your Favorite List")
                }
                else{
                    Swal.fire("Can't delete this item")
                }
            })
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