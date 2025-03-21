/*Cree un programa que pregunte al usuario si desea salir, si o no “S/N”, si el usuario teclea la letra 
S el programa se detendrá, de lo contrario continuará ejecutándose. */


let respuesta = ""; 
while (respuesta !== "S" && respuesta !== "s") { 
    respuesta = prompt("¿Deseas salir? (S/N)"); 
}

console.log("Has salido del programa.");
