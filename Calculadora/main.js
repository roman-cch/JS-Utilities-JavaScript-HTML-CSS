//definimos los botones con un array bidimensional
const botones = [
    ['C', '^', '%', '/'],//primera fila
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['+/-', '0', '.', '=']
];

//objeto que manipula las operaciones
const calculo = {
    operacion: '',
    memoria: undefined,//guarda los datos temporales de la operación antes de resolverla
    numero: 0,//inicia en 0 y es el 1er num que vamos a ver representado en pantalla
    resuelto: false,//ndica si ya se ha realizado la op o no
    agregarDigito: function (n) {
        if (this.resuelto) {
            this.resuelto = false;
            this.numero = parseFloat(''.concat(n));
        } else {
            this.numero = parseFloat(''.concat(this.numero, n));
        }

    },
    agregarOperacion: function (op) {
        //desestructuracion del objeto
        const { memoria, numero, operacion } = this;
        if (numero == 0 && memoria == undefined) return false;
        if (operacion == '') {
            this.operacion = op;
            this.memoria = numero;
            this.numero = 0;
        } else {
            this.numero = this.resolver();
            this.resuelto = true;
        }
        console.log(this);
    },
    agregarFuncion: function (op) {
        switch (op) {
            case '=':
                const resultado = this.resolver();
                this.agregarFuncion('C');
                this.numero = resultado;
                break;
            case 'C':
                this.numero = 0;
                this.operacion = '';
                this.memoria = undefined;
                this.resuelto = true;
                break;
            case '.':
                if (!esFloat(this.numero)) {
                    this.numero = this.numero + '.';
                }
                break;
            case '+/-':
                this.numero = this.numero * -1;

                break;

        }
    },
    resolver: function () {//implementa'=' y resuelve
        switch(this.operacion){
            case'+':return this.suma();
            case'-':return this.resta();
            case'*':return this.multi();
            case'/':return this.divi();
            case'%':return this.porcent();
            case'^':return this.exponente();

            default:
            throw new Error ('Símbolo no identificado');
        }
    },
    render: function (elemento) {
        elemento.textContent = this.numero;
    },//imprime el resultado por pantalla
    suma: function () {
        return this.numero + this.memoria;
    },
    resta: function () {
        return this.memoria + this.numero;
    },
    multi: function () {
        return this.memoria * this.numero;
    },
    divi: function () {
        return this.memoria / this.numero;
    },
    porcent: function () {
        return this.memoria % this.numero;
    },
    exponente: function () {
        return this.memoria ** this.numero;
    }

}

//referencia de los elementos html iniciales con las funciones selectoras
const display = $('#display');
const botonesContainer = $('#botones-container');

//impresion de botones, recorremos y mostramos con dos for anidados
for (let fila of botones) {
    for (let celda of fila) {
        //creación de botón
        const boton = document.createElement('button');
        boton.textContent = celda;
        //evento click
        boton.addEventListener('click', e => {
            if (esNumero(celda)) {
                calculo.agregarDigito(celda);
            } else if (esFuncion(celda)) {
                calculo.agregarFuncion(celda);
            } else {
                calculo.agregarOperacion(celda);
            }
            calculo.render(display);
        });
        //añado botones a botones-container
        botonesContainer.appendChild(boton);
    }
}


// funcion para referenciar elementos rapidamente con querySelector
function $(selector) {
    return document.querySelector(selector)
}
// funcion para referenciar elementos rapidamente con querySelectorAll
function $$(selector) {
    return document.querySelectorAll(selector)
}
// función para saber si lo que tecleo es un numero o no
function esNumero(n) {
    return !isNaN(n);
}
// funcion para saber si es float. Pasamos el numero a string y buscamos si hay un punto
//si es así, lo comparamos con -1 para demostrar que es una posicion del array y por lo tanto, true
function esFloat(n) {
    if (n.toString().indexOf('.') > -1) {
        return true;
    } else {
        return false;
    }
}
// Funcion para saber si se ha hecho clic en un boton de función. Si n es igual a uno de estos 
// caracteres regresará true
function esFuncion(n) {
    const funciones = ['C', '=', '.', '+/-'];
    return funciones.some((caracter) => caracter == n);
}