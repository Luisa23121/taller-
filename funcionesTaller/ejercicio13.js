/*Escriba una función que reciba un número entero y dicha función pueda determinar 
si el número enviado es positivo o negativo.  */

function determinarSigno(numero) {
    if (numero > 0) {
        return "El número es positivo";
    } else if (numero < 0) {
        return "El número es negativo";
    } else {
        return "El número es cero";
    }
}


console.log(determinarSigno(10));
console.log(determinarSigno(-5));  
console.log(determinarSigno(0));   
