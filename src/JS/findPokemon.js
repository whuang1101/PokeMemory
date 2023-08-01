async function findPokemon(size) {
    let array = [];
    for (let i = 0; i < size; i++) {
        let number = Math.floor(Math.random() * 493);
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + number);
        const data = await response.json();
        const nameAndImage = {name: data.name, image: data.sprites.front_shiny , type: data.types[0].type, clicked: false}
        array.push(nameAndImage);
    }
    console.log(array);
    return array;
}


export default findPokemon;