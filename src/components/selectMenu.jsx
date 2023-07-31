import "../css/selectMenu.css"
function SelectMenu ({startGame}) {
    return(
        <div className="menu-background">
            <div className="menu">
                <div className="welcome">Welcome to the Pokemon Memory Game!</div>
                <div className="choose">Choose your Difficulty:</div>
                <div className="difficulty">
                    <div className="Easy">Easy</div>
                    <div className="Medium">Medium</div>
                    <div className="Hard">Hard</div>
                </div>
                <button className="start-game" onClick={startGame}>Start Game</button>
            </div>
        </div>
    )
}
export default SelectMenu