/*Crear una clase Producto con un atributo privado precio y métodos públicos 
setPrecio() y getPrecio() para acceder y modificar el precio.  */


class Producto {
    #precio;

    constructor(nombre, precio){
        this.nombre = nombre
        this.#precio = precio 
    }

    setPrecio(){

    }
}


class Producto {
    // Atributo privado
    #precio;
    constructor(precio = 0) {
        this.#precio = precio;
    }

    // Método público para establecer el precio
    setPrecio(nuevoPrecio) {
        if (nuevoPrecio >= 0) {
        this.#precio = nuevoPrecio;
        } else {
        console.log("El precio no puede ser negativo.");
    }
    }

    getPrecio() {
        return this.#precio;
    }
}
