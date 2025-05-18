import {useContext} from 'react';
import {useForm} from "react-hook-form";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {authContext} from "../provider/AuthProvider.jsx";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin.jsx";
import useAuth from "../hooks/useAuth.jsx";
import useAxiosSecure from "../hooks/useAxiosSecure.jsx";

const Login = () => {
    const {register,
        handleSubmit,
        formState: {errors},
    } = useForm()
    const {signInUser} = useAuth();
    const navigate = useNavigate();
    const location = useLocation()
    const secureAxios = useAxiosSecure();

    const going = location?.state?.from || "/";

    return (

            <div className="loginBG flex flex-col justify-center items-center">
                <div className="">
                    <h2 className="text-5xl font-bold">Login now!</h2>
                </div>
                <div className="px-4 w-full lg:w-4/12">
                    <form onSubmit={handleSubmit((data)=>{
                        const {email, password}=data;

                        secureAxios.get(`/users/${email}`)
                            .then(res => {
                                if(res.data === email){
                                    signInUser(email, password).then(()=>{
                                        Swal.fire("Login Successful")
                                        navigate(going)
                                    }).catch(err => {
                                        if(err){
                                            Swal.fire("Login Failed")
                                        }
                                    })
                                }
                            })
                            .catch(err => Swal.fire(err.response.data))

                    })} className="">

                        <div className="form-control">
                            <label className="label">
                                <span className="">Email</span>
                            </label>
                            <input type="email" {...register("email", {
                                required: "Email is required"
                            }) }
                                   placeholder="email"
                                   className=""
                                   required/>
                            <p>{errors?.email?.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="">Password</span>
                            </label>
                            <input
                                type="password"
                                {...register("password", {
                                    required: "Give a Password",
                                })}
                                placeholder="password"
                                className="text-black py-2 px-2" required/>
                            <p className={"text-red"}>{errors?.password?.message}</p>

                            <label className="label">
                                <button className="font-semibold">Forgot password?</button>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="bg-light-primary btnFilled text-white">Login</button>
                        </div>
                        <label className="label">
                            <Link
                                className={"hover:underline no-hover-color font-semibold"}
                                to={"/register"}>New in CineMovie? Register</Link>
                        </label>
                    </form>
                    <div className={"divider"}>OR</div>
                    <SocialLogin going={going}/>

                </div>
            </div>

    );
};

export default Login;