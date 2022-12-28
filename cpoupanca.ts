import Conta from "./conta";
class ContaPoupanca extends Conta {
    private rentabilidadeMensal: number;

    constructor(rM: number, nconta: string){
        super(nconta);
        this.rentabilidadeMensal = rM;
    }

    calcularRendimento(): number{
        return 1;
    }
    calcularSaldo(): number{
        return 1;
    }
}