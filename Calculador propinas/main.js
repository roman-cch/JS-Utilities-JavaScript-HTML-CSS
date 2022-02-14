
//referencia a los elementos html
const itPersonas = elem('#personas');
const itTotal = elem('#total');
const itPropina = elem('#propina');
const bGenerar = elem('#bGenerar');
const resultados = elem('#resultados');
const summary = elem('#summary');

//definición de variables

//variable para guardar propinas de cada persona como objetos para luego 
//mostrarlas por la interfaz
let propinas = [];

let personas;//num personas
let total;//total de la cuenta
let totalPorPersona;//cuanto paga cada uno
let porcentajePropina;// % adicional a la cuenta
let propinaPorPersona;//% propina / num personas
let totalConPropina; //total + % de propina


bGenerar.addEventListener('click', e => {
    calcular();
    //iniciamos el array vacio
    propinas = [];
    //recorremos el num de personas, siempre va a hber 1 como min
    for (let i = 1; i <= personas; i++) {
        //lo que paga cada persona
        const subtotal = totalPorPersona + propinaPorPersona;
        //objeto en el que va la info
        const persona = {
            id: i,
            consumo: totalPorPersona,
            propina: propinaPorPersona,
            total: subtotal,
            pagado: false
        };
        //metemos el objeto en el final del array
        propinas.push(persona);
    }
    //función para mostrar las personas del array
    render();
});

function calcular() {
    //doy valor a las variables
    personas = parseInt(itPersonas.value);//parse para que calcule como entero
    total = parseInt(itTotal.value);
    totalPorPersona = total / personas;
    porcentajePropina = parseFloat(itPropina.value / 100);// /100 para mosrtrat en decimal
    propinaPorPersona = totalPorPersona * porcentajePropina;
    totalConPropina = total + (total * porcentajePropina);

    console.log(personas, total, totalPorPersona, porcentajePropina, propinaPorPersona, totalConPropina);

}
//mustra la interfaz de la app
function render() {
    //inyecta html con resultados en la div summary
    summary.innerHTML = `<h2>Total a pagar: ${totalConPropina.toFixed(2)} €</h2>`;
    summary.innerHTML += `<h2>Propina total: ${(propinaPorPersona * personas).toFixed(2)} €</h2>`;

    //prepara el html para saber cuanto paga cada persona
    let html = '';
    propinas.forEach(persona => {
        //desestruct objeto para manejar mejor variables
        const { id, consumo, propina, total, pagado } = persona;

        html += `
        <div class = "persona ${pagado ? 'pagado' : ''} " data-id="${id}">
            <h3>Persona ${id}</h3>
            <div class="consumo">Consumo : ${consumo.toFixed(2)} €</div>
            <div class="propina">Propina : ${propina.toFixed(2)} €</div>
            <div class="total">Total : ${total.toFixed(2)} €</div>
            <div class="check">
                <input type="checkbox" ${pagado ? 'checked' : ''}>Pagado
            </div>
         </div>
        `;
    });
    //mostramos el html
    resultados.innerHTML = html;

    //activa el funcionamiento del checkbox para que actualice y recalcule
    //seleccionamos todos los input de tipo checkbox
    elemAll('input[type = checkbox]').forEach(checkbox => {
        checkbox.addEventListener('click', e => {
            //por cada checkbox clicado coge el id de ese objeto, almacenado en la propiedad
            //del elemento abuelo
            const id = e.target.parentElement.parentElement.getAttribute('data-id');
            //busca la primera coincidencia donde el id sea el mismo que el que acaba de obtener
            const index = propinas.findIndex(item => item.id == id);
            //guarda objeto de propinas con el index encontrado
            const persona = propinas[index];
            //marca la casilla para que el estado de pagado cambie
            persona.pagado = e.target.checked;
            //llama función para que render() cambie los resultados
            pagar();

        });
    });
}

function pagar() {
    //filtra y genera u nuevo array con las pax que pagado == false
    const noPagados = propinas.filter(x => x.pagado === false);
    //suma de valores del array de noPagados
    const nuevoTotal = noPagados.reduce((acc, item) => acc += item.total, 0);
    totalConPropina = nuevoTotal;

    //mostramos la info con el nº de personas restantes
    personas = noPagados.length
    render();

}

//función para seleccionar elementos, ahorra tiempo
function elem(selector) {
    return document.querySelector(selector);
}
function elemAll(selector) {
    return document.querySelectorAll(selector);
}

