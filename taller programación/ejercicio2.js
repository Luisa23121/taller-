/*Cree un programa que lea dos números y muestre su producto, su módulo, su cociente, su
suma y su resta.*/
alert ("Bienvenid@ a la calculadora")
let num1 = parseInt(prompt("Ingresar el primer numero: "))
let num2 = parseInt(prompt("Ingrsa el segundo numero: "))

let producto = num1 * num2
let modulo = num1 % num2
let cociente = num1 / num2
let suma = num1 + num2 
let resta = num1 - num2 

alert (`El producto de esos dos numeros es: ${producto}, el modulo de esos dos numeros es: ${modulo}, el cociente de esos dos numeros es: ${cociente}, la suma de esos dos numeros es: ${suma}, y la resta de esos dos numeros es: ${resta}`)