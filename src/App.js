import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";

function App() {
  const [photoOfDay, setPhotoOfDay] = useState([])

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    // .then(res => console.log(res))
    .then(res => setPhotoOfDay(res.data.url))
  }, [])

  return (
    <div className="App">
      <br></br>
      <h1>NASA photo of the day!</h1>
      <img src={photoOfDay} alt='NASA Photo of Day' />
      
      <p>
        To the moon <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}


export default App;
