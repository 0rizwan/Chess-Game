import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css';

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(()=>{
    axios.get(`http://127.0.0.1:3000/api/jokes`)
    .then((response)=>{
      console.log(jokes, "before")
      console.log("")
      setJokes(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])  
  console.log(jokes,"After")

  return (
    <>
      <h1>Jokes : {jokes.length} </h1>
      {
        jokes.map((joke, index)=>(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
