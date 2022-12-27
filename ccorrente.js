"use strict";
class CCorrente extends Conta {
    constructor(limite, nconta) {
        super(nconta);
        this.limite = limite;
    }
    transferir(contaDestino, valor) {
    }
    calcularSaldo() {
        return 1;
    }
}
