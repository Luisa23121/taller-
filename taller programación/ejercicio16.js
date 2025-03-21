/* Cree un programa que dados a, b y c, use la fórmula general para resolver la ecuación
cuadrática correspondiente.*/

let a = parseInt(prompt("Ingresa el valor de a: "));
let b = parseInt(prompt("Ingresa el valor de b: "));
let c = parseInt(prompt("Ingresa el valor de c: "));
let discrimitante = b * b - (4 * a * c)

if (discrimitante > 0) {
    let resultado1 = (-b + Math.sqrt(discrimitante)) / (2 * a)
    let resultado2 = (-b - Math.sqrt(discrimitante)) / (2 * a)
    alert(`Las funciones de la ecuación son: resultado1 ${resultado1} resulttado2 ${resultado2}`)
    
} else if(discrimitante === 0 ) {
    let igualcero = -b / (2 * a);
    alert(`La ecuación tiene una unica solucion: x = ${igualcero}`)
}

else{
    alert(`La ecuación no tiene soluciones reales `)
}
/* Math.sqrt esto se utiliza para representar en el codigo una raiz en el codigo*/