/* crea un programa que simule el lanzamiento de dos dados y muestre la suma de los resultados*/
// math.floor para redondear el numero es decir si es 0.4 seria 0 o si es 1.8 seria 1//
//math.random para 
alert("Bienvenido")
let dado1 = Math.floor(Math.random() * 6) + 1 
let dado2 = Math.floor(Math.random() * 6) + 1 
let resultado = dado1 + dado2

alert(`El resultado del primer dado es ${dado1}`)
alert(`El segundo resultado es ${dado2}`)
alert(`Y la suma de los dos es ${resultado}`)

