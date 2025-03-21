/*Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no. Realice una versión con 
condicionales y otra con estructura switch-case.  */ 


let numero = parseInt(prompt("Ingrese un número entre 1 y 15:")); 

if (numero < 1 || numero > 15) {
    alert(`El número debe estar entre 1 y 15`);
} 
    else if (numero === 2 || numero === 3 || numero === 5 || numero === 7 || numero === 11 || numero === 13) {
        alert(`El número es primo`);
    } else {
        alert(`El número NO es primo`);
    }
