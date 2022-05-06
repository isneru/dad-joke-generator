import { useState, useEffect } from 'react';
import axios from 'axios';
import { audios } from '../../assets';
import { useSpeechSynthesis } from 'react-speech-kit';

//variables to export - types
interface GenerateJokeScreenHelperProps {
	jokeText: string;
	getDadJoke: () => void;
}

export const GenerateJokeScreenHelper = (): GenerateJokeScreenHelperProps => {
	//Variable that hold the text of the joke and the one to set it
	const [jokeText, setJokeText] = useState<string>('');
	const { speak, speaking } = useSpeechSynthesis();

	//Validates if there's audio speaking and once it's not, the laugh strack will play
	useEffect(() => {
		if (!speaking) {
			playAudio();
		}
	}, [speaking]);

	//function that plays audio track
	const playAudio = () => {
		// get audio URL
		const audio = new Audio(audios.laugh);
		audio.play();
	};

	//function that will get me a joke and set it to my jokeText (setJokeText) from an API
	const getDadJoke = () => {
		axios.get('https://icanhazdadjoke.com/', { headers: { accept: 'application/json' } }).then((res) => {
			setJokeText(res.data.joke);
			speak({ text: res.data.joke });
		});
	};

	//variables to export
	return {
		jokeText,
		getDadJoke,
	};
};
