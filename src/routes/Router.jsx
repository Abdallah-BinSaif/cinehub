import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home.jsx";
import MainLayout from "../pages/MainLayout.jsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <div>Error</div>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
        ]
    },
]);