import axios from "axios";
import conf from "../conf/conf.js";


const axiosSecure = axios.create({
    baseURL: String(conf.vercelURL)

})

const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;