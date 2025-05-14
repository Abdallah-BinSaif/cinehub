import {useQuery} from "@tanstack/react-query";
import axiosSecure from "../axios/SecureAxios.jsx";

const useCinema = () => {

    const {data:cinemas, refetch, isLoading} = useQuery({
        queryKey: ["cinema"],
        queryFn: async ()=>{
            const data = await axiosSecure.get("/cinemas")
            return data.data || []
        }
    })
    return {cinemas, refetch, isLoading}
};

export default useCinema;