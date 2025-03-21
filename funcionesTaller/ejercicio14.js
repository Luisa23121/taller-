/* Escriba una función la cual permita o no la entrada a un parque de atracciones, 
dicha función recibe la edad, estatura y permiso parental como parámetros. Para 
permitir el acceso el usuario deberá de ser mayor de edad y medir más de 150 cm, 
en caso de ser menor de edad debe contar con un permiso parental para que sea 
concedido el acceso. */
function permitirEntrada(edad, estatura, permisoParental) {
    if (edad >= 18 && estatura > 150) {
        return "Acceso permitido: Eres mayor de edad y tienes la estatura requerida.";
    } else if (edad < 18 && estatura > 150 && permisoParental) {
        return "Acceso permitido: Eres menor de edad, pero tienes permiso parental.";
    } else {
        return "Acceso denegado: No cumples con los requisitos.";
    }
}


console.log(permitirEntrada(20, 160, false)); 
console.log(permitirEntrada(16, 155, true));  
console.log(permitirEntrada(17, 140, true));  
console.log(permitirEntrada(15, 160, false)); 
