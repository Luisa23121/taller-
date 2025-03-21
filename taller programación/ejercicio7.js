//toFixed (el numero de decimales que quiere )para que se le agregue decimales//

/*Cree un programa que tome el precio de un producto e imprima su precio final al consumidor
con un IVA de 19%.*/
alert("Bienvenido")

const iva = 19/100
let valorProducto = parseFloat(prompt("Ingresa el valor del producto: "))
let valorIva = (valorProducto * iva) + valorProducto

alert(`El valor del producto con el iva es: ${valorIva}`)



