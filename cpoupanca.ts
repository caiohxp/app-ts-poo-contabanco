import Conta from "./conta";
import Debito from "./debito";
export default class ContaPoupanca extends Conta {
    private rentabilidadeMensal: number;

    constructor(rM: number, nconta: string) {
        super(nconta);
        this.rentabilidadeMensal = rM;
    }
    sacar(valor: number, data = new Date()): void {
        this.calcularSaldo() - valor < 0 ? console.log("Saque de", valor, "ultrapassa o limite.") : this.operacoes.push(new Debito(valor, data));
        this.operacoes.sort((a, b) => a.getData().getTime() - b.getData().getTime());
    }
    calcularRendimento(mes = 0, ano = 0): number {
        //Testando Calcular Rendimento
        // if (mes == 0)
        //     mes = this.operacoes[this.operacoes.length - 1].getData().getMonth() + 1;
        // if (ano == 0)
        //     ano = this.operacoes[this.operacoes.length - 1].getData().getFullYear();
        // let meses = Math.ceil((this.operacoes[this.operacoes.length - 1].getData().getTime() - this.operacoes[0].getData().getTime()) / (1000 * 60 * 60 * 24 * 30));
        // let vetorRentabilidade = [];
        // let rentabilidadeAcumulada = 0;
        // for (let iano = this.operacoes[0].getData().getFullYear(); iano <= this.operacoes[this.operacoes.length - 1].getData().getFullYear(); iano++) {
        //     for (let imes = iano == this.operacoes[0].getData().getFullYear()? this.operacoes[0].getData().getMonth() + 1 : 1; imes <= (iano == this.operacoes[this.operacoes.length-1].getData().getFullYear()? this.operacoes[this.operacoes.length-1].getData().getMonth() + 1 : 12); imes++) {
        //         vetorRentabilidade.push(
        //             {
        //                 valor: this.calcularSaldo(imes, iano) * this.rentabilidadeMensal,
        //                 mes: imes,
        //                 ano: iano
        //             }
        //         )
        //     }
        // }
        // vetorRentabilidade.forEach(v => console.log(v));
        // return vetorRentabilidade.reduce((a,b) => {
        //     return a + b.valor;
        // }, 0);
        return 1+this.rentabilidadeMensal;
    }
    calcularSaldo(mes = 0, ano = 0): number {
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
        })
        this.operacoes.forEach(o => console.log(o));
        let saldo = 0;
        for (let i = 0; i <= index; i++){
            saldo += this.operacoes[i].getValor();
            saldo*=this.calcularRendimento();
        }

        return saldo;
    }
}