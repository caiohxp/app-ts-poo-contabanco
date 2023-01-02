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
        this.debitos.sort((a, b) => a.getData().getTime() - b.getData().getTime());
    }
    calcularRendimento() {
        //Testando Calcular Rendimento
        let saldoMensalaux = this.creditos.concat(this.debitos);
        saldoMensalaux = saldoMensalaux.sort((a, b) => a.getData().getTime() - b.getData().getTime());
        let meses = (saldoMensalaux[saldoMensalaux.length - 1].getData().getTime() - saldoMensalaux[0].getData().getTime()) / (1000 * 60 * 60 * 24 * 30);
        console.log(Math.floor(meses));
        let saldoMensal = [];
        for (let i = 0; i < 31; i++) {
            saldoMensal.push();
        }
        return 1;
    }
    calcularSaldo(mes, ano) {
        let operacao = this.creditos.concat(this.debitos);
        operacao = operacao.sort((a, b) => a.getData().getTime() - b.getData().getTime());
        if (mes == undefined)
            mes = operacao[operacao.length - 1].getData().getMonth() + 1;
        if (ano == undefined)
            ano = operacao[operacao.length - 1].getData().getFullYear();
        operacao.forEach(o => console.log(o));
        console.log(mes, ano);
        return this.creditos.reduce((a, b) => {
            return a + b.getValor();
        }, 0) - this.debitos.reduce((a, b) => {
            return a + b.getValor();
        }, 0);
    }
}
exports.default = ContaPoupanca;
