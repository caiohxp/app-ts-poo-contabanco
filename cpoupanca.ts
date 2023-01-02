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
        this.debitos.sort((a,b) => a.getData().getTime() - b.getData().getTime());
    }
    calcularRendimento(): number {
        //Testando Calcular Rendimento
        let saldoMensalaux: any[] = (this.creditos as any).concat((this.debitos as any));
        saldoMensalaux = saldoMensalaux.sort((a,b) => a.getData().getTime() - b.getData().getTime());
        let meses = (saldoMensalaux[saldoMensalaux.length-1].getData().getTime() - saldoMensalaux[0].getData().getTime())/(1000*60*60*24*30)
        console.log(Math.floor(meses))
        let saldoMensal: object[] = [];
        for(let i = 0; i<31;i++){
            saldoMensal.push()
        }
        return 1;
    }
    calcularSaldo(mes?:number, ano?:number): number {
        let operacao: any[] = (this.creditos as any).concat((this.debitos as any));
       operacao =operacao.sort((a,b) => a.getData().getTime() - b.getData().getTime());
        if(mes == undefined)
            mes = operacao[operacao.length-1].getData().getMonth()+1;
        if(ano == undefined)
            ano = operacao[operacao.length-1].getData().getFullYear();
        operacao.forEach(o => console.log(o))
        console.log(mes,ano)
        return this.creditos.reduce((a, b) => {
            return a + b.getValor();
        }, 0) - this.debitos.reduce((a, b) => {
            return a + b.getValor();
        }, 0);
    }
}