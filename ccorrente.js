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
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
    sacar(valor, data = new Date()) {
        this.calcularSaldo() - valor < 0 && Math.abs(this.calcularSaldo() - valor) > this.limite ? console.log("Saque de", valor, "ultrapassa o limite.") : this.debitos.push(new debito_1.default(valor, data));
        this.debitos.sort((a, b) => a.getData().getTime() - b.getData().getTime());
    }
    calcularSaldo(mes = 0, ano) {
        //continuar amanhã
        let saldo = 0;
        let operacoes = this.creditos.concat(this.debitos);
        operacoes = operacoes.sort((a, b) => a.getData().getTime() - b.getData().getTime());
        if (mes == 0)
            mes = operacoes[operacoes.length - 1].getData().getMonth() + 1;
        if (ano == 0)
            ano = operacoes[operacoes.length - 1].getData().getFullYear();
        for (let i = this.creditos[0].getData().getMonth() + 1; i <= mes; i++) {
            for (const operacao of operacoes) {
                const mesOperacao = operacao.data.getMonth() + 1;
                const anoOperacao = operacao.data.getFullYear();
                if (mesOperacao === mes && anoOperacao === ano) {
                    saldo += operacao.valor;
                }
            }
        }
        //codigoTesteAcima
        return this.creditos.reduce((a, b) => {
            return a + b.getValor();
        }, 0) - this.debitos.reduce((a, b) => {
            return a + b.getValor();
        }, 0);
    }
}
exports.default = ContaCorrente;
