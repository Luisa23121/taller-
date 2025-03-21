/* Cree un programa que muestre el promedio de n números, dejándose de solicitar números 
cuando se introduzca el cero.  */


let suma = 0; 
let contador = 0; 

while (true) { 
    let numero = parseFloat(prompt("Ingrese un número (0 para terminar):")); 
    
    if (numero === 0) { 
        break;
    }

    suma += numero; 
    contador++; 
}

if (contador > 0) { 
    let promedio = suma / contador; 
    console.log("El promedio de los " + contador + " números es: " + promedio.toFixed(2)); // Mostramos el promedio
} else {
    console.log("No ingresaste ningún número, no se puede calcular un promedio.");
}
