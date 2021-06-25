import React, { useState, useEffect } from "react";
import axios from 'axios'
import styled from 'styled-components'
import "./App.css";

function App() {
  const [photoOfDay, setPhotoOfDay] = useState([])

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=9wdEwYqMkvXYxA0Z3ub77SSdhkslbl6eVKEcDj60')
    // .then(res => console.log(res))
    .then(res => setPhotoOfDay(res.data.url))
  }, [])

  return (
    <div className="App">
      <br></br>
      <h1>NASA Photo of the Day!</h1>
      <img src={photoOfDay} alt='NASA APOD' />
      
      <p>
        To the moon <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}


export default App;
