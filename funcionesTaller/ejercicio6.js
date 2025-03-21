/*Escriba una función con el nombre de esVocal() que tome un carácter , devuelva 
True si es vocal (no importa si es mayúscula o minúscula), y devuelva False en caso 
contrario.  */

function esVocal(caracter) {

    caracter = caracter.toLowerCase();

    
    let vocales = ['a', 'e', 'i', 'o', 'u'];


    return vocales.includes(caracter);
}


console.log(esVocal('A')); 
console.log(esVocal('e')); 
console.log(esVocal('z')); 
console.log(esVocal('O')); 
