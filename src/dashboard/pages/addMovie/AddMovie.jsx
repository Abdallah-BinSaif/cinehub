import {useContext, useRef, useState} from 'react';
import { useForm } from "react-hook-form";
import { Rating } from 'react-simple-star-rating'
import Swal from "sweetalert2";
import {authContext} from "../../../provider/AuthProvider.jsx";
import secureAxios from "../../../axios/SecureAxios.jsx";
import useTheme from "../../../hooks/useTheme.jsx";
import SectionHeading from "../../../components/SectionHeading.jsx";
import conf from "../../../conf/conf.js";
import axios from "axios";
import {FileInput} from "@mantine/core";
import {IconPhotoUp} from "@tabler/icons-react";

const AddMovie = () => {
    const bb_hosting_api = `https://api.imgbb.com/1/upload?key=${conf.imageBBKey}`
    const {isDarkMode} = useTheme();
    const {currentUser} = useContext(authContext)
    const [rating, setRating] = useState(0)
    const [backdrop, setBackdrop] = useState()
    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm()


    const genre = ["Adventure", "Action", "Horror", "Drama", "Romance", "Mystery", "Thriller", "Action", "Sci-Fi","Historical", "Family","Fantasy"]
    const years = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990, 1989, 1988, 1987, 1986, 1985, 1984, 1983, 1982, 1981, 1980]


    const handleRating = (rate) => {

        setRating(rate)

    }

    return (
        <div className={"container mx-auto my-8"}>
            <SectionHeading heading={"Add a Movie"} subHeading={"the movie you like most"} />
            <FileInput
                label={"BackDrop Image"}
                leftSection={<IconPhotoUp size={20} />}
                name={"backdrop"}
                placeholder={"upload image"}
                value={backdrop}
                withAsterisk={true}
                onChange={setBackdrop}
            />
            <form
                onSubmit={handleSubmit((formData) => {

                    console.log(formData)

                    // todo: the comment should be uncomment;

                    // if(rating){
                    //     axios.post(`${bb_hosting_api}`, {image: backdrop},{
                    //         headers:{
                    //             "content-type": "multipart/form-data"
                    //         }
                    //     })
                    //         .then(res => {
                    //             if(res.data.success){
                    //                 const movieData = {
                    //                         duration: parseInt(formData.duration),
                    //                         genre: formData.genre,
                    //                         poster_url: formData.poster,
                    //                         summary: formData.summary,
                    //                         title: formData.title,
                    //                         year: parseInt(formData.year),
                    //                         addedBy: currentUser.email,
                    //                         rating,
                    //                         backdrop_url: res.data.data.display_url,
                    //                     }
                    //
                    //                 secureAxios.post("/cinemas",movieData)
                    //                     .then(data => {
                    //                         if(data.data.acknowledged){
                    //                             Swal.fire({
                    //                                 title: "Added",
                    //                                 text: "The movie added to the database.",
                    //                                 icon: "success"
                    //                             });
                    //                         }
                    //                     })
                    //                     .catch(err=> {
                    //                         Swal.fire({
                    //                             title: "ERROR",
                    //                             text: `${err.code}`,
                    //                             icon: "error"
                    //                         })
                    //                     })
                    //
                    //             }
                    //         })
                    //         .catch(err => Swal.fire(err.code))
                    //
                    //
                    //
                    // }else{
                    //     Swal.fire({
                    //         title: "Rating",
                    //         text: "Please Rate this movie to proceed.",
                    //         icon: "question"
                    //     });
                    // }
                })}
                className={"p-8 rounded-lg"}>


                {/*Input row*/}
                {/*<input  className={"bg-light-secondary"} value={backdrop} onChange={setBackdrop} type={"file"} {...register("backdrop",{required:"Please Select a photo"})} />*/}


                <div className={"flex flex-col md:flex-row gap-4"}>
                    <div className={"md:w-1/2"}>
                        <div className={"label"}>
                            <label className={"px-2"}>Poster</label>
                        </div>
                        <input
                            {...register("poster", {
                                required: "Please give a Poster URL"
                            })}
                            type={"url"}
                            placeholder={"poster Url"}
                            className={"w-full border-light-secondary border no-hover-color text-light-text"}
                        /><br/>
                        <p className={"text-red-500"}>{errors.poster?.message}</p>
                    </div>
                    <div className={"md:w-1/2"}>
                        <div className={"label"}>
                            <label className={"px-2"}>Movie Title</label>
                        </div>
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
                            className={"w-full border-light-secondary border no-hover-color text-light-text"}
                        /><br/>
                        <p className={"text-error"}>{errors.title?.message}</p>
                    </div>
                </div>
                <br/>

                {/*Input row*/}
                <div className={"flex flex-col md:flex-row items-end gap-4 "}>
                    <div className={"md:w-1/3 rounded-lg flex flex-col"}>
                        <legend className="fieldset-legend">Browsers</legend>
                        <select className={"py-3 border-light-secondary border no-hover-color text-light-text"} {...register("genre")}>
                            <option disabled={true} value={""}>Select Genre</option>
                            {
                                genre.map((item, idx) => <option key={idx} value={`${item}`}>{item}</option>)
                            }
                        </select>
                    </div>
                    <div className={"md:w-1/3 space-x-2"}>
                        <div className={"label"}>
                            <label className={"px-3"}>Movie Length</label>
                        </div>
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
                            className={"w-full border-light-secondary py-3 border no-hover-color text-light-text"}
                        /><br/>
                        <p className={"text-error absolute"}>{errors.duration?.message}</p>
                    </div>
                    <div className={"md:w-1/3"}>
                        <legend className="fieldset-legend">Release Year</legend>
                        <select className={`py-3 border-light-secondary w-full border no-hover-color text-light-text`} {...register("year")}>
                            <option disabled={true} value="">Select a Year</option>
                            {
                                years.map((year, idx) => <option key={idx} value={year}>{year}</option>)
                            }
                        </select>
                    </div>


                </div>
                <br/>
                <div className={"flex flex-col justify-center items-center"}>
                    <label>Rate this Movie</label>
                    <Rating
                        fillColor={"#2f27ce"}
                        iconsCount={10}
                        onClick={handleRating}
                    ></Rating>
                </div>
                <br/> <br/>
                <div>
                    <div className={"label"}>
                        <label className={""}>Movie Length</label>
                    </div>
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
                        className={"w-full border-light-secondary border no-hover-color text-light-text"}
                    /><br/>
                    <p className={"absolute text-error"}>{errors.summary?.message}</p>
                </div>
                <br/>

                <input className={`btnOutline ${isDarkMode ? "text-dark-primary" : "text-light-primary"} w-full`}
                       type={"submit"} value={"Add Movie"}/>
            </form>
        </div>
    );
};

export default AddMovie;