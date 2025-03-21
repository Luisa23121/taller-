/* Escriba una función la cual reciba 5 notas de un estudiante y genere un mensaje 
informando si el estudiante aprobó o no la materia, para que la materia se de como 
aprobada el promedio del estudiante debe ser mayor o igual a 3,0.  */
function verificarAprobacion(nota1, nota2, nota3, nota4, nota5) {
    
    let promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

    
    if (promedio >= 3.0) {
        return `Aprobado con un promedio de ${promedio.toFixed(2)}`;
    } else {
        return `Reprobado con un promedio de ${promedio.toFixed(2)}`;
    }
}


let resultado = verificarAprobacion(3.5, 4.0, 2.8, 3.2, 2.5);
console.log(resultado); 
