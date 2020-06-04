import React from 'react'

export default function Gif({id,url,title}){
    return(
        <>
            <img key={id} src ={url} alt='s'></img>
            <p>{title}</p>
        </>
    )
}