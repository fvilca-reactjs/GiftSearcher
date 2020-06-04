import React,{useState,useEffect} from 'react'
import Service from '../services/gift'
import Gif from './Gif.js'

function ListGif( params ){ 
    
    console.log("ListGif: ",params)
    
    const {keyword} =params
    const [gifs,setGifs] = useState([])

    useEffect(() => {
        console.log("useEffect")
        Service(keyword)
        .then(res => setGifs(res))
    }, [keyword])


    return gifs.map((single)=>(
        <Gif 
                key = {single.id}
                title = {single.title} 
                url = {single.images.downsized_medium.url}
        />
    ))
}

export default ListGif