import useTheme from "../hooks/useTheme.jsx";
import {Outlet} from "react-router-dom";
import DNavbar from "../dashboard/shared/DNavbar.jsx";
import { RiMenuFold4Line, RiMenuFold3Line } from "react-icons/ri";
import {useState} from "react";

const Dashboard = () => {
    const {isDarkMode} = useTheme()
    const [isShowMenu, setIsShowMenu] =useState(false)
    console.log(isShowMenu)
    return (
        <div className={`${isDarkMode ? "dark-mode":"light-mode"}`}>
            <div className={"flex lg:justify-end"}>
                <div className={`lg:pl-24 fixed left-0 z-10 lg:w-2/12 transition duration-1000 ${isShowMenu ? `pt-6 md:pt-12 pl-2 ${isDarkMode ? "bg-dark-secondary/60":"bg-light-secondary/60"}`:"hidden"} lg:flex border-r-2 border-dark-primary lg:flex-col justify-between min-h-screen py-8 `}>
                    <DNavbar/>
                </div>
                <div className={"z-10 fixed top-1 md:top-6 left-2 lg:hidden"}>
                    <div onClick={()=> setIsShowMenu(!isShowMenu)} className={"text-3xl cursor-pointer"}>{isShowMenu ? <RiMenuFold3Line/>: <RiMenuFold4Line/>}</div>
                </div>
                <div className={"w-full lg:w-9/12 min-h-screen"}>
                    <Outlet/>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;