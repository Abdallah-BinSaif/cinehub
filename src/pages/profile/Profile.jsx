import useAuth from "../../hooks/useAuth.jsx";
import {format} from "date-fns";
import useTheme from "../../hooks/useTheme.jsx";


const Profile = () => {

    const {currentUser} = useAuth();
    const {isDarkMode} = useTheme();

    return (
        <div className={"p-12 min-h-screen "}>
            <div className={`flex items-center gap-8 p-8 ${isDarkMode ? "bg-dark-secondary":"bg-light-secondary"} rounded`}>
                <img alt={currentUser?.title} src={currentUser.photoURL} className={"w-64 rounded"}/>
                <div>
                    <h3 className={"text-xl md:text-2xl lg:text-3xl uppercase"}>{currentUser.displayName}</h3>
                    <p className={"font-thin"}>{currentUser.email}</p>
                    <p>{format(new Date(Number(currentUser.metadata.createdAt)), "PPPPpppp")}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;