
import { FaHome } from "react-icons/fa";
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1920&q=80')",
            }}
        >
            <div className="bg-black bg-opacity-60 p-10 rounded-lg text-center">
                <h1 className="text-9xl font-bold text-primary">404</h1>
                <p className="text-2xl font-semibold mt-4">Oops! Page Not Found</p>
                <p className="mt-2">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <div className="mt-6">
                    <Link to={"/"} className="btn btn-primary flex items-center gap-2">
                        <FaHome />
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;