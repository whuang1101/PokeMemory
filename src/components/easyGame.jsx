import { useEffect, useState } from "react";
import "../css/easyGame.css";
import findPokemon from"../JS/findPokemon"
import shuffleArray from "../JS/shuffleArray";
function EasyGame({ gameClick, newScore, newHandleScore, setNewScore}) {
  const [redLoading, setRedLoading] = useState(true);
  const [pokemonArray,setPokemonArray] = useState([]);
  const [winOrLoss, setWinOrLoss] = useState("none");
  const [tryAgain, setTryAgain] = useState(false);
  useEffect(() => {
    const fetchPokemon = async () => {
      const foundPokemon = await findPokemon(5);
      setPokemonArray(foundPokemon)
      setTimeout(() => {
        setRedLoading(false);
      }, 4000);
    };
    fetchPokemon();
    const resetGame = () => {
      setWinOrLoss("none");
      setNewScore(0);
      setTryAgain(false); 
    }
    if(tryAgain){
      resetGame();
    }
  
  }, [gameClick, tryAgain]);
  const handleCardClick = (index) => {
    if(!pokemonArray[index].clicked)
  {  const newPokemonArray = [... pokemonArray];
    newPokemonArray[index].clicked = true;
    setPokemonArray([...newPokemonArray]);
    newHandleScore(newScore + 1);
    console.log(pokemonArray)
  };
  }
  const handleWin = () => {
    if(pokemonArray.length === newScore+1){
      setWinOrLoss("win");
    }
  }
  const handleRestart = () => {
    setTryAgain(!tryAgain)
  }
  const handleArray = (index)=> {
    if(!pokemonArray[index].clicked)
    {  
      handleCardClick(index);
      const shuffledArray = shuffleArray(pokemonArray);
      setPokemonArray([...shuffledArray]);
      handleWin();
    }
    else{
      setWinOrLoss("Loss");
    }

  }
  
  return (
    <div className="game-background">
      {redLoading ? (
        <div className="red-loading"></div>
      ) : (
        <>
          <div className="game">
            <div className="display-score">
              Score: {newScore}
            </div>
            {newScore < 5 ?<div className="display-round">Round: {newScore + 1}/5</div>:
            <div className="display-round">Round: 5/5</div>
            }
            <div className="memory-cards">
              {pokemonArray.map((data, index) => (
                winOrLoss === "none" ?
                <div className="card" key={index} onClick={() => handleArray(index)}>
                  <div className="pokemon">
                    <img src={data.image} alt={data.name} className="pokemon-image" />
                    <div className="pokemon-name">{data.name}</div>
                  </div>
                </div>:
                <div className="card" key={index}>
                <div className="pokemon">
                  <img src={data.image} alt={data.name} className="pokemon-image" />
                  <div className="pokemon-name">{data.name}</div>
                </div>
              </div>
              ))}
            </div>
          </div>
          {winOrLoss === "Loss" ? 
            <div className="loss-screen">
              <div className="first-text">You failed to catch all the shinies... They have escaped!</div>
              <div className="second">
              <button className="try-again" onClick={handleRestart}>Try Again?</button>
              </div>
          </div>:
            winOrLoss === "win" &&
            <>
              <div className="win-screen">
                <div className="first-text">Congratulations Pokemon Master. You've caught 'em all</div>
              <div className="second">
              <button className="try-again" onClick={handleRestart}>Play Again?</button>
              </div>
              </div>
              </>
            }
        </>
      )}
    </div>
  );
}

export default EasyGame;