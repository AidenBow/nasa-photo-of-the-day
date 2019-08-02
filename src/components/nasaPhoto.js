import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Label, Icon } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'

import NasaPhotoCard from "./nasaPhotoCard.js";

export default() => {
    const [photo, setPhoto] = useState('')
    const [date, setDate] = useState('date')

    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=jX2XxGBzJWywXfbeZ0ylN40a6lVdiSEJMyQx3ocY")
            .then(res => {
                console.log('req')
                setPhoto(res.data.hdurl)
                setDate(res.data.date)
            })
            .catch(err => 
                console.log(err)
            )
            
    }, [])

    return (
        <div>
            <NasaPhotoCard imgUrl={ photo } />
            
            <Label pointing display='block'>
                { date }
            </Label>
            <div>
            <Button as='div' labelPosition='right'>
                <Button> <Icon name='heart' /> Click</Button>
                <Label as='a' basic pointing='left'>
                104
                </Label>
            </Button>
            </div>
        </div>
    )
}