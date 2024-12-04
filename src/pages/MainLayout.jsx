import React from 'react';
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

const MainLayout = () => {
    return (
        <div className={"min-h-screen bg-[#fff]"}>
            <Navbar/>
            <Outlet/>

            MainLayout.jsx
        </div>
    );
};

export default MainLayout;