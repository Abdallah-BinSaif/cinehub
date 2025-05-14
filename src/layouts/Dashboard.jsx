import useTheme from "../hooks/useTheme.jsx";
import {Outlet} from "react-router-dom";
import DNavbar from "../dashboard/shared/DNavbar.jsx";

const Dashboard = () => {
    const {isDarkMode} = useTheme()
    return (
        <div className={`${isDarkMode ? "dark-mode":"light-mode"}`}>
            <div className={"flex"}>
                <div className={"pl-24 pt-8 pb-8 w-2/12 border-r-2 border-dark-primary min-h-screen flex flex-col justify-between"}>
                    <DNavbar/>
                </div>
                <div className={"pr-24 w-9/12 min-h-screen"}>
                    <Outlet/>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;