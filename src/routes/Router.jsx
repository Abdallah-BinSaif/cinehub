import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home.jsx";
import MainLayout from "../pages/MainLayout.jsx";
import AllMovies from "../pages/AllMovies.jsx";
import AddMovie from "../pages/AddMovie.jsx";
import MovieDetails from "../pages/MovieDetails.jsx";
import NotFound from "../pages/NotFound.jsx";
import Login from "../components/authentication/Login.jsx";
import Registration from "../components/authentication/Registration.jsx";


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
                loader: ()=> fetch("http://localhost:5000/cinemas")
            },{
                path: "/add",
                element: <AddMovie/>
            },{
                path: "/extra",
                element: <Home/>
            },{
                path: "/details/:id",
                loader: ({params})=>fetch(`http://localhost:5000/cinemas/${params.id}`),
                element: <MovieDetails/>
            },{
                path: "/login",
                element: <Login></Login>
            },{
                path: "/register",
                element: <Registration></Registration>
            },
        ]
    },
]);