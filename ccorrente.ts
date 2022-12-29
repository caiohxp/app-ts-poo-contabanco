import Conta from "./conta";
import Debito from "./debito";
export default class ContaCorrente extends Conta{
    private limite: number;

    constructor(limite: number, nconta: string){
        super(nconta);
        this.limite = limite;
    }

    transferir(contaDestino: Conta, valor: number): void{
        
    }
    sacar(valor: number, data = new Date()): void{
        this.calcularSaldo()-valor < 0 && Math.abs(this.calcularSaldo()-valor) > this.limite? console.log("Saque de",valor,"ultrapassa o limite.") : this.debitos.push(new Debito(valor, new Date()));
    }
    calcularSaldo(): number{
        return this.creditos.reduce((a, b) => {
            return a + b.getValor();
        }, 0) - this.debitos.reduce((a, b) => {
            return a + b.getValor();
        }, 0);
    }
}