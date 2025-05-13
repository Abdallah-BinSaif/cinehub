import React, {useContext} from 'react';
import {authContext} from "../provider/AuthProvider.jsx";
import {Navigate, useLocation} from "react-router-dom";
import {Vortex} from "react-loader-spinner";

const Private = ({children}) => {
    const {loading, currentUser} = useContext(authContext);
    const location = useLocation();

    if(loading){
        return (
            <div className={"min-h-screen flex flex-col justify-center items-center"}>
                <Vortex
                    visible={true}
                    height="180"
                    width="180"
                    ariaLabel="vortex-loading"
                    wrapperStyle={{}}
                    wrapperClass="vortex-wrapper"
                    colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                />
                <div className={"font-bold text-3xl"}>Loading.................</div>
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