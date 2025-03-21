/*Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no. Realice una versión con 
condicionales y otra con estructura switch-case.  */


let numero = parseInt(prompt("Ingrese un número entre 1 y 15:")); 

switch (numero) {
    case 2: 
    case 3: 
    case 5: 
    case 7: 
    case 11: 
    case 13:
        alert(`El número es primo`);
        break;
    case 1:
    case 4: 
    case 6: 
    case 8: 
    case 9: 
    case 10: 
    case 12: 
    case 14: 
    case 15:
        alert(`El número NO es primo`);
        break;
    default:
        alert(`El número debe estar entre 1 y 15`);
}
