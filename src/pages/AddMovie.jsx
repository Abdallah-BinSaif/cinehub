import React from 'react';
import { useForm } from "react-hook-form";

const AddMovie = () => {
    const {
        register,
        handleSubmit,
        formState:{errors},
        watch} = useForm()

    console.log(errors)
    const years = [2024, 2023, 2022,2021, 2020, 2019,2018]


    return (
        <div>
            <form
                onSubmit={handleSubmit((data) => {
                    console.log(data)
                })} className={"p-8 bg-third *:w-full"}>
                {/*Input row*/}
                <div className={"flex gap-4"}>
                    <div className={"w-1/2"}>
                        <input
                            {...register("poster", {
                                required: "Please give a Poster URL"
                            })}
                            type={"url"}
                            placeholder={"poster Url"}
                            className={"w-full input"}
                        /><br/>
                        <p className={"text-red-500"}>{errors.poster?.message}</p>
                    </div>
                    <div className={"w-1/2"}>
                        <input
                            {...register("title", {
                                required: "Please Enter movie title",
                                minLength: {
                                    value: 2,
                                    message: "At least 2 characters"
                                }
                            })}
                            type={"text"}
                            placeholder={"Poster Title"}
                            className={"w-full input"}
                        /><br/>
                        <p className={"text-red-500"}>{errors.name?.message}</p>
                    </div>
                </div> <br/>

                {/*Input row*/}
                <div className={"flex gap-4"}>
                    <select className={"w-1/3"} {...register("genre")}>
                        <option disabled={"ture"} value={""}>Select Genre</option>
                        <option value={"comedy"}>Comedy</option>
                        <option value={"drama"}>Drama</option>
                        <option value={"horror"}>Horror</option>
                        <option value={"animate"}>Animate</option>
                    </select>
                    <div className={"w-1/3 space-x-2"}>
                        <input
                            {...register("duration", {
                                required: "this is required",
                                min: {
                                    value: 60,
                                    message: "minimum 60 minute allowed"
                                }
                            })}
                            type={"number"}
                            placeholder={"Duration (minute)"}
                            className={"w-full input"}
                        /><br/>
                        <p className={"text-red-500"}>{errors.duration?.message}</p>
                    </div>
                    <select className={"w-1/3"} {...register("year")}>
                        <option disabled={"true"} value="">Select a Year</option>
                        {
                            years.map(year => <option value={`${year}`}>{year}</option>)
                        }
                    </select>

                </div>
                <br/>

                {/*Input row*/}
                <div className={"flex gap-4"}>
                    <div className={"w-1/2"}>
                        <input
                            {...register("name", {
                                required: "this is required",
                                minLength: {
                                    value: 3,
                                    message: "Min length is 3"
                                }
                            })}
                            placeholder={"Name"}
                            className={"w-full input"}
                        /><br/>
                        <p className={"text-red-500"}>{errors.name?.message}</p>
                    </div>
                    <div className={"w-1/2"}>
                        <input
                            {...register("email", {
                                required: "Please Enter an Email address",
                            })}
                            type={"email"}
                            placeholder={"Email"}
                            className={"w-full input"}
                        /><br/>
                        <p className={"text-red-500"}>{errors.email?.message}</p>
                    </div>
                </div>

                {/*<input*/}
                {/*    {...register("url", {required: true})}*/}
                {/*    type={"url"}*/}
                {/*    placeholder={"Url"}*/}
                {/*    className={"w-1/2 input"}*/}
                {/*/><br/> <br/>*/}
                <br/>
                <input className={"btn bg-gold-seco hover:bg-gold"} type={"submit"}/>
            </form>
        </div>
    );
};

export default AddMovie;