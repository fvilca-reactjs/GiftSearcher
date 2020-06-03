import React, {useState, useEffect } from 'react';
import './App.css';
import service from './services/gift';

function App() {

  const [gifs,setGifs] = useState([])
  
  
  useEffect(() => {
    service('covid').then(res => setGifs(res))
  }, [])

  return (
    <section className="App-header">
      {gifs.map(single=>(
        <img src ={single.images.downsized_medium.url}></img>
      ))}
    </section>
  );
}

export default App;
