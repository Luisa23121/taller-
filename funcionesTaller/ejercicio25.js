/*Una función que recibe una cadena y muestra si la cadena tiene la letra s o S */


function contieneS(cadena) {
    return cadena.toLowerCase().includes("s");
}


console.log(contieneS("sol"));    
console.log(contieneS("CASA"));   
console.log(contieneS("avión"));  
console.log(contieneS("mesa"));  
console.log(contieneS("perro"));  
