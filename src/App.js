import axios from "axios";
import { useState } from "react";
import GetJoke from "./components/GetJoke";
import Header from "./components/Header";
import Joke from "./components/Joke";
import sound from "./assets/laugh.wav";


function App() {
  const [jokeText, setJokeText] = useState('');

  const playAudio = () => {
    const audio = new Audio(sound);
    audio.play();
  }

  const getDadJoke = () => {
    axios.get('https://icanhazdadjoke.com/', {headers: {accept: "application/json"}})
    .then(res => {
    setJokeText(res.data.joke);
    })
    playAudio();
  }
    

  return (
    < >
      <Header text="DAD JOKES"/>
      <GetJoke onClick={getDadJoke} btnText="Generate Joke"/>
      <Joke jokeText={jokeText}/>
    </>
  );
}

export default App;
