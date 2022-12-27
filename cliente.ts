import Pessoa from "./pessoa";
import IUsuario from "./iusuario";
export default class Cliente extends Pessoa implements IUsuario{
    private vip: boolean;
    enderecos: Endereco[];
    conta: Conta[];
    
    constructor(nome: string, cpf: string, telefone: string, vip: string){
        super(nome, cpf, telefone);
        this.vip = "Sim"? true : false;
        this.enderecos = [];
        this.conta = [];
    }

    listarEnderecos(): void{
        this.enderecos.forEach(e => console.log(e))
    }
    autenticar(): boolean {
        return true;
    }
    setEndereco(endereco: Endereco): void{
        this.enderecos.push(endereco);
    }
    setConta(conta: Conta): void{
        this.conta.push(conta);
    }
}