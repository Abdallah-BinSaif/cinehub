import React from 'react';
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";

const Login = () => {
    const {register,
        handleSubmit,
        formState: {errors},
    } = useForm()
    console.log(errors)
    return (
        <div className="hero bg-base-200">
            <div className="hero-content md:w-4/6 lg:w-2/6 flex-col">
                <div className="text-center lg:text-left">
                    <h2 className="text-5xl font-bold">Login now!</h2>
                </div>
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit((data)=>{
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
                                    minLength: {
                                        value: 6,
                                        message: "minimum 6 character length"
                                    },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z]).(?=.*\d).+$/,
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
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <label className="label">
                            <p className="label-text-alt">new here? <Link className={"underline"}
                                                                          to={"/register"}>Register</Link></p>
                        </label>
                    </form>
                    <div className={"divider"}>OR</div>
                    <div className="form-control mb-6 mx-7">
                        <button className="btn btn-outline">Google<FcGoogle></FcGoogle></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;