
import {Outlet} from "react-router-dom";
import Navbar from "../shared/Navbar.jsx";
import Footer from "../shared/Footer.jsx";

const MainLayout = () => {
    return (
        <div className={"min-h-screen"}>
            <Navbar/>
            <div className={"min-h-[calc(100vh-346px)]"}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;