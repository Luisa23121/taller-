//Cree un programa que tome un número real e imprima su valor absoluto//




let numeroReal = parseFloat(prompt("Ingrese un numero real "))
if (numeroReal >= 0) {
    alert(`El valor absoluto de ${numeroReal} es ${numeroReal}`)
} 
else  {
    alert(` El valor absoluto de ${numeroReal } es número ${numeroReal * (-1)}`)
}