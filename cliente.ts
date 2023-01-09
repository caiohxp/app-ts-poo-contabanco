import Pessoa from "./pessoa";
import IUsuario from "./iusuario";
import Endereco from "./endereco";
import Conta from "./conta";
import ContaCorrente from "./ccorrente";
export default class Cliente extends Pessoa implements IUsuario{
    private vip: boolean;
    private enderecos: Endereco[];
    private conta: Conta[];
    
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
        var index = 0;
        this.conta.forEach((c,i) => {
            if(numero === c.getNumero())
                index = i;
        })
        return this.conta[index];
    }
}