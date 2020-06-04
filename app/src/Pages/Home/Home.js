import React, {useState} from 'react'
import { Link , useLocation} from 'wouter'

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [path, setPath] = useLocation()

    const handleOnSubmit = (evt) => {
        evt.preventDefault();
        setPath('search/' + keyword)
    }
    const handleOnChange = (evt) => {
        console.log(evt.target.value)
        setKeyword(evt.target.value)
    }

    return (
        <>
            <h1>Buscador de Gifs</h1>
            <form onSubmit={handleOnSubmit}>
                <input type='text' placeholder="Busca tus gifs favoritos" value={keyword} onChange={handleOnChange}></input>
            </form>
            <Link className='App-link' href='/search/dark'>Dark gifs</Link>
            <Link className='App-link' href='/search/elite'>Elite gifs</Link>
        </>
    )
}