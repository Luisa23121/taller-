/* Crear una clase Cliente con un atributo privado saldo y un método privado 
calcularDescuento() que se utilice dentro de un método público 
aplicarDescuento() */

// class Cliente{
//     #saldo;

//     constructor(nombre, saldo){
//         this.#saldo = saldo
//         this.nombre = nombre
//     }

//     #calcularDescuento(){
//         if(this.#saldo > 1000){
//             return this.#saldo * 0.10
//         } else {
//             return 0;
//         }
//     }

//     aplicarDescuento(){
//         const descuento = this.#calcularDescuento();
//         const nuevoSaldo = this.#saldo - descuento;


//         console.log(`Descuento aplicado a ${this.nombre}: $${descuento}`);
//         console.log(`Nuevo saldo: $${nuevoSaldo}`);
//     }
// }


// const cliente1 = new Cliente("Juan", 1300);

// cliente1.aplicarDescuento();


/*Crea una clase Productocon:

Un atributo privado . precio.

Un método privado #calcularImpuesto() que calcula el 19% de IVA.

Un método público mostrarPrecioFinal() que:

Use el método privado para calcular el impuesto,

Sume el impuesto al precio,

Y muestre el precio final con un console.log. */


class Producto {
    #precio;
    constructor(nombre, precio){
        this.nombre = nombre
        this.#precio = precio
    }


    #calcularImpuesto(){
        return this.#precio * 0.19
        

        
    }

    mostrarPrecioFinal(){
        const impuesto = this.#calcularImpuesto();
        const precioFinal = this.#precio + impuesto

        console.log(`El precio final del producto ${this.nombre} con la suma del iva del 19% es $${precioFinal}`)


    }
}

const producto1 = new Producto("Cemento", 35000);

producto1.mostrarPrecioFinal();