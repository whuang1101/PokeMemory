async function findPokemon(size) {
    let newNumber = [];
    for (let i = 0; i < size; i++) {
        let number = Math.floor(Math.random() * 493);
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + number);
        const data = await response.json();
        newNumber.push({name: data.name, image: data.sprites.front_shiny , type: data.types[0].type, clicked: false});
    }
    return newNumber;
}


export default findPokemon;