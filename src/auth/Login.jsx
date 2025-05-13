import React, {useContext} from 'react';
import {useForm} from "react-hook-form";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";
import {authContext} from "../provider/AuthProvider.jsx";
import Swal from "sweetalert2";

const Login = () => {
    const {register,
        handleSubmit,
        formState: {errors},
    } = useForm()
    const {signInUser,signInWithGoogle} = useContext(authContext)
    const navigate = useNavigate();
    const location = useLocation()

    const handleGoogleSignIn = () => {
        signInWithGoogle().then(result => {
            const user = result.user;
            navigate(location?.state?.from ? `${location.state.from}`: "/")
            Swal.fire("Login with google Successful")

            console.log(user)
        }).catch(err=>{
            console.log(err.code)
        })
    }

    return (
        <div className="hero bg-base-200">
            <div className="hero-content md:w-4/6 lg:w-2/6 flex-col">
                <div className="text-center lg:text-left">
                    <h2 className="text-5xl font-bold">Login now!</h2>
                </div>
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit((data)=>{
                        const {email, password}=data
                        signInUser(email, password).then(userdata=>{
                            console.log(userdata)
                            Swal.fire("Login Successful")
                            navigate(location?.state?.from ? `${location.state.from}`: "/")
                        })
                            .catch(err => {
                                console.log(err)
                                Swal.fire("Login Failed")
                            })

                        console.log(data)
                    })} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", {
                                required: "Email is required"
                            }) }
                                   placeholder="email"
                                   className="input input-bordered"
                                   required/>
                            <p>{errors?.email?.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                {...register("password", {
                                    required: "Give a Password",
                                })}
                                placeholder="password"
                                className="input input-bordered" required/>
                            <p className={"text-red"}>{errors?.password?.message}</p>

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <label className="label">
                            <p className="label-text-alt">new in CineMovie?
                                <Link
                                className={"underline"}
                                to={"/register"}>Register</Link>
                            </p>
                        </label>
                    </form>
                    <div className={"divider"}>OR</div>
                    <div className="form-control mb-6 mx-7">
                        <button onClick={handleGoogleSignIn} className="btn btn-outline">Google<FcGoogle></FcGoogle></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;