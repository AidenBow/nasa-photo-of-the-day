import React, { useState, useEffect } from "react";
import axios from "axios";

import NasaPhotoCard from "./nasaPhotoCard.js";

export default() => {
    const [photo, setPhoto] = useState('')

    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=jX2XxGBzJWywXfbeZ0ylN40a6lVdiSEJMyQx3ocY")
            .then(res => {
                console.log('req')
                console.log(res.data.hdurl)
                setPhoto(res.data.hdurl)
            })
            .catch(err => 
                console.log(err)
            )
            
    }, [])

    // useEffect(() => {
    //     axios
    //         .get("https://dog.ceo/api/breed/husky/images/random/25")
    //         .then(res => {
    //             console.log('req')
    //             console.log(res.data.message)
    //             setPhoto(res.data.message[0])
    //         })
    //         .catch(err => 
    //             console.log(err)
    //         )
            
    // }, [])

    return (
        <NasaPhotoCard imgUrl={ photo } />
    )
}