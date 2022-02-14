var isSquare = function (n) {
    return Math.sqrt(n) % 1 === 0;
}
//hace la raiz cuadrada del n dado, y luego comprueba si el resto del resultado
//dividido entre 1 es = 0. Si la raiz cuadrada de n es decimal quiere decir que 
// n no es un cuadrado perfecto y por lo tanto su % 1 será diferente de 0, ya que
// % hace la división tomando solo la parte entera de n

