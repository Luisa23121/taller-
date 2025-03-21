/*Crear una función que reciba una cadena y retorne true la cadena contiene la letra  z, de lo contrario debe retornar false  */



function contieneZ(cadena) {
    return cadena.toLowerCase().includes("z");
}


console.log(contieneZ("zapato")); 
console.log(contieneZ("casa"));   
console.log(contieneZ("AZUL"));   
console.log(contieneZ("letra"));  
 