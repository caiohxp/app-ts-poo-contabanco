import Debito from "./debito";
import Credito from "./credito";

export default abstract class Conta {
    private numero: string;
    private operacoes: Array<Credito|Debito>;

    constructor(num: string){
        this.numero = num;
        this.operacoes = [];
    }
    getOperacoes() {
        return this.operacoes;
    }
    depositar(valor: number, data = new Date()){
        this.operacoes.push(new Credito(valor, data));
        this.operacoes.sort((a,b) => a.getData().getTime() - b.getData().getTime());
    }
    abstract sacar(valor: number, data?: Date): void;
    getNumero(){
        return this.numero;
    }
    abstract calcularSaldo(mes?:number, ano?:number): number;
}