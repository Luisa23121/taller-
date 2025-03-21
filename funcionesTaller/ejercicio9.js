/*Escriba una función la cual reciba una cadena como parámetro y retorne la cantidad 
de vocales que contiene la cadena.  */


function contarVocales(cadena) {
    let contador = 0;
    let vocales = ['a', 'e', 'i', 'o', 'u'];

    
    cadena = cadena.toLowerCase();

    
    for (let letra of cadena) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }

    return contador;
}


let resultado = contarVocales("Hola Mundo");
console.log("Cantidad de vocales:", resultado); 
