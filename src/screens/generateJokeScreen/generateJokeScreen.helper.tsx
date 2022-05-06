import { useState } from "react";
import axios from "axios";
import { audios } from "../../assets";

//variables to export - types
interface GenerateJokeScreenHelperProps {
  jokeText: string,
  getDadJoke: () => void
}

export const GenerateJokeScreenHelper = (): GenerateJokeScreenHelperProps => {
  //Variable that hold the text of the joke and the one to set it
  const [jokeText, setJokeText] = useState<string>('');

  //function that plays audio track
  const playAudio = () => {
    const audio = new Audio(audios.laugh);
    audio.play();
  }

  //function that will get me a joke and set it to my jokeText (setJokeText) from an API
  const getDadJoke = () => {
    axios.get('https://icanhazdadjoke.com/', {headers: {accept: "application/json"}})
    .then(res => {
    setJokeText(res.data.joke);
    })
    playAudio();
  }

  //variables to export
  return {
    jokeText,
    getDadJoke
  }
}
