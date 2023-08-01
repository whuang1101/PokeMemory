import "../css/selectMenu.css"
import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiArrowRightBold } from '@mdi/js';
function SelectMenu ({startGame, handleSelectMode, selectMode}) {
    const icon = (
        <Icon path={mdiArrowRightBold} size={1} />
    )
    return(
        <div className="menu-background">
            <div className="menu">
                <div className="welcome">Welcome to the Shiny PokeMemory Game!</div>
                <div className="choose">Choose your Difficulty:</div>
                <div className="difficulty">
                    {selectMode === "Easy" ?<div className="easy">
                        <div className="icon">{icon}</div>
                        <div className="easy-title">Easy</div>
                        </div>:
                    <div className="easy" onClick={(e) => handleSelectMode(e)}>Easy</div>}
                    {selectMode === "Medium" ?<div className="medium">
                        <div className="icon">{icon}</div>
                        <div className="medium-title">Medium</div>
                        </div>:
                    <div className="medium" onClick={(e) => handleSelectMode(e)}>Medium</div>}
                    {selectMode === "Hard" ?<div className="hard">
                        <div className="icon">{icon}</div>
                        <div className="hard-title">Hard</div>
                        </div>:
                    <div className="hard" onClick={(e) => handleSelectMode(e)}>Hard</div>}
                </div>
                <button className="start-game" onClick={startGame}>Start Game</button>
            </div>
        </div>
    )
}
export default SelectMenu