import React from 'react'
import {Link} from 'wouter'
import ListGif from '../../components/ListGif'


export default function Search({params}) {

    const {keyword } = params
    {console.log("Search:",keyword.replace("%20"," "))}
    return (
        <span>
            <Link href="/" className="App-link">Go Home</Link>
            <h1>Resultados de la busqueda :   
                 {decodeURI(keyword)}</h1>
            <ListGif keyword={params.keyword}></ListGif>
        </span>
    )
}
