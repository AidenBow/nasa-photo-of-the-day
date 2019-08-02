import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Label, Icon } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'

import NasaPhotoCard from "./nasaPhotoCard.js";

export default() => {
    const [photo, setPhoto] = useState('')
    const [date, setDate] = useState('date')
    const [likes, setLikes] = useState(0)
    

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
                <Button color='red' onClick={() => setLikes(likes + 1)}> <Icon name='heart' /> Like</Button>
                <Label basic color='red' as='a' basic pointing='left'>
                { likes }
                </Label>
            </Button>
            </div>
        </div>
    )
}