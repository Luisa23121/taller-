/*   Crear una clase Vehiculo con un atributo privado modelo, un atributo público 
marca, y un método privado encenderMotor() que sea usado en el método 
público arrancar().   */

class Vehiculo {
    #modelo;
    
    constructor(modelo, marca){
        this.#modelo = modelo
        this.marca = marca 
    }

   

    #encenderMotor(){
        console.log(`El motor modelo ${this.#modelo} esta encendido`)
    
    }


    
    arrancar(){
        console.log(`El motor marca ${this.marca} arranco`)
        this.#encenderMotor();
    }

}

const vehiculo1 = new Vehiculo(54, "Willis");

vehiculo1.arrancar();