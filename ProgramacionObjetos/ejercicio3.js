/*Crear una clase CuentaBancaria que tenga un saldo privado y métodos 
públicos para depositar y retirar dinero. */


class CuentaBancaria{
    #saldo; 


    constructor (){
        this.#saldo = 0;
    }

    
    getsaldo(){
        return this.#saldo;
    }

    depositar (cantidad){
        this.#saldo = this.#saldo + cantidad 
    }

    retirar (cantidad){
        this.#saldo = this.#saldo - cantidad 
    }
  


    

}
    

const cuenta1 = new CuentaBancaria ()

console.log("tu saldo es ", cuenta1.getsaldo());

cuenta1.depositar(50);
console.log("tu saldo es ", cuenta1.getsaldo());

cuenta1.retirar(20);
console.log("tu saldo es ", cuenta1.getsaldo());

