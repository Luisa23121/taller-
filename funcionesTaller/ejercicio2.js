/*Escriba una función que reciba el lado de un cubo y retorne su volumen.  */

function calcularVolumenCubo(lado) {
    return lado ** 3; 
}


let volumen = calcularVolumenCubo(4);
console.log("El volumen del cubo es:", volumen);
