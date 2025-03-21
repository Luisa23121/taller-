/* crear un programa que lea la edad de un usuario y muestre cuantos años tendra el usuario en los años queCree un programa que lea la edad de un usuario y muestre cuántos años tendrá el usuario
dentro de tantos años como éste indique. Por ejemplo, si el usuario tiene 20 años y quiere saber
cuántos años tendrá dentro de 15 años, el programa deberá mostrar que tendrá 35 años.*/
alert ("Bienvenidos a la calculadora de edad")
let userName = prompt("Ingrese su nombre: ")
let userAge = parseInt(prompt("¿Cual es tu edad actual? : "))
let ageFurute = parseInt(prompt("Ingresa los años que quieres calcular: "))
let ageFinal = userAge + ageFurute
alert(`Señ@r ${userName} su edad actual es ${userAge} años y su edad futura es de ${ageFinal} años`)