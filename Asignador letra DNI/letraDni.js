        // Apartado 1--------------------------------------
        function letraDNI(dni){

            var dni = prompt('Introduce DNI sin letra');
            var letras = 'TRWAGMYFPDXBNJZSQVHLCKET';
            return dni+letras.charAt(dni % 23);
     
        }

        alert(letraDNI());

        //Apartado 2------------------------------------------

        function miFuncion(palabra,numero){

            var palabra = prompt("Introduce palabra");
            var numero = prompt("Introduce número");


            if(numero==1){
                if(palabra=palabra.toUpperCase()){
                    return palabra;
                }
                else{
                    return "Numero 1 y palabra en minúscula"
                }
            }
            else if(numero==0){
                if(palabra=palabra.toLowerCase()){
                    return palabra;
                }
                else{
                    return "Numero 0 y palabra en mayúscula"
                }
            }

        }

        alert(miFuncion());