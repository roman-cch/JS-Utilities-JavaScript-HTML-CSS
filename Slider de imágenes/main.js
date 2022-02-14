//referencia a los botones
const bPrev = document.querySelector('#bPrev');
const bNext = document.querySelector('#bNext');
//referencia a todas las capas item
const items = document.querySelectorAll('#slider-container .item');
//comprobación, devuelve nodelist con las divs
console.log(items);

//declaramos variable para saber el indice y variable con el total de indices para saber
//donde nos encontramos
let index = 0;
const total = items.length;

//funcion mostrar: le pasamos el index y le añadimos la clase 'item-active con  la funcion
//classList.add()
function mostrarItem(index) {
    items[index].classList.add('item-active');
}
//función ocultar: le quitamos al item la clase item-active
function ocultarItem() {
    items.forEach(item => {
        item.classList.remove('item-active');
    });
}



//creación eventos click
//llamamos un avez para que muestre item[0]
mostrarItem(index);
bPrev.addEventListener('click', e => {
    if (index > 0) {
        index--;
        ocultarItem();
        mostrarItem(index);
    }
});
//si index es menor que total, suma uno, oculta la foto anterior y muestra la siguiente
bNext.addEventListener('click', e => {
    if (index < total-1) {
        index++;
        ocultarItem();
        mostrarItem(index);
    }
});