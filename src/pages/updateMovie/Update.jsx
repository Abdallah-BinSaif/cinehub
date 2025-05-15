import {useContext, useState} from 'react';
import { useForm } from "react-hook-form";
import { Rating } from 'react-simple-star-rating'
import Swal from "sweetalert2";
import {authContext} from "../../provider/AuthProvider.jsx";
import {useLoaderData} from "react-router-dom";
import useTheme from "../../hooks/useTheme.jsx";
import { motion } from "motion/react"
import axiosSecure from "../../axios/SecureAxios.jsx";

const Update = () => {
    const Mdata = useLoaderData();
    console.log(Mdata)
    const {isDarkMode} = useTheme()

    const {currentUser} = useContext(authContext)
    const [rating, setRating] = useState(Mdata.rating)
    const {
        register,
        handleSubmit,
        formState:{errors},
        watch} = useForm({defaultValues:{
            duration: Mdata.duration,
            genre: Mdata.genre,
            poster: Mdata.poster,
            summary: Mdata.summary,
            title: Mdata.title,
            year: Mdata.year
        }})

    const genre = ["Adventure", "Action", "Horror", "Drama", "Romance", "Mystery", "Thriller", "Action", "Sci-Fi","Historical", "Family","Fantasy"]
    const years = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990, 1989, 1988, 1987, 1986, 1985, 1984, 1983, 1982, 1981, 1980]


    const handleRating = (rate) => {

        setRating(rate)
    }

    const year = parseInt(watch("year"))
    const duration = parseInt(watch("duration"))


    return (
        <div className={"container mx-auto my-8"}>
            <div className={"text-center"}>
                <h2 className={"text-5xl my-8"}>Update movie</h2>
            </div>
            <form
                onSubmit={handleSubmit((formData) => {
                    const addedMovie = {...formData, rating, year, duration, addedBy:currentUser?.email}
                    if(rating){
                        axiosSecure.patch(`/cinemas/${Mdata._id}`, addedMovie)
                            .then(res => {
                                if(res.data.modifiedCount){
                                    Swal.fire({
                                        title: "Modified",
                                        text: "Modified The movie to the database.",
                                        icon: "success"
                                    });
                                }else if(!res.data.matchedCount){
                                    Swal.fire({
                                        title: "Nothing to Found",
                                        icon: "error"
                                    })
                                }else{
                                    Swal.fire({
                                        title: "Nothing to Modify",
                                        icon: "question"
                                    })
                                }
                            })
                        // fetch(`https://movie-portal-server-pink-one.vercel.app/cinemas/${Mdata._id}`,{
                        //     method: "PATCH",
                        //     headers:{
                        //         "content-type": "application/json"
                        //     },
                        //     body: JSON.stringify(addedMovie)
                        // }).then(res => res.json())
                        //     .then(data => {
                        //         if(data.modifiedCount){
                        //             Swal.fire({
                        //                 title: "Modified",
                        //                 text: "Modified The movie to the database.",
                        //                 icon: "success"
                        //             });
                        //         }else if(!data.matchedCount){
                        //             Swal.fire({
                        //                 title: "Nothing to Found",
                        //                 icon: "error"
                        //             })
                        //         }else{
                        //             Swal.fire({
                        //                 title: "Nothing to Modify",
                        //                 icon: "question"
                        //             })
                        //         }
                        //     })
                    }else{
                        Swal.fire({
                            title: "Rating",
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
                            className={"w-full"}
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
                            className={"w-full"}
                        /><br/>
                        <p className={"text-red-500"}>{errors.title?.message}</p>
                    </div>
                </div>
                <br/>

                {/*Input row*/}
                <div className={"flex flex-col md:flex-row gap-4"}>
                    <select className={"md:w-1/3 px-2 text-light-text py-2"} {...register("genre")}>
                        <option disabled={true} value={""}>Select Genre</option>
                        {
                            genre.map((item, idx) => <option key={idx} value={`${item}`}>{item}</option>)
                        }
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
                            className={"w-full"}
                        /><br/>
                        <p className={"text-error"}>{errors.duration?.message}</p>
                    </div>
                    <select className={"md:w-1/3 p-2 text-light-text"} {...register("year")}>
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
                        initialValue={rating}
                        iconsCount={10}
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
                        className={"w-full no-hover-color text-light-text"}
                    /><br/>
                    <p className={"text-red-500"}>{errors.summary?.message}</p>
                </div><br/>

                <motion.input
                    whileHover={{y:-2}}
                    whileTap={{y:2}}
                    className={`border font-bold rounded w-full ${isDarkMode ? " text-light-secondary":"text-light-primary"} flex-1`}
                    type={"submit"}
                    value={"Update Movie"}/>
            </form>
        </div>
    );
};

export default Update;