/* Cree un programa que tome el valor de un producto e imprima su precio final si éste tiene
siempre un descuento del 10%.*/

alert("Bienvenido")
const descuento = 10/100
let valorProducto = parseFloat(prompt("Ingrese el valor del producto: "))
let valorFinal = valorProducto * descuento
let total = valorProducto - valorFinal
//valorFinal = valorFinal - descuento// valor producto x descuento: es 
alert(`El valor del producto con un 10% de descuento es: ${total}`)
