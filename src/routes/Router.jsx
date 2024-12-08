import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home.jsx";
import MainLayout from "../pages/MainLayout.jsx";
import AllMovies from "../pages/AllMovies.jsx";
import AddMovie from "../pages/AddMovie.jsx";
import MovieDetails from "../pages/MovieDetails.jsx";
import NotFound from "../pages/NotFound.jsx";
import Login from "../components/authentication/Login.jsx";
import Registration from "../components/authentication/Registration.jsx";
import Private from "../components/authentication/Private.jsx";
import Favorites from "../pages/Favorites.jsx";
import Update from "../pages/Update.jsx";
import BehindScenes from "../pages/BehindScenes.jsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Home/>
            },{
                path: "/all",
                element: <AllMovies/>,
                loader: ()=> fetch("https://movie-portal-server-pink-one.vercel.app/cinemas")
            },{
                path: "/add",
                element: <Private><AddMovie/></Private>
            },{
                path: "/favorites",
                element: <Private><Favorites/></Private>
            },{
                path: "/behind",
                element: <BehindScenes/>
            },{
                path: "/details/:id",
                loader: ({params})=>fetch(`https://movie-portal-server-pink-one.vercel.app/cinemas/${params.id}`),
                element: <Private><MovieDetails/></Private>
            },{
                path: "/login",
                element: <Login></Login>
            },{
                path: "/register",
                element: <Registration></Registration>
            },{
                path: "/update/:id",
                loader: ({params})=>fetch(`https://movie-portal-server-pink-one.vercel.app/cinemas/${params.id}`),
                element: <Private><Update></Update></Private>
            },
        ]
    },
]);