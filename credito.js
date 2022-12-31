"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Credito {
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
exports.default = Credito;
