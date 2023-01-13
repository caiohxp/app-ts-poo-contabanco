import Conta from "./conta";
import Credito from "./credito";
import Debito from "./debito";
export default class ContaCorrente extends Conta {
    private limite: number;

    constructor(limite: number, nconta: string) {
        super(nconta);
        this.limite = limite;
    }

    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
    sacar(valor: number, data = new Date()): void {
        this.calcularSaldo() - valor < 0 && Math.abs(this.calcularSaldo() - valor) > this.limite ? console.log("Saque de", valor, "ultrapassa o limite.") : this.getOperacoes().push(new Debito(valor, data));
        this.getOperacoes().sort((a, b) => a.getData().getTime() - b.getData().getTime());
    }
    calcularSaldo(mes = 0, ano = 0): number {
        //Caso o mês e o ano não sejam dados como parâmetro será dada a data da ultima
        if (mes == 0)
            mes = this.getOperacoes()[this.getOperacoes().length - 1].getData().getMonth() + 1;
        if (ano == 0)
            ano = this.getOperacoes()[this.getOperacoes().length - 1].getData().getFullYear();
        let index = 0;
        this.getOperacoes().forEach((o, i) => {
            //pega o index da data mais atual até a data fornecida pelo parâmetro
            //adiciono mais 1 ao mês pra pegar o getTime do mês inteiro
            if (o.getData().getTime()< (mes === 12? new Date(`${ano+1}-01`).getTime() : new Date(`${ano}-${mes+1}`).getTime()))
                index = i;
        })
        let saldo = 0;
        for (let i = 0; i <= index; i++)
            saldo += this.getOperacoes()[i].getValor();

        return saldo+this.limite;
    }
}