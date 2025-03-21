/*Escriba un programa que convierta entre grados Celsius y Fahrenheit utilizando dos 
funciones: 
● celsiusToFahrenheit(celsius): convierte grados Celsius a Fahrenheit. 
● fahrenheitToCelsius(fahrenheit): convierte grados Fahrenheit a Celsius. */
// Función para convertir Celsius a Fahrenheit
function celsiusToFahrenheit() {
    return (celsius * 9/5) + 32;
}
let fahrenheit = parseInt(prompt("ingrese el  valor "))
// Función para convertir Fahrenheit a Celsius
function fahrenheitToCelsius() {
    return (fahrenheit - 32) * 5/9;
}


alert(`25°C a Fahrenheit: ${celsiusToFahrenheit(25)}°F`);  
