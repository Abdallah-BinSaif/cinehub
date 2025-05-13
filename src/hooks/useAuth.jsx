import {useContext} from "react";
import {authContext} from "../provider/AuthProvider.jsx";

const useAuth = () => {
    return useContext(authContext);
};

export default useAuth;