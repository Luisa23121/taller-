/*Crear una clase Persona con un atributo nombre y un método caminar() que 
imprima un mensaje con el nombre.  */

class Persona { constructor (){
    this.nombre = "Luisa"
}

caminar (){
    console.log(`Mi nombre es ${this.nombre}`)
}
}

const persona = new Persona ();

persona.caminar();