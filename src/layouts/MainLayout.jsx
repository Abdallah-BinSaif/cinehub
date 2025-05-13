
import {Outlet} from "react-router-dom";
import Navbar from "../shared/Navbar.jsx";
import Footer from "../shared/Footer.jsx";
import useTheme from "../hooks/useTheme.jsx";

const MainLayout = () => {
    const {isDarkMode} = useTheme()
    return (
        <div className={`min-h-screen ${isDarkMode ? "dark-mode":"light-mode"}`}>
            <Navbar/>
            <div className={"min-h-[calc(100vh-346px)]"}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;