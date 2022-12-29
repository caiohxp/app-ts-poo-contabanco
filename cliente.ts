import Pessoa from "./pessoa";
import IUsuario from "./iusuario";
import Endereco from "./endereco";
import Conta from "./conta";
export default class Cliente extends Pessoa implements IUsuario{
    private vip: boolean;
    enderecos: Endereco[];
    conta: Conta[];
    
    constructor(nome: string, cpf: string, telefone: string, vip: string){
        super(nome, cpf, telefone);
        this.vip = vip === "Sim"? true : false;
        this.enderecos = [];
        this.conta = [];
    }

    listarEnderecos(): void{
        this.enderecos.forEach(e => console.log(e))
    }
    autenticar(): boolean {
        return true;
    }
    setEndereco(cep: string, logradouro: string, numero: string, complemento: string, cidade: string, uf: string): void{
        this.enderecos.push(new Endereco(cep,logradouro,numero,complemento,cidade,uf));
    }
    setConta(conta: Conta): void{
        this.conta.push(conta);
    }
    getConta(numero: string): Conta{
        return this.conta[this.conta.findIndex(c => numero === c.getNumero())];
    }
}