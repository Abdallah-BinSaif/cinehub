import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";
import {useForm} from "react-hook-form";
import {authContext} from "../provider/AuthProvider.jsx";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin.jsx";

const Registration = () => {
    const {register,
        handleSubmit,
        formState:{errors},
    } = useForm()
    const navigate = useNavigate();
    const going = location?.state?.from || "/"

    const {createUser,updateUser}=useContext(authContext);

    return (
        <div className="">
            <div className="loginBG flex flex-col justify-center items-center">
                <div className="">
                    <h2 className="text-5xl font-bold">Register now!</h2>
                </div>
                <div className="px-4 pt-8 w-full lg:w-4/12">
                    <SocialLogin going={going}/>
                    <div className={"divider mt-10"}>OR</div>
                    <form onSubmit={handleSubmit((data) => {
                        const {name, email, password, photo} = data
                        createUser(email, password).then(data => {
                            updateUser({displayName: name, photoURL: photo}).then().catch(err => console.log(err.code))
                            const {uid} = data?.user
                            const {lastSignInTime, creationTime} = data?.user?.metadata
                            Swal.fire("Registration Completed")
                            navigate("/")
                        }).catch(err => {
                            Swal.fire(`${err.code}`)

                        })

                    })} className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="">Name</span>
                            </label>
                            <input type="text" {...register("name", {
                                required: "Name is required"
                            })}
                                   placeholder="name"
                                   className=""
                                   required/>
                            <p>{errors?.name?.message}</p>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="">Photo-URL</span>
                            </label>
                            <input type="url" {...register("photo", {
                                required: "Photo-url is required"
                            })}
                                   placeholder="photo-url"
                                   className=""
                                   required/>
                            <p>{errors?.photo?.message}</p>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="">Email</span>
                            </label>
                            <input type="email" {...register("email", {
                                required: "Email is required"
                            })}
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
                                    minLength: {
                                        value: 6,
                                        message: "minimum 6 character length"
                                    },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])/,
                                        message: "Password should contain a uppercase, a lowercase and a number"
                                    }
                                })}
                                placeholder="password"
                                className="" required/>
                            <p className={"text-red"}>{errors?.password?.message}</p>

                            <label className="label">
                                <a href="#" className="">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="bg-light-primary btnFilled text-white">Register</button>
                        </div>
                        <label className="label">
                            <Link
                                className={"hover:underline no-hover-color font-semibold"}
                                to={"/login"}>Already have an account? login</Link>
                        </label>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Registration;