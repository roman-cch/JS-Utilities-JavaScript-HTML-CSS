
var array1 = [true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true];


// filter() recibe una función como parámetro que pone la condición de 
// devolver solo los elementos true del array
function countSheep(array) {
  let array2 = array.filter(elemento => {
    return elemento === true;

  });
  return array2.length;
}
console.log(countSheep(array1));


//filtra y la condición es la función Boolean() que averigua si una expresión es true, true,
//por lo que solo devolverá los objetos true del array

function countSheep2(array) {
  return array.filter(Boolean).length;

}
console.log(countSheep2(array1));
