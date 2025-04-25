/*Crear una clase Empleado con atributos nombre y salario. Que implemente 
un método trabajar(). Implemente encapsulación.  */

/*class Empleado {
    #salario;


    constructor(nombre, salario){
        this.nombre = nombre 
        this.#salario = salario
    }


    getSalario(){
        return this.#salario;
    }


    trabajar(){
        console.log(` ${this.nombre} esta trabajando `)
    }

    actualizarSalario(nuevoSalario){
        
        if (nuevoSalario > 0)
            this.#salario = nuevoSalario 
        // console.log(`Èl nuevo salario de juan es ${nuevoSalario}`)
    }
    
}

const empleado1 = new Empleado("Juan", 3000000)

empleado1.trabajar();

console.log(empleado1.getSalario());

empleado1.actualizarSalario(2000000);
console.log(empleado1.getSalario());*/

/*Crea una clase Estudiantecon:

Un atributo público:nombre

Un atributo privado:#calificacion

Un método público estudiar()que imprime:"Pedro está estudiando"

Un método público verCalificacion()que devuelva la calificación

Un método público actualizarCalificacion(nuevaNota)que permite modificar la calificación solo si es entre 0 y 10*/

// class Estudiante{
//     #calificación;
//     constructor(nombre, calificación){
//         this.nombre = nombre 
//         this.#calificación = calificación
//     }

//     getCalificación(){
//         return this.#calificación
//     }

//     estudiar(){
//         console.log(`${this.nombre} esta estudiando`)
//     }

//     actualizarCalificación(nuevaNota){
//             if (nuevaNota >= 0 && nuevaNota <= 10){
//                 this.#calificación = nuevaNota
//             }
//     }

// }


// const estudiante1 = new Estudiante("Luisa", 6);

// estudiante1.estudiar();
// console.log(estudiante1.getCalificación());

// estudiante1.actualizarCalificación(3);
// console.log(estudiante1.getCalificación());


// Ejercicio 2: ClaseProducto
// Crea una clase Productocon:

// Un atributo público:nombre

// Un atributo privado:#precio

// Un método público mostrarInfo()que imprime:"El producto Televisor cuesta 800"

// Un metodo publico verPrecio()para obtener el precio

// Un método público actualizarPrecio(nuevoPrecio)que solo permite actualizar si el precio es mayor que 0

class Producto {
    #precio;

    constructor(nombre, precio){
        this.nombre = nombre 
        this.#precio = precio
    }

    getPrecio(){
        return this.#precio
    }

    mostrarInfo(){
        console.log(`El producto ${this.nombre} cuesta ${this.#precio} `)
    }

    actualizarPrecio(nuevoPrecio){
        if(nuevoPrecio > 0){
            this.#precio = nuevoPrecio;
        }
    }
}

const producto1 = new Producto("Televisor", 700)

producto1.mostrarInfo();

producto1.actualizarPrecio(600);

console.log(producto1.getPrecio());