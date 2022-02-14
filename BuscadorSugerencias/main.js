//simulacion de una bd con un objeto, para que nos devuelva resultados
const db = [
    'luis',
    'maria',
    'sergio',
    'ainoa',
    'roman'
];

//ref a elemento
const buscador = document.querySelector('#buscador');
const sugerencias = document.querySelector('#sugerencias');

//evento input
buscador.addEventListener('input', e => {
    //constante query
    const q = e.target.value.toLowerCase().trim();
    //si no escribimos nada no muestra nada
    if (q == '') mostrarSugerencias([], q);
    //en una variable guardamos un filtrado del objeto db. Si lo que escribimos coincide con algo del db 
    //devuelve el item, que es un array de caracteres
    //la coincidencia se hace con if. si 'q' coincide con item, sus indices coincidiran y seran >-1
    const res = db.filter(item => {
        if (item.indexOf(q) > -1) return item;
    });
    //muestra sugerencia
    mostrarSugerencias(res, q);

});

//le pasamos los valores que son las sugerencias y la query como tal
function mostrarSugerencias(valores, q) {
    //borra contenido previo
    sugerencias.innerHTML = '';
    //valida, si no existe q, no se muestra sugerencia, de lo contrario, si
    if (q == '') {
        sugerencias.style.display = 'none';
        return false;
    } else {
        sugerencias.style.display = 'block';
    }
    //itera entre los elementos del objeto db para mostrar todos los que vayan 
    //coincidiendo y crear el elemento html con su formato
    valores.forEach(valor => {
        const elemento = document.createElement('a');
        elemento.href = '#';
        let texto = valor.replace(q, `<strong>${q}</strong>`);
        elemento.innerHTML = texto;
        sugerencias.appendChild(elemento);

        elemento.addEventListener('click', e => {
            buscador.value = e.target.textContent;
            sugerencias.innerHTML = '';
            sugerencias.style.display = 'none';

        });
    });
}