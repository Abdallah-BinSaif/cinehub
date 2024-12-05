import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home.jsx";
import MainLayout from "../pages/MainLayout.jsx";
import AllMovies from "../pages/AllMovies.jsx";
import AddMovie from "../pages/AddMovie.jsx";
import MovieDetails from "../pages/MovieDetails.jsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <div>Error</div>,
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
            },
        ]
    },
]);