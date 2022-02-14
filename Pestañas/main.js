const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

let index = 0;

cambiarTab(index);

tabs.forEach(function (tab, i) { //i = al indice de la pestaña a la que queremos dar click
    tab.addEventListener('click', e => {
        index = i;
        cambiarTab(index);
    });
});

//cambia el estilo de las tabs de class content para mostrar solo el contenido de la que esta activa
function cambiarTab(index) {
    contents.forEach(function (content) {//ocultamos todos los contenidos
        content.style.display = 'none';
    });

    tabs.forEach(tab => {//marcamos como inactivas todas las tabs
        tab.classList.remove('active-tab');
    });
    //marcamos como activa la tab cuyo indice se corresponda con el índice de la tab que hemos hecho click
    tabs[index].classList.add('active-tab');
    //mostramos el conteido cuyo indice se corresponda con el índice de la tab que hemos hecho click
    contents[index].style.display = 'block';
}