import shuffleArray from "./shuffleArray";
function createDisplayArray (unClicked,clicked =[], number = 3){
    // console.log(unClicked);
    // console.log(clicked);
    let displayArray = [];
    const oneUnClicked = Math.floor(Math.random()*unClicked.length);
    displayArray.push(unClicked[oneUnClicked]);
    unClicked.splice(oneUnClicked,1);
    while(displayArray.length < number){
        const clickedOrUnClicked =  Math.floor(Math.random()*2);
        if(((clickedOrUnClicked === 0 && unClicked.length !==0) || clicked.length === 0)) {
            const randomNumber = Math.floor(Math.random()*unClicked.length);
            displayArray.push(unClicked[randomNumber]);
            unClicked.splice(randomNumber,1);
        }
        if(clickedOrUnClicked === 1 && clicked.length !==0){
            const randomNumber = Math.floor(Math.random()*clicked.length);
            displayArray.push(clicked[randomNumber]);
            clicked.splice(randomNumber,1);
        }
    }
    displayArray = shuffleArray(displayArray);
    return displayArray;
    
}
export default createDisplayArray