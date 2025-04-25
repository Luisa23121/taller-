/*Crear una clase base Vehiculo que tenga un constructor con parámetros de 
peso y velocidad máxima, e implemente un método mover() que imprima un 
mensaje genérico. Luego, crear dos subclases Carro y Bicicleta */

class Vehiculo{
    constructor(peso, velocidad){
        this.peso = peso
        this.velocidad = velocidad 
    }

    mover(){
        console.log(`el vehiculo esta andando a una velocidad de ${this.velocidad}`)
    }
}

class Carro extends Vehiculo {
    constructor(peso, velocidad){
        super();
        this.peso = peso
        this.velocidad = velocidad 

    }

    mover(){
        console.log(`el vehiculo esta andando a una velocidad de ${this.velocidad}`)
    }
}

class Bicicleta extends Vehiculo{
    constructor(peso, velocidad){
        super();
        this.peso = peso
        this.velocidad = velocidad 
    }

    mover(){
        console.log(`el vehiculo esta andando a una velocidad de ${this.velocidad}`)
    }
}

const vehiculo1 = new Vehiculo(200, 100);
vehiculo1.mover();

const carro1 = new Carro(300, 200);
carro1.mover();