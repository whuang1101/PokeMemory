function returnNameIndex (array, name) {
    let index = 0;
    for (let i = 0; i < array.length; i ++) {
        if(array[i].name === name){
            index = i;
        }
    }
    return index;
}
export default returnNameIndex