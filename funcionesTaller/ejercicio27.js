/*Una función que reciba un arreglo de números y retorne otro arreglo solo con los números pares */


function filtrarPares(numeros) {
    return numeros.filter(num => num % 2 === 0);
}


console.log(filtrarPares([1, 2, 3, 4, 5, 6, 7, 8])); 
console.log(filtrarPares([10, 15, 21, 30, 42]));     
console.log(filtrarPares([1, 3, 5, 7]));            
