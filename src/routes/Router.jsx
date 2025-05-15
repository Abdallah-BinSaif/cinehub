import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import AllMovies from "../pages/allMovies/AllMovies.jsx";
import AddMovie from "../dashboard/pages/addMovie/AddMovie.jsx";
import MovieDetails from "../pages/detailsMovie/MovieDetails.jsx";
import NotFound from "../pages/NotFound.jsx";
import Login from "../auth/Login.jsx";
import Registration from "../auth/Registration.jsx";
import Private from "../auth/Private.jsx";
import Favorites from "../dashboard/pages/favorites/Favorites.jsx";
import Update from "../dashboard/pages/updateMovie/Update.jsx";
import BehindScenes from "../pages/behindTheScene/BehindScenes.jsx";
import Dashboard from "../layouts/Dashboard.jsx";
import Profile from "../dashboard/pages/profile/Profile.jsx";
import DHome from "../dashboard/pages/home/DHome.jsx";


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
                path: "/behind",
                element: <BehindScenes/>
            },{
                path: "/details/:id",
                loader: ({params})=>fetch(`https://movie-portal-server-pink-one.vercel.app/cinemas/${params.id}`),
                element: <MovieDetails/>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard/>,
        errorElement: <NotFound/>,
        children:[
            {
                path: "/dashboard/home",
                element: <Private><DHome/></Private>
            },{
                path: "update/:id",
                loader: ({params})=>fetch(`https://movie-portal-server-pink-one.vercel.app/cinemas/${params.id}`),
                element: <Private><Update></Update></Private>
            },{
                path: "add",
                element: <Private><AddMovie/></Private>
            },{
                path: "favorites",
                element: <Private><Favorites/></Private>
            },{
                path: "details/:id",
                element: <Private><MovieDetails/></Private>
            },
            {
                path: "profile",
                element: <Private><Profile/></Private>
            }
        ],
    },
    {
        path: "/login",
        element: <Login></Login>
    },{
        path: "/register",
        element: <Registration></Registration>
    }
]);