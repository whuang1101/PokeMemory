import { useState, useEffect } from "react";
import SelectMenu from "./selectMenu";
import '../css/titleScreen.css'
import EasyGame from "./easyGame";
function TitleScreen() {
  const [loading, setLoading] = useState("loading");
  const [loadingMessage, setLoadingMessage] = useState("Loading");
  const [loadGame, setLoadGame] = useState(false);
  const [score, setScore] = useState(0);
  const handleGame = () =>{
    setLoadGame(!loadGame)
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
      !loadGame ? <SelectMenu startGame={handleGame}/>: <EasyGame gameClick={loadGame} newScore={score} newHandleScore={handleScore} setNewScore ={setScore}/>}
    </div>
  );
}

export default TitleScreen;