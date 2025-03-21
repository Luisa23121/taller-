/* Escriba una función la cual reciba como parámetro 2 números enteros y 1 cadena, 
La idea es que los números recibidos se puedan operar según la operación que 
hallamos recibido en la cadena, ejemplo miFuncion(2, 5, ”suma”). */

function operar(num1, num2, operacion) {
    switch (operacion.toLowerCase()) {
        case "suma":
            return num1 + num2;
        case "resta":
            return num1 - num2;
        case "multiplicacion":
            return num1 * num2;
        case "division":
            return num2 !== 0 ? num1 / num2 : "Error: División por cero";
        default:
            return "Operación no válida";
    }
}

// Ejemplo de uso:
console.log(operar(2, 5, "suma"));            
console.log(operar(10, 3, "resta"));          
console.log(operar(4, 6, "multiplicacion"));  
console.log(operar(8, 2, "division"));        
console.log(operar(8, 0, "division"));        
console.log(operar(5, 5, "potencia"));        