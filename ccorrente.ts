class CCorrente extends Conta{
    private limite: number;

    constructor(limite: number, nconta: string){
        super(nconta);
        this.limite = limite;
    }

    transferir(contaDestino: Conta, valor: number): void{
        
    }
    calcularSaldo(): number{
        return 1;
    }
}