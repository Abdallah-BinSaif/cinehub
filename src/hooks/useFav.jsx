import {useQuery} from "@tanstack/react-query";
import useAuth from "./useAuth.jsx";
import axiosSecure from "../axios/SecureAxios.jsx";

const useFav = () => {
    const {currentUser} = useAuth()

    const {data:favorites, refetch} = useQuery({
        queryKey:["fav", currentUser.email],
        queryFn: async ()=>{
            const data = await axiosSecure.get(`/favorites?email=${currentUser.email}`)
            return data.data || []
        }
    })
    return {favorites, refetch}
};

export default useFav;