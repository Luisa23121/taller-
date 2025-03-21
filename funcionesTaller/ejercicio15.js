/*Escriba una función generarContraseña la cual reciba n como parámetro y esta cree 
una contraseña de n caracteres aleatorios. (Los caracteres pueden ser números, 
letras o signos).  */

function generarContraseña(n) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let contraseña = "";

    for (let i = 0; i < n; i++) {
        let indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres.charAt(indiceAleatorio);
    }

    return contraseña;
}


console.log(generarContraseña(10)); 
