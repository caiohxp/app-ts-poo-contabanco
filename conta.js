"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const credito_1 = __importDefault(require("./credito"));
class Conta {
    constructor(num) {
        this.numero = num;
        this.creditos = [];
        this.debitos = [];
    }
    depositar(valor, data = new Date()) {
        this.creditos.push(new credito_1.default(valor, data));
    }
    getNumero() {
        return this.numero;
    }
}
exports.default = Conta;
