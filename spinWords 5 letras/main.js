
function spinW(str) {
    let strDiv = str.split(' ');//divide string inicial
    var newStr = '';//variable vacia donde irá el str nuevo

    //por cada elemento en ese array
    strDiv.forEach(element => {
        //si es de mas de 5 char
        if (element.length >= 5) {
            //lo splitea en un array de chars, le da la vuelta lo une en un string, le concatena un 
            //espacio y lo añade al array nuevo
            newStr += element.split('').reverse().join('')+(' ');
        }
        else {//si no, solo lo añade y le concatena un espacio
            newStr += element+(' ');
        }               
    });    
    
    return newStr.trim();
}

console.log(spinW("Just kidding there is still one more"));

