import {useContext} from 'react';
import {FcGoogle} from "react-icons/fc";
import Swal from "sweetalert2";
import {authContext} from "../provider/AuthProvider.jsx";
import {useNavigate} from "react-router-dom";

const SocialLogin = ({going}) => {
    const {signInWithGoogle} = useContext(authContext);
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        signInWithGoogle().then(result => {
            navigate(going)
            Swal.fire(`Hi! ${result.user.displayName}`)

        }).catch(err=>{
            Swal.fire(`${err.code}`)
        })
    }
    return (
        <div className="">
            <button
                onClick={handleGoogleSignIn}
                className="text-white btnOutline w-full flex justify-center items-center gap-3">Google<FcGoogle></FcGoogle></button>
            </div>
    );
};

export default SocialLogin;