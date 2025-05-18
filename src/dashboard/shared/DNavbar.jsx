import useTheme from "../../hooks/useTheme.jsx";
import {Link, NavLink} from "react-router-dom";
import {motion} from "motion/react";
import useAuth from "../../hooks/useAuth.jsx";

const DNavbar = () => {
    const {isDarkMode, toggleDarkMode} = useTheme();
    const {currentUser,signOutUser} = useAuth();

    const lists = <>
        <li><NavLink className={({isActive}) => isActive ? "text-light-accent" : ""} to={"/dashboard/home"}>Home</NavLink>
        </li>
        <li><NavLink className={({isActive}) => isActive ? "text-light-accent" : ""} to={"/dashboard/add"}>Add
            Movie</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? "text-light-accent" : ""} to={"/dashboard/favorites"}>Favourites</NavLink></li>
    </>
    const profileList = <>
        <li><NavLink className={({isActive}) => isActive ? "text-light-accent" : ""} to={"/dashboard/profile"}>Profile</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? "text-light-accent" : ""} to={"/dashboard/home"}>Dashboard</NavLink></li>

    </>
    return (
        <>
            {/* upper dashboard*/}
            <div className={""}>
                <Link to={"/"} className={`text-3xl tracking-wider font-extrabold hover:cursor-pointer ${isDarkMode ? "text-dark-accent" : "text-light-accent"}`}>CineHub</Link>
                <ul className={`font-semibold space-y-2 mt-12 ${isDarkMode ? "" : ""}`}>
                    {lists}
                </ul>
            </div>
            {/* Lower dashboard*/}
            <div className={`${isDarkMode? "bg-dark-secondary":"bg-light-secondary"} rounded-l-full px-4 mb-8 flex items-center justify-between`}>

                {
                    currentUser &&
                    <div className="dropdown dropdown-top">
                        <div tabIndex={0} role="button" className="avatar">
                            <div className="w-10 rounded-full">
                                <motion.img
                                    whileHover={{scale: 1.1}}
                                    referrerPolicy={"no-referrer"}
                                    alt={currentUser?.displayName}
                                    title={currentUser?.displayName} src={currentUser?.photoURL}/>
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content text-light-text bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {profileList}
                            <li>
                                <button onClick={signOutUser}><Link
                                    to={"/login"}>Sign Out</Link></button>
                            </li>
                        </ul>
                    </div>
                }

                <button onClick={toggleDarkMode}
                        className={`m-2 p-1 px-3 ${isDarkMode ? "border-dark-primary" : "border-light-primary"} border-2 rounded-full`}>
                    {
                        isDarkMode ?
                            <motion.svg animate={{x: 10, rotate: 30}} transition={{duration: .5}}
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/>
                            </motion.svg>
                            : <motion.svg animate={{x: -10, rotate: -30}} transition={{duration: .2}}
                                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                          className="size-6 -translate-x-2 duration-500">
                                <path
                                    d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z"/>
                            </motion.svg>

                    }
                </button>
            </div>

        </>
    );
};

export default DNavbar;