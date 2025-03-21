/*. Escriba una función la cual reciba una cadena como parámetro y ésta retorne la 
misma cadena pero sin sus vocales.  */

function eliminarVocales(cadena) {
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    

    let resultado = cadena.split('').filter(letra => !vocales.includes(letra.toLowerCase())).join('');
    
    return resultado;
}


let resultado = eliminarVocales("Hola Mundo");
console.log("Cadena sin vocales:", resultado); 