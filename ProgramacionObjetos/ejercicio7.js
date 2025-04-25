/*Crear una clase Coche con un método privado encenderMotor() y un método 
público conducir() que llame al método privado.  */

/*class Coche {
    #encenderMotor(){
        console.log("Motor encendido ");
        }
    getMotor(){
        console.log(this.#encenderMotor) // posible error lo estaba metiendo dentro de un console, solo con el this es suficiente para llamar la función//
    }

    conducir(){
        console.log(`el estado de su motor es ${this.getMotor}`)
    }
}

const coche1 = new Coche()

console.log(coche1.conducir);*/


/*class Coche {
    // Método privado (solo accesible dentro de esta clase)
    #encenderMotor() {
      console.log("Motor encendido ");
    }
  
    // Método público
    conducir() {
      this.#encenderMotor(); // Llama al método privado
      console.log("Conduciendo el coche ");
    }
  }
  
  // Crear una instancia de Coche
  const miCoche = new Coche();
  
  // Llamamos al método público
  miCoche.conducir();

  // Esto generaría un error si lo intentas:
  // miCoche.#encenderMotor(); 


/*class Coche {
    // Método privado
    #encenderMotor() {
        console.log("Motor encendido ");
    }

    // Getter público que accede al método privado
    get arrancar() {
      this.#encenderMotor(); // Llamada interna al método privado
return "Motor arrancado desde getter ";
    }

    conducir() {
console.log("Conduciendo el coche ");
    }
}

  // Prueba
const miCoche = new Coche();

  // Usamos el getter (se ejecuta como propiedad, sin paréntesis)
console.log(miCoche.arrancar);

  // Luego podemos conducir
miCoche.conducir();*/


/*class Coche {
    

    #encenderMotor(){
        console.log(`el motor esta encendido`)
    
    }

conducir(){
    this.#encenderMotor();
}
}


const coche1 = new Coche();

coche1.conducir();*/


// practica  

/* Crea una clase Computadoracon:

Un método privado. #encenderSistema()que imprima "Sistema iniciado".

Un método público iniciar() que llame al método privado.*/


/*class Computadora {

    #encenderSistema(){
        console.log("sistema iniciado")
    }

    iniciar(){
        this.#encenderSistema();
    }
}

const computador1 = new Computadora

computador1.iniciar()*/

/* Crea una clase Televisorcon:

Un método privado #mostrarImagen() que imprime "Mostrando imagen"en la consola.

Un método público encender() que llame al método privado.*/


class Televisor {
    #mostrarImagen(){
        console.log( `Mostrando imagen`)
    }

    encender(){
        this.#mostrarImagen(); 
        // no olvidadar poner los dos parentesis para poder llamar a la funcion 
    }
}

const televisor1 = new Televisor

televisor1.encender();