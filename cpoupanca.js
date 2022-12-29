"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conta_1 = __importDefault(require("./conta"));
const debito_1 = __importDefault(require("./debito"));
class ContaPoupanca extends conta_1.default {
    constructor(rM, nconta) {
        super(nconta);
        this.rentabilidadeMensal = rM;
    }
    sacar(valor, data = new Date()) {
        this.calcularSaldo() - valor < 0 ? console.log("Saque de", valor, "ultrapassa o limite.") : this.debitos.push(new debito_1.default(valor, new Date()));
    }
    calcularRendimento() {
        return 1;
    }
    calcularSaldo() {
        return 1;
    }
}
exports.default = ContaPoupanca;
