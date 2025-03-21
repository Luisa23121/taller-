/*Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un 
triángulo o no. Realice una versión con condicionales y otra con estructura switch-case.  */


let angulo1 = parseInt(prompt("Ingrese el angulo 1: "))
let angulo2 = parseInt(prompt("Ingrese el angulo 2: "))
let angulo3 = parseInt(prompt("Ingrese el angulo 3: "))

switch (true) {
    case (angulo1 + angulo2 + angulo3 !== 180):
        alert(`No es un triángulo. La suma de los ángulos debe ser 180 grados.`);
        break;

    default:
        alert(`¡Es un triángulo!`);
}