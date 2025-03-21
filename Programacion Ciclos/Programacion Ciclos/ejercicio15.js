/*Cree un programa que muestre los números impares entre 1 y n. */


let n = parseInt(prompt("Ingrese un número N:")); // Pedimos un número al usuario

for (let i = 1; i <= n; i += 2) { 
    console.log(i); 
}
