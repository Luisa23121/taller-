/*Crear una clase Escuela con un atributo estático numEstudiantes que se 
incremente cada vez que se cree un nuevo objeto Estudiante  */

class Escuela {
    static numEstudiantes = 0; 

    constructor(){
        Escuela.numEstudiantes++;
    }

}

const estudiante1 = new Escuela();
const estudiante2 = new Escuela();
const estudiante3 = new Escuela();
const estudiante4 = new Escuela();
const estudiante5 = new Escuela();
const estudiante6 = new Escuela();
const estudiante7 = new Escuela();
const estudiante8 = new Escuela();

console.log(Escuela.numEstudiantes);