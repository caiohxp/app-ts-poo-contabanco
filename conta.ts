import Debito from "./debito";
import Credito from "./credito";

export default abstract class Conta {
    private numero: string;
    creditos: Credito[];
    debitos: Debito[];

    constructor(num: string){
        this.numero = num;
        this.creditos = [];
        this.debitos = [];
    }

    depositar(valor: number, data = new Date()){
        this.creditos.push(new Credito(valor, data));
        this.creditos.sort((a,b) => a.getData().getTime() - b.getData().getTime());
    }
    abstract sacar(valor: number, data?: Date): void;
    getNumero(){
        return this.numero;
    }
    abstract calcularSaldo(mes?:number, ano?:number): number;
}