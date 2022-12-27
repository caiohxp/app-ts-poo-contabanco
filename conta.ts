abstract class Conta {
    private numero: string;
    creditos: Credito[];
    debitos: Debito[];

    constructor(num: string){
        this.numero = num;
        this.creditos = [];
        this.debitos = [];
    }

    depositar(valor: number){
        this.creditos.push(new Credito(valor, new Date()));
    }
    sacar(valor: number){
        this.debitos.push(new Debito(valor, new Date()));
    }
    getNumero(){
        return this.numero;
    }
}