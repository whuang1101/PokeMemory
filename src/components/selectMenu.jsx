import "../css/selectMenu.css"
import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiArrowRightBold } from '@mdi/js';
import MakeInfo from "./info";

function SelectMenu ({startGame, handleSelectMode, selectMode, handleInfo, actualInfo, mobile}) {
    const icon = (
        <Icon path={mdiArrowRightBold} size={1} />
    )
    const handleKeySelect = (event) => {
        if (event.key === "Enter"){
            handleSelectMode(event);
        }
    }
    return(
        <div className="menu-background">
            <div className="menu">
                <div className="welcome" tabIndex={0}>Welcome to the Shiny PokeMemory Game!</div>
                <div className="choose" tabIndex={0}>Choose your Difficulty:</div>
                <div className="difficulty">
                    {selectMode === "Easy" ?<div className="easy" tabindex="0">
                        <div className="icon">{icon}</div>
                        <div className="easy-title">Easy</div>
                        </div>:
                    <div className="easy" onClick={(e) => handleSelectMode(e)}onKeyDown = {handleKeySelect} tabindex="0" role="button">Easy</div>}
                    {selectMode === "Medium" ?<div className="medium" tabindex="0">
                        <div className="icon">{icon}</div>
                        <div className="medium-title">Medium</div>
                        </div>:
                    <div className="medium" onClick={(e) => handleSelectMode(e) } tabindex="0" onKeyDown = {handleKeySelect} role="button">Medium</div> }
                    {selectMode === "Hard" ?<div className="hard" tabindex="0">
                        <div className="icon">{icon}</div>
                        <div className="hard-title">Hard</div>
                        </div>:
                    <div className="hard" onClick={(e) => handleSelectMode(e)}tabindex="0" onKeyDown = {handleKeySelect} role="button">Hard</div>}
                </div>
                <button className="start-game" onClick={startGame}>Start Game</button>
            </div>
            <MakeInfo handleInfo = {handleInfo} actualInfo = {actualInfo} newSize={3} inGame={false} mobile ={false}/>
        </div>
        
    )
}
export default SelectMenu