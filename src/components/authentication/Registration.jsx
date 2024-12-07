import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";
import {useForm} from "react-hook-form";
import {authContext} from "../AuthProvider.jsx";
import Swal from "sweetalert2";

const Registration = () => {
    const {register,
        handleSubmit,
        formState:{errors},
    } = useForm()
    const navigate = useNavigate();
    const {createUser,updateUser, signInWithGoogle}=useContext(authContext);
    const handleGoogleRegister = () => {
        signInWithGoogle().then(result => {
            const user = result.user;
            navigate("/")
            Swal.fire("Register with google Successful")
        }).catch(err=>{
            Swal.fire(`${err.code}`)
        })
    }
    return (
        <div className="hero bg-base-200">
            <div className="hero-content md:w-4/6 lg:w-2/6 flex-col">
                <div className="text-center lg:text-left">
                    <h2 className="text-5xl font-bold">Register now!</h2>
                </div>
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit((data) => {
                        const {name, email, password, photo}=data
                        createUser(email, password).then(data=>{
                            updateUser({displayName: name,photoURL: photo}).then().catch(err=>console.log(err.code))
                            const {uid} = data?.user
                            const {lastSignInTime, creationTime} = data?.user?.metadata
                            Swal.fire("Registration Completed")
                            navigate("/")
                        }).catch(err => {
                            Swal.fire(`${err.code}`)

                        })

                    })} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", {
                                required: "Name is required"
                            })}
                                   placeholder="name"
                                   className="input input-bordered"
                                   required/>
                            <p>{errors?.name?.message}</p>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo-URL</span>
                            </label>
                            <input type="url" {...register("photo", {
                                required: "Photo-url is required"
                            })}
                                   placeholder="photo-url"
                                   className="input input-bordered"
                                   required/>
                            <p>{errors?.photo?.message}</p>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", {
                                required: "Email is required"
                            })}
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
                                className="input input-bordered" required/>
                            <p className={"text-red"}>{errors?.password?.message}</p>

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <label className="label">
                            <p className="label-text-alt">Already have an account?
                                <Link
                                    className={"underline"}
                                    to={"/login"}>login</Link></p>
                        </label>
                    </form>
                    <div className={"divider"}>OR</div>
                    <div className="form-control mb-6 mx-7">
                        <button onClick={handleGoogleRegister} className="btn btn-outline">Google<FcGoogle></FcGoogle></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;