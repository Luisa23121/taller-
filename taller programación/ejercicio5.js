//Cree un programa que tome el radio de un círculo e imprima su área y perímetro.//

alert("Bienvendios a la calculadores de area y perimetro de un circulo")

let radio = parseFloat(prompt("Ingrese el  radio del circulo"))
const pi = 3.14
let perimetro = (2 * pi * radio)
let area = (pi*(radio ** 2))

alert(`teniendo un radio de ${radio} el perimetro del circulo es ${perimetro} y el area del circulo es ${area}`)

