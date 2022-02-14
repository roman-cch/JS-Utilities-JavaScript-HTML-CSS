
var altura= prompt("Introduce tu altura",0);
while(altura<=0)
{
    if(altura<=0)
    {
        altura= prompt("ERROR  Introduce un valor de altura correcto",0);
    }
}
var peso= prompt("Introduce tu peso",0);  
while(peso<=0){  
    if(peso<=0)
    {
        peso= prompt("ERROR  Introduce un valor de peso correcto",0);
    }
}

var imc= peso/Math.pow(altura,2);
document.write("Su IMC es de:  "+ imc+"<br>");

if(imc < 16.00){
    document.write("<16.00: "+"<b>"+"Infrapeso (delgadez severa)");
}else if(imc>=16.00 && imc<=16.99){
    document.write("16.00 – 16.99: "+"<b>"+"Infrapeso (delgadez moderada)");
}else if(imc>=17.00 && imc<=17.99){
    document.write("17.00 - 18.49: "+"<b>"+"Infrapeso (delgadez aceptable)");
}else if(imc>=18.50 && imc<=24.99){
    document.write("18.50 - 24.99: "+"<b>"+"Peso normal");
}else if(imc>=25.00 && imc<=29.99){
    document.write("25.00 - 29.99: "+"<b>"+"Sobrepeso");
}else if(imc>=30.00 && imc<=34.99){
    document.write("30.00 - 34.99: "+"<b>"+"Obeso (Tipo I) ");
}else if(imc>=35.00 && imc<=40.00){
    document.write("35.00 - 40.00: "+"<b>"+"Obeso (Tipo II) ");
}else if(imc>40.00){
    document.write(">40.00: "+"<b>"+"Obeso (Tipo III) ");
}