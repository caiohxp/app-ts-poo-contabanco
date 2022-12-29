import Conta from "./conta";
import Debito from "./debito";
export default class ContaPoupanca extends Conta {
    private rentabilidadeMensal: number;

    constructor(rM: number, nconta: string) {
        super(nconta);
        this.rentabilidadeMensal = rM;
    }
    sacar(valor: number, data = new Date()): void {
        this.calcularSaldo() - valor < 0 ? console.log("Saque de", valor, "ultrapassa o limite.") : this.debitos.push(new Debito(valor, new Date()));
    }
    calcularRendimento(): number {
        return 1;
    }
    calcularSaldo(): number {
        return 1;
    }
}