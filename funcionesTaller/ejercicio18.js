/* Escriba una función que tenga una cadena de ADN como parámetro y retorne un 
string con el número de bases en ella, por ejemplo, si la cadena es “AACAGT” 
entonces debe retornar “Cantidad de A: 3, Cantidad de C: 1, Cantidad de G: 1, 
Cantidad de T: 1” */

function contarBasesADN(adn) {
    let conteo = { A: 0, C: 0, G: 0, T: 0 };

    for (let base of adn.toUpperCase()) {
        if (conteo.hasOwnProperty(base)) {
            conteo[base]++;
        }
    }

    return `Cantidad de A: ${conteo.A}, Cantidad de C: ${conteo.C}, Cantidad de G: ${conteo.G}, Cantidad de T: ${conteo.T}`;
}

console.log(contarBasesADN("AACAGT"));  