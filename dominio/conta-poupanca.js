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
        this.calcularSaldo() - valor < 0 ? console.log("Saque de", valor, "ultrapassa o limite.") : this.getOperacoes().push(new debito_1.default(valor, data));
        this.getOperacoes().sort((a, b) => a.getData().getTime() - b.getData().getTime());
    }
    calcularRendimento(mes = 0, ano = 0) {
        let vetorRentabilidade = [];
        for (let iano = this.getOperacoes()[0].getData().getFullYear(); iano <= ano; iano++) {
            //Se iano for igual ao ano inicial, o imes vai vai receber o mês do parâmetro, senão pega o mês 1. Isso é pra quando trocar o ano não iniciar no mês do parâmetro
            for (let imes = iano == this.getOperacoes()[0].getData().getFullYear() ? this.getOperacoes()[0].getData().getMonth() + 1 : 1; imes <= (iano == ano ? mes : 12); imes++) {
                let valor = 0;
                this.getOperacoes().forEach(o => {
                    if (o.getData().getMonth() + 1 === imes && o.getData().getFullYear() === iano) {
                        valor += o.getValor();
                    }
                });
                vetorRentabilidade.push(valor);
            }
        }
        return vetorRentabilidade.reduce((a, b) => {
            return (a + b) * (1 + this.rentabilidadeMensal);
        }, 0) - vetorRentabilidade.reduce((a, b) => {
            return a + b;
        }, 0);
    }
    calcularSaldo(mes = 0, ano = 0) {
        //Caso o mês e o ano não sejam dados como parâmetro será dada a data da ultima
        if (mes == 0)
            mes = this.getOperacoes()[this.getOperacoes().length - 1].getData().getMonth() + 1;
        if (ano == 0)
            ano = this.getOperacoes()[this.getOperacoes().length - 1].getData().getFullYear();
        let index = 0;
        this.getOperacoes().forEach((o, i) => {
            //pega o index da data mais atual até a data fornecida pelo parâmetro
            //adiciono mais 1 ao mês pra pegar o getTime do mês inteiro
            if (o.getData().getTime() < (mes === 12 ? new Date(`${ano + 1}-01`).getTime() : new Date(`${ano}-${mes + 1}`).getTime()))
                index = i;
        });
        let saldo = 0;
        for (let i = 0; i <= index; i++) {
            saldo += this.getOperacoes()[i].getValor();
        }
        return saldo + this.calcularRendimento(mes, ano);
    }
}
exports.default = ContaPoupanca;
