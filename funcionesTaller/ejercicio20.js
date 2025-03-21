/* Escriba un programa que calcule el área y el perímetro de un rectángulo. Usa dos 
funciones: 
● calcularArea(largo, ancho): calcula el área del rectángulo. 
● calcularPerimetro(largo, ancho): calcula el perímetro. */


function calcularArea(largo, ancho) {
    return largo * ancho;
}


function calcularPerimetro(largo, ancho) {
    return 2 * (largo + ancho);
}


console.log(`Área del rectángulo: ${calcularArea(5, 3)}`);        
console.log(`Perímetro del rectángulo: ${calcularPerimetro(5, 3)}`); 
