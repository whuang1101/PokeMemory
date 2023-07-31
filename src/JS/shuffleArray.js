function shuffleArray(array) {
    for(let i =0; i < array.length; i ++){
        const j = Math.floor(Math.random(array.length-1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
}

export default shuffleArray