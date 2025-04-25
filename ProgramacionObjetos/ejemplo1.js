class Circulo {
    constructor(radio) {
    this.radio = radio; /*
Propiedad pública*/
    this.pi = 3.1416; /* Valor
aproximado de π*/
    }
    // Método para calcular el área
    calcularArea() {
    return this.pi * (this.radio *
this.radio);
    }
    // Método para calcular el perímetro
    calcularPerimetro() { 
    return 2 * this.pi *
this.radio;
    }
}
