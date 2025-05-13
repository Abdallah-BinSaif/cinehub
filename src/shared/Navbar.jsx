import {Link, NavLink} from "react-router-dom";
import useAuth from "../hooks/useAuth.jsx";
import useTheme from "../hooks/useTheme.jsx";

const lists = <>
    <li><NavLink className={({isActive})=> isActive ? "text-light-accent":"" } to={"/"}>Home</NavLink></li>
    <li><NavLink className={({isActive})=> isActive ? "text-light-accent":"" } to={"/all"}>All Movies</NavLink></li>
    <li><NavLink className={({isActive})=> isActive ? "text-light-accent":"" } to={"/behind"}>Behind the Scenes</NavLink></li>

</>

const Navbar = () => {
    const {currentUser, signOutUser} = useAuth();
    const {isDarkMode} = useTheme();
    console.log(isDarkMode)
    return (
        <header className={`${isDarkMode ? "bg-dark-secondary":"bg-light-secondary"} sticky top-0 z-10`}>
            <div className="navbar screen">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button"
                             className="btn btn-ghost hover:bg-gold hover:text-seco lg:hidden">
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
                            className="dropdown-content z-[1] mt-3 w-52 p-2 shadow">
                            {lists}
                        </ul>
                    </div>
                    <a className="text-3xl hover:cursor-pointer">CineHub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-8 px-1 font-semibold">
                        {lists}
                    </ul>
                </div>

                <div className={"navbar-end gap-4"}>
                    {
                        currentUser ?
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            referrerPolicy={"no-referrer"}
                                            alt={currentUser.displayName}
                                            title={currentUser.displayName} src={currentUser.photoURL}/>
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li>
                                        <button onClick={signOutUser}><Link
                                            to={"/login"}>Sign Out</Link></button>
                                    </li>
                                </ul>
                            </div> : <>
                            <Link to={"/login"} className="btn bg-pri hover:bg-gold text-seco">Login</Link>
                            <Link to={"/register"} className="btn bg-pri hover:bg-gold text-seco">Sign up</Link>
                        </>
                    }
                </div>



            </div>
        </header>
    );
};

export default Navbar;