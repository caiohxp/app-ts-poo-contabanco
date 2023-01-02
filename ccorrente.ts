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
        this.calcularSaldo() - valor < 0 && Math.abs(this.calcularSaldo() - valor) > this.limite ? console.log("Saque de", valor, "ultrapassa o limite.") : this.debitos.push(new Debito(valor, data));
        this.debitos.sort((a, b) => a.getData().getTime() - b.getData().getTime());
    }
    calcularSaldo(mes = 0, ano?: number): number {
        //continuar amanhã
        let saldo = 0;
        let operacoes: any[] = (this.creditos as any).concat((this.debitos as any));
        operacoes = operacoes.sort((a, b) => a.getData().getTime() - b.getData().getTime());
        if (mes == 0)
            mes = operacoes[operacoes.length - 1].getData().getMonth() + 1;
        if (ano == 0)
            ano = operacoes[operacoes.length - 1].getData().getFullYear();
        for (let i = this.creditos[0].getData().getMonth()+1; i <= mes; i++) {
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