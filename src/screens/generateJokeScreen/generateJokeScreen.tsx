import { GenerateJokeScreenHelper } from "./generateJokeScreen.helper";

export const GenerateJokeScreen: React.FC = () => {
  //imported variables from the helper
  const { getDadJoke, jokeText } =  GenerateJokeScreenHelper();
  return (
    <>
      <h1 id="h1">DAD JOKES</h1>

      {/* generate joke on Click */}
      <button id="btn" onClick={getDadJoke}>Generate Joke</button>
      
      <div id="jokeContainer">
        <h3 id="joke">{jokeText === "" ? "Generate a joke!" : jokeText}</h3>
      </div>
    </>
  )
}
