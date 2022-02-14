//uso de objetos
//manipular tiempo de ejecución de eventos

//objeto tiempo

const tiempo = {
    horas: {
        valor: 0,
        limite: 23
    },
    minutos: {
        valor: 0,
        limite: 59
    },
    segundos: {
        valor: 0,
        limite: 59
    }
};

//definición de los elementos html a usar
//selecciona todos los botones que tengan dicha clase
const botonesAumentar = document.querySelectorAll('.bAumentar');
const botonesDisminuir = document.querySelectorAll('.bDisminuir');
//selecciona el boton con dicho id
const bIniciar = document.querySelector('#bIniciar');
const bDetener = document.querySelector('#bDetener');
const bReiniciar = document.querySelector('#bReiniciar');

//variable para manejar el tiempo
let contador;

//eventos para botones
botonesAumentar.forEach(bAumentar => {
    bAumentar.addEventListener('click', e => {
        //apunta al atributo del elemento html que quiero controlar
        const unidad = e.target.getAttribute('data-unidad');
        incrementar(unidad);
    });
});
botonesDisminuir.forEach(bDisminuir => {
    bDisminuir.addEventListener('click', e => {
        const unidad = e.target.getAttribute('data-unidad');
        decrementar(unidad);
    });
});

bIniciar.addEventListener('click', iniciarCuenta);
bDetener.addEventListener('click', detenerCuenta);
bReiniciar.addEventListener('click', e => {
    detenerCuenta();
    tiempo.segundos.valor = 0;
    tiempo.minutos.valor = 0;
    tiempo.horas.valor = 0;
    mostrarInterfaz();
});

//funciones
function incrementar(unidad) {
    if (tiempo[unidad].valor + 1 <= tiempo[unidad].limite) {
        tiempo[unidad].valor++;
        
    }
    mostrarInterfaz();
}
function decrementar(unidad) {
    //si es menos que 0 no se puede decrementar
    if (tiempo[unidad].valor - 1 >= 0) {
        tiempo[unidad].valor--;
        
    }
    mostrarInterfaz();

}
//funcion para mostrar los numeros en la interfaz
function mostrarInterfaz() {
    const horas = document.querySelector('#horas .numero');
    const minutos = document.querySelector('#minutos .numero');
    const segundos = document.querySelector('#segundos .numero');
    //slice coge la porcion de dos números desde la derecha, con lo que el 0 de la izqu no se mostrará
    //a partir de 10
    horas.textContent = `0${tiempo.horas.valor}`.slice(-2);
    minutos.textContent = `0${tiempo.minutos.valor}`.slice(-2);
    segundos.textContent = `0${tiempo.segundos.valor}`.slice(-2);

}
/**
 *  setInterval() es una función que toma dos parámetros, el primero es una función que queremos que se 
 * ejecute cada cierto tiempo,  e segundo es la duración, cada cuanto queremos que se ejecute.
 * -toma medidas en milisegundos 1sec = 1000msec
 */

function iniciarCuenta() {
    contador = setInterval(() => {//se va a ejecutar cada segundo
        //deconstruccion obj tiempo para manejar mejor las variables
        const { horas, minutos, segundos } = tiempo;
        //si todos los valores de tiempo === 0, setInterval deja de calcular
        if (horas.valor === 0 && minutos.valor === 0 && segundos.valor === 0) {
            detenerCuenta();
        }
        //si segundos.valor === 0 disminuimos los minutos
        else if (segundos.valor === 0) {
            //si minutos.valor === 0 disminuimos las horas
            if (minutos.valor === 0) {
                if (horas.valor === 0) {
                    //no pasa nada, todo es === 0 y llama a detenerCuenta
                } else {//si disminuimos una hora, los minutos y segundos toman el valor del limite
                    tiempo.minutos.valor = minutos.limite;
                    tiempo.segundos.valor = segundos.limite;
                    decrementar('horas');
                }
            } else {
                tiempo.segundos.valor = segundos.limite;
                decrementar('minutos');
            }
        } else {
            decrementar('segundos');
        }



    }, 1000);
}
/**
 * clearInterval() permite borrar un intervalo pasándole la variable de dicho intervalo
 */
function detenerCuenta() {
    clearInterval(contador);
}