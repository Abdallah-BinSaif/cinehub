import React from 'react';
import {NavLink} from "react-router-dom";

const lists = <>
    <li><NavLink className={({isActive})=> isActive ? "bg-pri hover:bg-gold text-seco font-medium":"text-pri hover:bg-third" } to={"/"}>Home</NavLink></li>
    <li><NavLink className={({isActive})=> isActive ? "bg-pri hover:bg-gold text-seco font-medium":"text-pri hover:bg-third" } to={"/all"}>All Movies</NavLink></li>
    <li><NavLink className={({isActive})=> isActive ? "bg-pri hover:bg-gold text-seco font-medium":"text-pri hover:bg-third" } to={"/add"}>Add Movie</NavLink></li>
    <li><NavLink className={({isActive})=> isActive ? "bg-pri hover:bg-gold text-seco font-medium":"text-pri hover:bg-third" } to={"/extra"}>extra route</NavLink></li>

</>

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost hover:bg-gold hover:text-seco lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {lists}
                    </ul>
                </div>
                <a className="btn btn-ghost hover:bg-gold hover:text-seco text-xl">CineHub</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {lists}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <a className="btn bg-pri hover:bg-gold text-seco">Login</a>
                <a className="btn bg-pri hover:bg-gold text-seco">Sign up</a>
            </div>
        </div>
    );
};

export default Navbar;