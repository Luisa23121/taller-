/*Crear una clase base InstrumentoMusical con un método tocar() que debe 
ser implementado por las clases hijas.  */

class InstrumentoMusical {
    constructor(instrumento, nombre){
        this.instrumento = instrumento
        this.nombre = nombre

    }

    tocar(){
        console.log(`El instrumento ${this.instrumento} esta siendo tocado por ${this.nombre} `)
    }
}

class Violin extends InstrumentoMusical{
    constructor(instrumento, nombre){
        super();
        this.nombre = nombre
        this.instrumento = instrumento
    }

    tocar(){
        super.tocar();
    }
}

const instrumento1 = new InstrumentoMusical("Guitarra", "Luisa")

instrumento1.tocar();

const instrumentoMu2 = new Violin("Violin", "Julieta")

instrumentoMu2.tocar();
