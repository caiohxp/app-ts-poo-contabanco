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
        this.calcularSaldo() - valor < 0 ? console.log("Saque de", valor, "ultrapassa o limite.") : this.debitos.push(new debito_1.default(valor, data));
    }
    calcularRendimento() {
        //Criar um saldo mensal
        let saldoMensal = this.creditos.concat(this.debitos);
        saldoMensal = saldoMensal.sort((a, b) => a.getData() - b.getData());
        let meses = (saldoMensal[saldoMensal.length - 1].getData() - saldoMensal[0].getData()) / (1000 * 60 * 60 * 24 * 30);
        console.log(meses);
        return 1;
    }
    calcularSaldo() {
        return this.creditos.reduce((a, b) => {
            return a + b.getValor();
        }, 0) - this.debitos.reduce((a, b) => {
            return a + b.getValor();
        }, 0);
    }
}
exports.default = ContaPoupanca;
