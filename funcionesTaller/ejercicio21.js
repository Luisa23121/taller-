/*Escriba un programa que verifique si un número es primo utilizando dos funciones: 
● esPrimo(numero): determina si un número es primo. 
● imprimirResultado(numero): imprime si el número es primo o no, llamando a la 
función esPrimo. */
// Función para verificar si un número es primo


function esPrimo(numero) {
    if (numero < 2) return false; 
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false; 
    }
    return true;
}


function imprimirResultado(numero) {
    if (esPrimo(numero)) {
        console.log(`${numero} es un número primo.`);
    } else {
        console.log(`${numero} no es un número primo.`);
    }
}


imprimirResultado(7);  
imprimirResultado(10); 
imprimirResultado(2);  
