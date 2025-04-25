/*Crear una clase Empleado y una subclase Gerente que sobrescriba un 
método trabajar()  */


class Empleado{
    constructor(nombre){
        this.nombre = nombre 
    }

    trabajar(){
        console.log(`El trabajador ${this.nombre} se encuentra realizando sus labores`)
    }

}



class Gerente extends Empleado{
    constructor(nombre){
        super();
        this.nombre = nombre
    }

    trabajar(){
        console.log(`El gerente ${this.nombre} esta realizando sus labores`)
    }
}

const empleado1 = new Empleado("Juan")

empleado1.trabajar();

const gerente1 = new Gerente("Luis")

gerente1.trabajar();