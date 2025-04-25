/*Crear una clase Persona con un atributo privado edad y una subclases 
Empleado que acceda al método público setEdad() de Persona para 
modificar edad */ 

// class Persona {
//     #edad; 
//     constructor(nombre, edad ){
//         this.nombre = nombre 
//         this.#edad = edad 

//     }

//     getEdad(){
//         return this.#edad
//     }

//     setEdad(nuevaEdad){
//         if (nuevaEdad <= 0 ) {
//             console.log(`no se puede cambiar valor invalido`)
//         } 

//         else{
//             this.#edad = nuevaEdad
//         }
//     }
// }

// class Empleado extends Persona{
//     constructor(nombre){
//         super();
//         this.nombre = nombre   
//     }


//     modificarEdad(nuevaEdad){
//         this.setEdad(nuevaEdad);
//     }
// }

// const persona1 = new Persona("julian", 35)

// const empleado1 = new Empleado("Juana")

// empleado1.modificarEdad();
class Persona {
    #edad; 
    constructor(nombre, edad){
        this.nombre = nombre;
        this.#edad = edad;
    }

    getEdad(){
        return this.#edad;
    }

    setEdad(nuevaEdad){
        if (nuevaEdad <= 0) {
            console.log(`no se puede cambiar valor invalido`);
        } else {
            this.#edad = nuevaEdad;
        }
    }
}

class Empleado extends Persona {
    constructor(nombre, edad){
        super(nombre, edad);
    }

    modificarEdad(nuevaEdad){
        this.setEdad(nuevaEdad);
    }
}

const persona1 = new Persona("Julian", 35);
const empleado1 = new Empleado("Juana", 28);

empleado1.modificarEdad(32); //
console.log(empleado1.getEdad()); //
