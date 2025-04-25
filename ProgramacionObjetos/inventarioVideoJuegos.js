


class Inventario {
    constructor(){
        this.videojuegos = []
    }

    ingresarVideojuego(nombre, precio, categoria){
        const videojuego = {
            nombre: nombre,
            precio: precio,
            categoria: categoria
        }
        this.videojuegos.push(videojuego)
    }

    eliminarVideojuego(nombre){
        this.videojuegos = this.videojuegos.filter(videojuego => videojuego.nombre !== nombre)
    }

    actualizarVideojuego(nombre, nuevoPrecio, nuevaCategoria) {
        const videojuego = this.videojuegos.find(v => v.nombre === nombre)

        if (videojuego) {
            videojuego.precio = nuevoPrecio
            videojuego.categoria = nuevaCategoria
        } else {
            console.log(`No se encontró el videojuego con el nombre: ${nombre}`)
        }
    }

    mostrarVideojuegos(){
        console.log("Los videojuegos que actualmente estandisponibles son:")
        console.log(this.videojuegos)
    }
}

class Administrador {
    constructor(nombre, contraseña, email) {
        this.nombre = nombre
        this.contraseña = contraseña
        this.email = email
    }

    agregarVideojuego(inventario, nombre, precio, categoria) {
        inventario.ingresarVideojuego(nombre, precio, categoria)
        console.log(`el administrador ${this.nombre} agregó el videojuego "${nombre}".`)
    }

    eliminarVideojuego(inventario, nombre) {
        inventario.eliminarVideojuego(nombre)
        console.log(`el administrador ${this.nombre} eliminó el videojuego "${nombre}".`)
    }
}

const inventario1 = new Inventario()
const administrador1 = new Administrador("julian", "124", "julian33@ejemplo.com")

administrador1.agregarVideojuego(inventario1, "call of duty", 60, "aventura")
administrador1.agregarVideojuego(inventario1, "dark souls III", 70, "aventura")
administrador1.agregarVideojuego(inventario1, "minecraft", 50, "aventura")
administrador1.agregarVideojuego(inventario1, "among us", 70, "estrategia")
administrador1.agregarVideojuego(inventario1, "fifa 23", 40, "deportes")

inventario1.mostrarVideojuegos()

administrador1.eliminarVideojuego(inventario1, "call of duty")
administrador1.eliminarVideojuego(inventario1, "fifa 23")
inventario1.mostrarVideojuegos()