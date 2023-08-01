import { useEffect, useState } from "react";
import "../css/gamePlay.css";
import findPokemon from"../JS/findPokemon"
import createDisplayArray from "../JS/createDisplayArray";
import returnNameIndex from "../JS/returnNameIndex";
function GamePlay({selectMode, gameClick, newScore, newHandleScore, setNewScore, handleGame}) {
  const [redLoading, setRedLoading] = useState(true);
  const [displayArray, setDisplayArray] = useState([]);
  const [clickedArray, setClickedArray] = useState([]);
  const [unClickedArray, setUnClickedArray] = useState([]);
  const [winOrLoss, setWinOrLoss] = useState("none");
  const [tryAgain, setTryAgain] = useState(false);
  const [flipCards, setFlipCards] = useState(true);
  const [tempVar, setTempVar] = useState(false);
  const [flipClass, setFlipClass] = useState("card-side front")
  const[flipBackClass,setFlipBackClass] = useState("card-side back")
  let numberOfRounds = 0;
  let displayNumber = 0;
  let mobileVersion = "";
  if(selectMode === "Easy"){
    mobileVersion= "memory-cards easy-mobile";
    numberOfRounds = 5;
    displayNumber = 4;
  }
  else if(selectMode === "Medium"){
    mobileVersion= "memory-cards medium-mobile"
    numberOfRounds = 10;
    displayNumber = 4;
  } 
  else if(selectMode === "Hard") {
    mobileVersion= "memory-cards hard-mobile"
    numberOfRounds = 20;
    displayNumber =6;
  }
  useEffect(() => {
    const fetchPokemon = async () => {
      const foundPokemon = await findPokemon(numberOfRounds);
      setUnClickedArray([...foundPokemon]);
      const makeArray = createDisplayArray([...foundPokemon], [] , displayNumber)
      setDisplayArray(makeArray);
      setTimeout(() => {
        setRedLoading(false);
      }, 4000);
    };
    fetchPokemon();
    const resetGame = () => {
      setClickedArray([]);
      setWinOrLoss("none");
      setNewScore(0);
      setTryAgain(false); 

    }
    if(tryAgain){
      resetGame();
    }
  
  }, [gameClick, tryAgain]);
  const handleExit = () => {
    setClickedArray([]);
    setWinOrLoss("none");
    setNewScore(0);
    setTryAgain(false); 
    handleGame()
  }
  const handleArray = (index) => {
    if(!flipCards){
      if(!displayArray[index].clicked){
      setFlipCards(!flipCards)
      setFlipClass("card-side front rotation")
      setFlipBackClass("card-side back rotation")
      setTempVar(!tempVar);
      setNewScore(newScore+1);
      const unClickedIndex = returnNameIndex(unClickedArray, displayArray[index].name);
      setUnClickedArray((prevUnClicked) => {
        const newUnClicked = [...prevUnClicked];
        newUnClicked.splice(unClickedIndex,1);
        return newUnClicked
      })
      const newUnClicked = [...unClickedArray];
      newUnClicked.splice(unClickedIndex,1);
      setClickedArray((prevClicked) => {
        const newClicked = [...prevClicked];
        const newDisplay= displayArray[index];
        newDisplay.clicked = true
        newClicked.push(newDisplay);
        return newClicked;
      })
      const newClicked = [...clickedArray];
      newClicked.push(displayArray[index]);

      if(unClickedArray.length >1)
      {
        setTimeout(() => {
          const createDisplay = createDisplayArray(newUnClicked,newClicked,displayNumber);
          setDisplayArray([...createDisplay])
        }, 1000);
    }
      }
      else{
        setWinOrLoss("loss")
      }}
  }
  const handleWin = () => {
    if(clickedArray.length === numberOfRounds){
      setWinOrLoss("win");
    }
  }
  const handleRestart = () => {
    setTryAgain(!tryAgain)
  }
  useEffect(() => {
    setTimeout(() => {
      if(clickedArray.length !== 0)
      {
      setFlipClass("card-side front")
      setFlipBackClass("card-side back")
        
      }
    }, 1500);
    setTimeout(() => {
      setFlipCards(!flipCards)
    }, 3000);
  },[tempVar])
  useEffect(()=> {
    if(clickedArray.length=== numberOfRounds) 
    { 
      handleWin()
    }
  },[unClickedArray, displayArray])
  
  return (
    <div className="game-background">
      {redLoading ? (
        <div className="red-loading"></div>
      ) : (
        <>
        <div className="return-title" onClick={handleExit}>
          <div className="first-title">PokeMemory</div>
        <div className="second-title">
        Main Menu
        </div>
        </div>
          <div className="game">
            <div className="display-score">
              Score: {newScore}
            </div>
            {newScore < numberOfRounds ?<div className="display-round">Round: {newScore + 1}/{numberOfRounds}</div>:
            <div className="display-round">Round: {numberOfRounds}/{numberOfRounds}</div>
            }
            <div className={mobileVersion}>
              {displayArray.map((data, index) => (
                winOrLoss === "none" ?
                <div className="card" key={index} onClick={() => handleArray(index)}>
                  <div className={flipClass} >
                    <div className="display-pokemon">
                        <div className="pokemon">
                        <img src={data.image} alt={data.name} className="pokemon-image" />
                        <div className="pokemon-name">{data.name}</div>
                      </div>
                    </div>
                  <div className={flipBackClass}></div>
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
            <div className="bottom-section">
            </div>
          </div>
          {winOrLoss === "loss" ? 
          <div className="loss">
            <div className="loss-screen">
              <div className="first-text">You failed to catch all the shinies... They have escaped!</div>
              <div className="second">
              <button className="try-again loss-version" onClick={handleRestart}>Try Again?</button>
              </div>
            </div>
          </div>:
            winOrLoss === "win" &&
            <>
              <div className="win">
                  <div className="win-screen">
                    <div className="first-text">Congratulations Pokemon Master. You've caught 'em all</div>
                  <div className="second">
                    <button className="try-again" onClick={handleRestart}>Play Again?</button>
                  </div>
                  </div>
              </div>
              </>
            }
        </>
      )}
    </div>
  );
}

export default GamePlay;