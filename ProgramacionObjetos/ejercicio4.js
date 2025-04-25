/*Crear una clase base Animal con un método hacerSonido(), y dos subclases 
Perro y Gato que sobrescriban el método.  */

class Animal {

saludar(){
    console.log ("animal haciendo un sonido")
}
    
}



class perro extends Animal {
    constructor(){
        super();
        this.nombre = nombre 
        this.edad = edad 
    }
    
    
    saludar(){
        console.log("guau guau")
    }
}


class gato extends Animal{

    constructor(nombre, edad ){
        super();
        this.nombre = nombre 
        this.edad = edad 
    }


    saludar(){
        console.log("miau miau")
    }
}


const gato1 = new gato("tommy", 6)
gato1.saludar();