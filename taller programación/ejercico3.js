/*En un almacén de electrodomésticos se venden éstos a crédito y de contado. Si el cliente
compra a crédito, el valor del electrodoméstico aumenta en un 5% por cada mes que dure el
crédito. Cree un programa para un almacén donde el administrador ingrese el precio de un
electrodoméstico y el plazo en meses para pagarlo a crédito y muestre el valor fijo de las cuotas
mensuales que deberá pagar por el electrodoméstico.*/

alert("Bienvenidos a nuestro almacen ")
const interes = (5/100)
let nombreElectrodoméstico = prompt("Ingrese el nombre del electrodomestico: ")
let valorElectrodomestico = parseFloat(prompt("Ingrese el valor del electrodomestico: ")) 
let cuotas = parseFloat(prompt("¿A cuantas coutas quiere sacar el credito?: "))
let precioTotal = (valorElectrodomestico * interes) + (valorElectrodomestico)
precioTotal = (precioTotal/cuotas)

alert(`El valor del electrodomestico ${nombreElectrodoméstico} es de: ${valorElectrodomestico} su credito diferido a ${cuotas} es de: ${precioTotal}`)

//no sea tonta cuando lo ejecute no le ponga ni punto ni coma//

 