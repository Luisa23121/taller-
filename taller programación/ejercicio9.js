/*Cree un programa que lea una cantidad e imprima un porcentaje a calcular requerido sobre
esa cantidad. */
alert("Bienvenidos ")
let cantidad = parseFloat(prompt("Ingresa un numero: "))
let porcentaje = parseFloat(prompt("Ingresa un porcetante: "))
let valorPorcentaje = porcentaje / 100
let valor = cantidad * valorPorcentaje
let valorFinal = cantidad - valor

alert(`El porcentaje de la cantidad ${cantidad} es ${valorFinal}`)

