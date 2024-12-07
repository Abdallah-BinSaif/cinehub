import React, {useContext, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {authContext} from "../components/AuthProvider.jsx";
import MovieCard from "../components/MovieCard.jsx";

const Favorites = () => {
    const {currentUser} = useContext(authContext)
    const [favorites, setFavorites] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/favorites?email=${currentUser.email}`)
            .then(res => res.json())
            .then(data => {
                setFavorites(data)
            })
    }, []);
    const handleFavDelete = (id) => {
        fetch(`http://localhost:5000/favorites/${id}`,{
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div>
            <div className={"container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-3"}>
                {
                    favorites?.map(item => <MovieCard key={item._id} movie={item}></MovieCard>)
                }
            </div>
        </div>
    );
};

export default Favorites;