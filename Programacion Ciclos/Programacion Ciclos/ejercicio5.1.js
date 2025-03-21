/*Cree un programa que lea un número y muestre si este es par o impar. Realice una versión con condicionales 
y otra con estructura switch-case.  */

let numero = parseInt(prompt("Ingresa un número:")); 

switch (numero % 2) {  
    case 0:  
        alert(`El número es par.`);
        break;
    case 1:  
    case -1:  
        alert(`El número es impar.`);
    
}
