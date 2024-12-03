import React from 'react';
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div className={"min-h-screen bg-[#fff]"}>
            <div className={"max-w-2xl bg-[] h-96"}>
                <button className={"btn hover:bg-[#FFD700] bg-[#00BFFF] hover:text-[#2C3E50]"}>Button</button>
                <h4 className={"text-5xl font-semibold"}>The heading is here</h4>
                <h4 className={"text-3xl text-[] font-semibold"}>The heading is here</h4>
                <p className={"text-[#333333] font-normal"}>some text should be here</p>
            </div>
            <div className={"max-w-2xl bg-[] h-96"}></div>
            MainLayout.jsx
            <Outlet/>
        </div>
    );
};

export default MainLayout;