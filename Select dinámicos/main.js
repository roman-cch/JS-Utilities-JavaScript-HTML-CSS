//cargar diferentes opciones en un select ( listas desplegables)

//creamos un objeto con nuestros datos, que en condiciones normales nos los va a dar una base de datos

const data = {
    paises: ['spain', 'eu', 'italia'],
    estados: {
        spain: ['cm', 'cv',],
        eu: ['ny', 'texas'],
        italia: ['veneto', 'toscana']
    },
    ciudades: {
        cm: ['cuenca', 'albacete', 'toledo'],
        cv: ['valencia', 'alicante', 'castellon'],
        ny: ['nyc', 'albany', 'bufalo'],
        texas: ['austin', 'houston', 'dallas'],
        veneto: ['verona', 'padua', 'venecia'],
        toscana: ['florencia', 'livorno', 'pisa']

    }
};

//ref a  elementos html
const paises = document.querySelector('#paises');
const estados = document.querySelector('#estados');
const ciudades = document.querySelector('#ciudades');

paises.innerHTML = '';

//llama a la función para llenar el primer select
llenarSelect(paises, data.paises);

//eventos, 'change'. cada vez que se cambie de opción se deben activar las opciones
//predeterminadas para esa opción
paises.addEventListener('change', e => {
    //elemento al que apuntamos con el evento
    const pais = e.target.value;
    //validamos con una opción vacía para que nos permita volver al estado inciial del select
    if (pais == '') return false;
    //ref a los estados de cada pais
    const estados = data.estados[pais];
    //llama al elemento que quiere cargar en el siguiente select y los datos
    llenarSelect(this.estados, estados)

});
estados.addEventListener('change', e => {
    //elemento al que apuntamos con el evento
    const estado = e.target.value;
    //validamos con una opción vacía para que nos permita volver al estado inciial del select
    if (estado == '') return false;
    //ref a los estados de cada pais
    const ciudades = data.ciudades[estado];
    //llama al elemento que quiere cargar en el siguiente select y los datos
    llenarSelect(this.ciudades, ciudades)


});
ciudades.addEventListener('change', e => {

});



//Funciones
//inyecta el html en los selects
function llenarSelect(elemento, data) {
    //elemento en el que vamos a inyectar las opciones
    elemento.innerHTML = '';
    //añadimos un elemento vacío que va a ser la opción en blanco
    const empty = document.createElement('option');
    elemento.add(empty);

    //foreach que recorre cada una de las opciones, crea un elemento y le da el texto 
    //y el valor del dato que ha recorrido
    data.forEach(item => {
        const opcion = document.createElement('option');
        opcion.text = item;
        opcion.value = item;
        //añadimos elemento opción creado, en el elemento html que se va a inyectar
        elemento.add(opcion);
    });


}