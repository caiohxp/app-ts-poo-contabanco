class ContaCorrente extends Conta{
    private limite: number;

    constructor(limite: number, nconta: string){
        super(nconta);
        this.limite = limite;
    }

    transferir(contaDestino: Conta, valor: number): void{
        
    }
    calcularSaldo(): number{
        return this.creditos.reduce((a, b) => {
            return a + b.getValor();
        }, 0) - this.debitos.reduce((a, b) => {
            return a + b.getValor();
        }, 0);
    }
}