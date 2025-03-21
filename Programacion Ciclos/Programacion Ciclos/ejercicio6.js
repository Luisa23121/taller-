/* Cree un programa que lea un número y muestre si este es divisible entre cinco o no. Realice una versión con 
condicionales y otra con estructura switch-case.  */


let numero = parseInt(prompt("Ingrese un número:")); 

if (numero % 5 === 0) { 
alert(`El número es divisible entre 5`);
} else {
    alert(`El número NO es divisible entre 5`);
}
