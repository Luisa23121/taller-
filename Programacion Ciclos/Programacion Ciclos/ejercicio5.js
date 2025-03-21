/*Cree un programa que lea un número y muestre si este es par o impar. Realice una versión con condicionales 
y otra con estructura switch-case.  */

let numero = parseInt(prompt("Ingresa un número:")); 

if (numero % 2 === 0) {  
    alert(`El número es par.`);
} else {  
    alert(`El número es impar.`);
}
