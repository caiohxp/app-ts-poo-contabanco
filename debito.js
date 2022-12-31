"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Debito {
    constructor(valor, data) {
        this.valor = valor;
        this.data = data;
    }
    getData() {
        return this.data.getTime();
    }
    getValor() {
        return this.valor;
    }
}
exports.default = Debito;
