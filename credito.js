"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Credito {
    constructor(valor, data = new Date()) {
        this.valor = valor;
        this.data = data;
    }
    getValor() {
        return this.valor;
    }
}
exports.default = Credito;
