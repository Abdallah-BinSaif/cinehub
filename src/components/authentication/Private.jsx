import React, {useContext} from 'react';
import {authContext} from "../AuthProvider.jsx";
import {Navigate} from "react-router-dom";

const Private = ({children}) => {
    const {loading, currentUser} = useContext(authContext);

    if(loading){
        return (
            <div className={"min-h-screen flex justify-center items-center"}>
                <div>Loading.................</div>
            </div>
        )
    }

    if(!currentUser){
        return <Navigate state={{from: location.pathname}} to={"/login"}/>
    }



    return (
        <div>
            {children}
        </div>
    );
};

export default Private;