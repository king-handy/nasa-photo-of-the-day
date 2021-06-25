import React, { useState, useEffect } from "react";
import axios from 'axios'
import styled from 'styled-components'
import "./App.css";

function App() {
  const [photoOfDay, setPhotoOfDay] = useState([])

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=9wdEwYqMkvXYxA0Z3ub77SSdhkslbl6eVKEcDj6O`)
    // .then(res => {
    //   console.log(res)
    .then(res => {
      setPhotoOfDay(res.data.url)
    })
  }, [])

  return (
    <Container className="App">
      <br></br>
      <Header>NASA Photo of the Day!</Header>
      <Image src={photoOfDay} alt='NASA APOD' />
      <Para>
        To the moon <span role="img" aria-label='go!'>🚀</span>!
      </Para>
    </Container>
  );
}

const Container = styled.div`
background-color: bisque
`

const Header = styled.h1`
color: crimson
`

const Image = styled.img`
border: crimson solid 2px
`

const Para = styled.p`
font-size: 2rem
`

export default App;
