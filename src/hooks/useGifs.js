
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from "react";


const url = `https://api.giphy.com/v1/gifs/random?api_key=O3AUOfFNCpMAyiLNkx939MtuNJWA4roa&tag=&rating=g`


const useGifs = (tag) => {




    const [gif, setGif] = useState('');
    const [loading, setloading] = useState(false);

    async function featchdata(tag) {
        // const url = `https //api.giphy.com/v1/gifs/random?api_key=${AIP_KEY}`;

        setloading(true);


        const { data } = await axios.get(tag ? `${url}&tag=${tag} ` : `${url}`);
        const imgsource = data.data.images.downsized_large.url;
        setGif(imgsource);
        setloading(false);

    }
    useEffect(() => {
        featchdata();
    }, [])

    return { gif, featchdata, loading }

}

export default useGifs
