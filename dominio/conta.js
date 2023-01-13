"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const credito_1 = __importDefault(require("./credito"));
class Conta {
    constructor(num) {
        this.numero = num;
        this.operacoes = [];
    }
    getOperacoes() {
        return this.operacoes;
    }
    depositar(valor, data = new Date()) {
        this.operacoes.push(new credito_1.default(valor, data));
        this.operacoes.sort((a, b) => a.getData().getTime() - b.getData().getTime());
    }
    getNumero() {
        return this.numero;
    }
}
exports.default = Conta;
