"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conta_1 = __importDefault(require("./conta"));
const debito_1 = __importDefault(require("./debito"));
class ContaCorrente extends conta_1.default {
    constructor(limite, nconta) {
        super(nconta);
        this.limite = limite;
    }
    transferir(contaDestino, valor) {
    }
    sacar(valor, data = new Date()) {
        this.calcularSaldo() - valor < 0 && Math.abs(this.calcularSaldo() - valor) > this.limite ? console.log("Saque de", valor, "ultrapassa o limite.") : this.debitos.push(new debito_1.default(valor, new Date()));
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
