abstract class Conta {
    private numero: string;

    depositar(valor: number){
        return new Credito(valor, new Date());
    }
    sacar(valor: number){
        
    }
}