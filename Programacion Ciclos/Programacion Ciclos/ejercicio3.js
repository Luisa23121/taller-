/* Cree un programa que reciba dos números y muestre el mayor. En caso de que los números sean iguales 
también se debe mostrar al usuario.  */

let numero1 = parseFloat(prompt("Introduce el primer número:"));
let numero2 = parseFloat(prompt("Introduce el segundo número:"));

if (numero1 > numero2) {
    alert(`El primer número es mayor: ` + numero1);
} else if (numero2 > numero1) {
    alert(`El segundo número es mayor: ` + numero2);
} else {
    alert(`Los dos números son iguales.`);
}