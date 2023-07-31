import { useEffect, useState } from "react";
import "../css/easyGame.css";
import findPokemon from"../JS/findPokemon"
import shuffleArray from "../JS/shuffleArray";
function EasyGame({ gameClick, newScore, newHandleScore}) {
  const [redLoading, setRedLoading] = useState(true);
  const [pokemonArray,setPokemonArray] = useState([]);
  const [winOrLoss, setWinOrLoss] = useState("");
  useEffect(() => {
    const fetchPokemon = async () => {
      const foundPokemon = await findPokemon(5);
      setPokemonArray(foundPokemon)
      setTimeout(() => {
        setRedLoading(false);
      }, 4000);
    };
    fetchPokemon()
  
  }, [gameClick]);
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
                winOrLoss === "" ?
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
          <div className="loss">
            <div className="loss-screen">
              Loss
            </div>
          </div>:
            winOrLoss === "win" &&
            <div className="win">
              <div className="win-screen">Win</div>
            </div>
            }
        </>
      )}
    </div>
  );
}

export default EasyGame;