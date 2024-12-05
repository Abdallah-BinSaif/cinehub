import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import { Rating } from 'react-simple-star-rating'
import Swal from "sweetalert2";

const AddMovie = () => {
    const [rating, setRating] = useState(0)
    const {
        register,
        handleSubmit,
        formState:{errors},
        watch} = useForm()

    const years = [2024, 2023, 2022,2021, 2020, 2019,2018]
    const handleRating = (rate) => {

        setRating(rate)
        // other logic
    }

    const year = parseInt(watch("year"))
    const duration = parseInt(watch("duration"))


    return (
        <div className={"container mx-auto my-8"}>
            <form
                onSubmit={handleSubmit((data) => {
                    const addedMovie = {...data, rating, year, duration}
                    if(rating){
                        fetch("http://localhost:5000/cinemas",{
                            method: "POST",
                            headers:{
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(addedMovie)
                        }).then(res => res.json())
                            .then(data => {
                                console.log(data)
                                if(data.acknowledged){
                                    Swal.fire({
                                        title: "Added?",
                                        text: "The movie added to the database.",
                                        icon: "success"
                                    });
                                }
                            })
                    }else{
                        Swal.fire({
                            title: "Rating?",
                            text: "Please Rate this movie to proceed.",
                            icon: "question"
                        });
                    }


                })}
                className={"p-8 bg-third rounded-lg"}>
                {/*Input row*/}
                <div className={"flex flex-col md:flex-row gap-4"}>
                    <div className={"md:w-1/2"}>
                        <input
                            {...register("poster", {
                                required: "Please give a Poster URL"
                            })}
                            type={"url"}
                            placeholder={"poster Url"}
                            className={"w-full input bg-seco"}
                        /><br/>
                        <p className={"text-red-500"}>{errors.poster?.message}</p>
                    </div>
                    <div className={"md:w-1/2"}>
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
                            className={"w-full input bg-seco"}
                        /><br/>
                        <p className={"text-red-500"}>{errors.title?.message}</p>
                    </div>
                </div>
                <br/>

                {/*Input row*/}
                <div className={"flex flex-col md:flex-row gap-4"}>
                    <select className={"md:w-1/3 rounded-lg bg-seco"} {...register("genre")}>
                        <option disabled={true} value={""}>Select Genre</option>
                        <option value={"comedy"}>Comedy</option>
                        <option value={"drama"}>Drama</option>
                        <option value={"horror"}>Horror</option>
                        <option value={"animate"}>Animate</option>
                    </select>
                    <div className={"md:w-1/3 space-x-2"}>
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
                            className={"w-full input bg-seco"}
                        /><br/>
                        <p className={"text-red-500"}>{errors.duration?.message}</p>
                    </div>
                    <select className={"md:w-1/3 rounded-lg bg-seco"} {...register("year")}>
                        <option disabled={true} value="">Select a Year</option>
                        {
                            years.map((year, idx) => <option key={idx} value={year} >{year}</option>)
                        }
                    </select>

                </div>
                <br/>
                <div className={"flex flex-col justify-center items-center"}>
                    <label>Rate this Movie</label>
                    <Rating
                        onClick={handleRating}
                    ></Rating>
                </div>
                <br/> <br/>
                <div>
                    <textarea
                        {...register("summary", {
                            required: "this is required",
                            minLength: {
                                value: 10,
                                message: "minimum 10 word allowed"
                            }
                        })}
                        rows={5}
                        placeholder={"write the summary of the movie"}
                        className={"w-full rounded-lg bg-seco"}
                    /><br/>
                    <p className={"text-red-500"}>{errors.summary?.message}</p>
                </div><br/>

                <input className={"btn bg-gold-seco hover:bg-gold w-full"} type={"submit"} value={"Add Movie"}/>
            </form>
        </div>
    );
};

export default AddMovie;