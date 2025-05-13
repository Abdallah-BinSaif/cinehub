import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import AllMovies from "../pages/allMovies/AllMovies.jsx";
import AddMovie from "../pages/addMovie/AddMovie.jsx";
import MovieDetails from "../pages/detailsMovie/MovieDetails.jsx";
import NotFound from "../pages/NotFound.jsx";
import Login from "../auth/Login.jsx";
import Registration from "../auth/Registration.jsx";
import Private from "../auth/Private.jsx";
import Favorites from "../pages/favorite/Favorites.jsx";
import Update from "../pages/updateMovie/Update.jsx";
import BehindScenes from "../pages/behindTheScene/BehindScenes.jsx";


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
                path: "/update/:id",
                loader: ({params})=>fetch(`https://movie-portal-server-pink-one.vercel.app/cinemas/${params.id}`),
                element: <Private><Update></Update></Private>
            },
        ]
    },
    {
        path: "/login",
        element: <Login></Login>
    },{
        path: "/register",
        element: <Registration></Registration>
    }
]);