import Conta from "./conta";
import Debito from "./debito";
export default class ContaPoupanca extends Conta {
    private rentabilidadeMensal: number;

    constructor(rM: number, nconta: string) {
        super(nconta);
        this.rentabilidadeMensal = rM;
    }
    sacar(valor: number, data = new Date()): void {
        this.calcularSaldo() - valor < 0 ? console.log("Saque de", valor, "ultrapassa o limite.") : this.debitos.push(new Debito(valor, data));
    }
    calcularRendimento(): number {
        //Criar um saldo mensal
        let saldoMensal: any[] = (this.creditos as any).concat((this.debitos as any));
        saldoMensal = saldoMensal.sort((a,b) => a.getData() - b.getData());
        let meses = (saldoMensal[saldoMensal.length-1].getData() - saldoMensal[0].getData())/(1000*60*60*24*30)
        console.log(meses)
        return 1;
    }
    calcularSaldo(): number {
        return this.creditos.reduce((a, b) => {
            return a + b.getValor();
        }, 0) - this.debitos.reduce((a, b) => {
            return a + b.getValor();
        }, 0);
    }
}