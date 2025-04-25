/* Crear una clase Contador con un atributo estático cuenta y un método 
estático incrementar() que aumente el valor de cuenta*/

/*class Contador {
    static cuenta = 6;

    static incrementar (){
        this.cuenta++;
    }
}

const instancia = new Contador ();

Contador.incrementar();

console.log(Contador.cuenta)
console.log(Contador.cuenta)
console.log(Contador.cuenta)
console.log(Contador.cuenta)
console.log(Contador.cuenta)*/

/*class Contador {
    static cuenta = 0;

    static incrementar() {
        this.cuenta++;
    }
}


  Contador.incrementar();
  console.log(Contador.cuenta); // Muestra: 1*/


  class Contador{
    static cuenta = 0;

    static incrementar(){
        Contador.cuenta++;
        console.log("Valor de cuenta ", Contador.cuenta);
    }
}

Contador.incrementar();
Contador.incrementar();
Contador.incrementar();


