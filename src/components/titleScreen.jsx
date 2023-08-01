import { useState, useEffect } from "react";
import SelectMenu from "./selectMenu";
import '../css/titleScreen.css'
import GamePlay from "./gamePlay.jsx";

function TitleScreen() {
  const [loading, setLoading] = useState("loading");
  const [loadingMessage, setLoadingMessage] = useState("Loading");
  const [loadGame, setLoadGame] = useState(false);
  const [score, setScore] = useState(0);
  const [selectMode, setSelectMode] = useState("Easy")
  const handleGame = () =>{
    setLoadGame(!loadGame)
  }
  const handleSelectMode = (e) => {
    const mode = e.target.innerHTML;
    setSelectMode(mode);
  }
  const handleScore = () =>{
    setScore(score +1);
  }
  useEffect(() => {
    setTimeout(() => {
      setLoading("background");
    }, 3500);

    setTimeout(() => {
      setLoadingMessage("Loading " + ".");
    }, 1000);

    setTimeout(() => {
      setLoadingMessage("Loading " + ". .");
    }, 2000);

    setTimeout(() => {
      setLoadingMessage("Loading " + ". . .");
    }, 3000);

  }, []);
  
  return (
    <div className={loading}>
      {loading === "loading" ? <div>{loadingMessage}</div> :
      !loadGame ? <SelectMenu startGame={handleGame} handleSelectMode={handleSelectMode} selectMode={selectMode}/>: <GamePlay selectMode={selectMode} gameClick={loadGame} newScore={score} newHandleScore={handleScore} setNewScore ={setScore} handleGame = {handleGame}/>}
    </div>

  );
}

export default TitleScreen;