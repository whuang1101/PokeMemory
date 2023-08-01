import shuffleArray from "./shuffleArray";
function createDisplayArray (unClicked,clicked =[], number = 3){
    let displayArray = [];
    let newUnClicked = [...unClicked];
    let newClicked = [...clicked];
    const oneUnClicked = Math.floor(Math.random()*newUnClicked.length);
    displayArray.push(newUnClicked[oneUnClicked]);
    newUnClicked.splice(oneUnClicked,1);
    while(displayArray.length < number){
        const clickedOrUnClicked =  Math.floor(Math.random()*2);
        if(((clickedOrUnClicked === 0 && newUnClicked.length !==0) || newClicked.length === 0)) {
            const randomNumber = Math.floor(Math.random()*newUnClicked.length);
            displayArray.push(newUnClicked[randomNumber]);
            newUnClicked.splice(randomNumber,1);
        }
        if(clickedOrUnClicked === 1 && newClicked.length !==0){
            const randomNumber = Math.floor(Math.random()*newClicked.length);
            displayArray.push(newClicked[randomNumber]);
            newClicked.splice(randomNumber,1);
        }
    }
    displayArray = shuffleArray(displayArray);
    return displayArray;
    
}
export default createDisplayArray