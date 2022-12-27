"use strict";
class Conta {
    constructor(num) {
        this.numero = num;
    }
    depositar(valor) {
        return new Credito(valor, new Date());
    }
    sacar(valor) {
    }
    getNumero() {
        return this.numero;
    }
}
