/*Crear una clase Universidad con un atributo estático numEstudiantes y un 
método estático registrarEstudiante()  */

class Universidad {
    static numEstudiantes = 0;

    static registrarEstudiantes(){
        this.numEstudiantes++
        console.log(`Nuevo estudiante registrado, cantidad total de estudiantes es: ${this.numEstudiantes}`)
        
    }


}


Universidad.registrarEstudiantes();
Universidad.registrarEstudiantes();
Universidad.registrarEstudiantes();


/*class Universidad {
    static numEstudiantes = 0;
  
    static registrarEstudiante() {
      this.numEstudiantes++;
      console.log(`Estudiante registrado. Total: ${this.numEstudiantes}`);
    }
  }
  
  // Uso del método estático sin crear instancias
  Universidad.registrarEstudiante(); // Estudiante registrado. Total: 1
  Universidad.registrarEstudiante(); // Estudiante registrado. Total: 2
  console.log(Universidad.numEstudiantes); */// 2
  
  // Intento de acceso desde una instancia
  
 
  
