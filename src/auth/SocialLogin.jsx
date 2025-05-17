import {useContext} from 'react';
import {FcGoogle} from "react-icons/fc";
import Swal from "sweetalert2";
import {authContext} from "../provider/AuthProvider.jsx";
import {useNavigate} from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure.jsx";

const SocialLogin = ({going}) => {
    const {signInWithGoogle} = useContext(authContext);
    const navigate = useNavigate();
    const secureAxios = useAxiosSecure();

    const handleGoogleSignIn = () => {
        signInWithGoogle().then(result => {
            secureAxios.patch("/users",{
                email: result.user.email,
                role:"user",
                uid:result.user.uid,
                accountCreated: result.user.metadata.createdAt})
                .then(res=>{

                    if(res.data.acknowledged){
                        navigate(going)
                        Swal.fire(`Hi! ${result.user.displayName}`)
                    }

                }).catch(err=>{
                Swal.fire(`${err.code}`)
            })

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