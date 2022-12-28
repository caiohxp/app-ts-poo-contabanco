"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conta_1 = __importDefault(require("./conta"));
class ContaCorrente extends conta_1.default {
    constructor(limite, nconta) {
        super(nconta);
        this.limite = limite;
    }
    transferir(contaDestino, valor) {
    }
    calcularSaldo() {
        return this.creditos.reduce((a, b) => {
            return a + b.getValor();
        }, 0) - this.debitos.reduce((a, b) => {
            return a + b.getValor();
        }, 0);
    }
}
exports.default = ContaCorrente;
