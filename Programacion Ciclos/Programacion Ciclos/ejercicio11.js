/*Cree un programa que calcule el promedio de tres notas para n estudiantes. Use ciclo for. Use 
funciones.  */


function calcularPromedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3; 
}

let cantidadEstudiantes = parseInt(prompt("Ingrese la cantidad de estudiantes:"));

for (let i = 1; i <= cantidadEstudiantes; i++) {
    let nota1 = parseFloat(prompt("Ingrese la primera nota del estudiante " + i + ":"));
    let nota2 = parseFloat(prompt("Ingrese la segunda nota del estudiante " + i + ":"));
    let nota3 = parseFloat(prompt("Ingrese la tercera nota del estudiante " + i + ":"));

    let promedio = calcularPromedio(nota1, nota2, nota3); 

    console.log("El promedio del estudiante " + i + " es: " + promedio.toFixed(2)); 
}
