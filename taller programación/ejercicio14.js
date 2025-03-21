//14. cree un programa que genere un numero aleatorio dentro de un rango especifico 

alert("Bienvenidos a este programa que generara un numero aleatorio en el rango escogido")

let rango = parseInt(prompt("Ingrese el rango "))
let aleatorio = Math.floor(Math.random(rango) * rango)

alert(`El numero aleatoria entre 0 a ${rango} es ${aleatorio}`)
/* Math.random esto es para mostrar un numero aleatorio
Math.floor esto es para redondear un numero*/
