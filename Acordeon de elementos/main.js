//referenciamos el elemento boton
const items = document.querySelectorAll('.acordeon .item .header button');
//recorremos cada boton y le asocuamos un evento click
//referenciamos el nodo al que queremos acceder
//si no esta mostrado lo muestra y si esta mostrado lo oculta referenciando el estilo 'show'
items.forEach(item => {
    item.addEventListener('click', e => {
        const content = e.target.parentElement.nextElementSibling;
        content.classList.toggle('show');
    });
});