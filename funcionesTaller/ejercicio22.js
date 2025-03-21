/* Escriba un programa que calcule si un estudiante aprueba o reprueba con base en 
tres notas. Usa tres funciones: 
● calcularPromedio(notas): calcula el promedio de las tres notas. 
● esAprobado(promedio): determina si el estudiante aprueba o no (promedio >= 6). 
● mostrarResultado(aprobado): imprime si el estudiante aprueba o reprueba.  */


function calcularPromedio(notas) {
    let suma = notas.reduce((total, nota) => total + nota, 0);
    return suma / notas.length;
}


function esAprobado(promedio) {
    return promedio >= 6;
}


function mostrarResultado(aprobado) {
    if (aprobado) {
        console.log("¡Felicidades! Has aprobado. 🎉");
    } else {
        console.log("Lo siento, has reprobado. 😞");
    }
}


let notasEstudiante = [7, 5, 8]; 
let promedio = calcularPromedio(notasEstudiante);
let aprobado = esAprobado(promedio);
mostrarResultado(aprobado);
