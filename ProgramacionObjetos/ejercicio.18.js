/*Crear una clase CuentaBancaria con un atributo privado saldo y un método 
privado actualizarSaldo(). Crear métodos públicos para depositar() y retirar() 
que usen actualizarSaldo().  */

class CuentaBancaria {
    #saldo;

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    #actualizarSaldo(nuevoSaldo) {
        this.#saldo = nuevoSaldo;
    }

    depositar(cantidad) {
        if (cantidad > 0) {
            const nuevoSaldo = this.#saldo + cantidad;
            this.#actualizarSaldo(nuevoSaldo);
            console.log(`Depósito exitoso. Nuevo saldo: $${this.#saldo}`);
        } else {
            console.log("Cantidad inválida para depositar.");
        }
    }

    retirar(cantidad) {
        if (cantidad > 0 && cantidad <= this.#saldo) {
            const nuevoSaldo = this.#saldo - cantidad;
            this.#actualizarSaldo(nuevoSaldo);
            console.log(`Retiro exitoso. Nuevo saldo: $${this.#saldo}`);
        } else {
            console.log("Fondos insuficientes o cantidad inválida.");
        }
    }

    verSaldo() {
        return this.#saldo;
    }
}


const cuenta1 = new CuentaBancaria(1000);

cuenta1.depositar(500);    
cuenta1.retirar(200);     
console.log(cuenta1.verSaldo()); 
