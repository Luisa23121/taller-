/*Crear una clase base Animal con un método hacerSonido() y dos subclases 
Perro y Gato que sobrescriban este método.  */

class Animal{
   


    hacerSonido(){
        console.log(`el animal  esta haciendo un sonido `)
    }
}


class Gato extends Animal {
    constructor(nombre){
        super();
        this.nombre = nombre 

    }

    hacerSonido(){
        console.log(`miau miau `)
    }
}

const gato1 = new Gato ("delfin")

// gato1.hacerSonido();

gato1.hacerSonido();
