class Display{
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual = displayValorActual;
        this.displayValorActual = displayValorAnterior;
        this.calculadora = new this.Calculadora();
        this.valorActual = '';
        this.valorAnterior = '';
    }

    agregarNumero(numero){
        this.valorActual = numero
    }
}