/*Crear una clase base Vehiculo con un método mover(), y subclases Coche y 
Bicicleta que implementen este método de forma diferente.  */

class Vehiculo {

    mover(){
        console.log(`el vehiculo se esta moviendo`)
    }
}


class Coche extends Vehiculo{
    constructor(velocidad){
        super()
        this.velocidad = velocidad 
    }

    mover(){
        console.log(`el coche se mueve a un velocidad de ${this.velocidad} km por hora`)
    }
}


// class Bicicleta extends{
//     constructor 
// }


const coche1 = new Coche(100)

coche1.mover();