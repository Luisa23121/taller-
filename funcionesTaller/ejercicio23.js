/* Escriba un programa que genere una contraseña segura a partir de una palabra 
base y una serie de reglas. Usa dos funciones: 
● generarContraseña(palabraBase): genera una contraseña agregando números y 
caracteres especiales. 
● imprimirContraseña(contraseña): muestra la contraseña generada. */


function generarContraseña(palabraBase) {
    let caracteresEspeciales = "!@#$%^&*";
    let numeros = Math.floor(Math.random() * 900) + 100;
    let simbolo = caracteresEspeciales[Math.floor(Math.random() * caracteresEspeciales.length)]; 

    return palabraBase.charAt(0).toUpperCase() + palabraBase.slice(1) + numeros + simbolo;
}


function imprimirContraseña(contraseña) {
    console.log(`Tu contraseña segura es: ${contraseña}`);
}


let palabraBase = "seguridad";
let contraseña = generarContraseña(palabraBase);
imprimirContraseña(contraseña);
