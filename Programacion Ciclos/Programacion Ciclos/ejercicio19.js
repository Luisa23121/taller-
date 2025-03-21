/* Cree un programa que calcule la suma de los cuadrados de los números entre 1 y n. */


let n = parseInt(prompt("Ingrese un número N:")); 
let sumaCuadrados = 0; 
for (let i = 1; i <= n; i++) { 
    sumaCuadrados += i * i; 
}

console.log("La suma de los cuadrados de los números del 1 al " + n + " es: " + sumaCuadrados);
