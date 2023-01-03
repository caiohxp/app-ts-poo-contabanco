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
        this.calcularSaldo() - valor < 0 ? console.log("Saque de", valor, "ultrapassa o limite.") : this.operacoes.push(new debito_1.default(valor, data));
        this.operacoes.sort((a, b) => a.getData().getTime() - b.getData().getTime());
    }
    calcularRendimento(mes = 0, ano = 0) {
        //Testando Calcular Rendimento
        if (mes == 0)
            mes = this.operacoes[this.operacoes.length - 1].getData().getMonth() + 1;
        if (ano == 0)
            ano = this.operacoes[this.operacoes.length - 1].getData().getFullYear();
        let vetorRentabilidade = [];
        let rentabilidadeAcumulada = 0;
        for (let iano = this.operacoes[0].getData().getFullYear(); iano <= ano; iano++) {
            for (let imes = iano == this.operacoes[0].getData().getFullYear() ? this.operacoes[0].getData().getMonth() + 1 : 1; imes <= (iano == ano ? mes : 12); imes++) {
                let aux = 0;
                this.operacoes.forEach(o => {
                    if (o.getData().getMonth() + 1 === imes && o.getData().getFullYear() === iano) {
                        aux += o.getValor();
                    }
                });
                vetorRentabilidade.push({
                    valor: aux,
                    mes: imes,
                    ano: iano
                });
            }
        }
        vetorRentabilidade.forEach(v => console.log(v));
        return vetorRentabilidade.reduce((a, b) => {
            return (a + b.valor) * (1 + this.rentabilidadeMensal);
        }, 0);
    }
    calcularSaldo(mes = 0, ano = 0) {
        //Caso o mês e o ano não sejam dados como parâmetro será dada a data da ultima
        if (mes == 0)
            mes = this.operacoes[this.operacoes.length - 1].getData().getMonth() + 1;
        if (ano == 0)
            ano = this.operacoes[this.operacoes.length - 1].getData().getFullYear();
        let index = 0;
        this.operacoes.forEach((o, i) => {
            //pega o index da data mais atual até a data fornecida pelo parâmetro
            //adiciono mais 1 ao mês pra pegar o getTime do mês inteiro
            if (o.getData().getTime() < (mes === 12 ? new Date(`${ano + 1}-01`).getTime() : new Date(`${ano}-${mes + 1}`).getTime()))
                index = i;
        });
        this.operacoes.forEach(o => console.log(o));
        let saldo = 0;
        for (let i = 0; i <= index; i++) {
            saldo += this.operacoes[i].getValor();
        }
        return this.calcularRendimento(mes, ano);
    }
}
exports.default = ContaPoupanca;
