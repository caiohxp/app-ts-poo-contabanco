abstract class Conta {
    private numero: string;

    constructor(num: string){
        this.numero = num;
    }

    depositar(valor: number){
        return new Credito(valor, new Date());
    }
    sacar(valor: number){
        
    }
    getNumero(){
        return this.numero;
    }
}