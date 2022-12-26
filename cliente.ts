class Cliente extends Pessoa implements IUsuario{
    private vip: boolean;
    enderecos: Endereco[];
    conta: Conta[];
    
    constructor(vip: boolean, p: Pessoa){
        super(p.getCPF(),p.getNome(),p.getTelefone());
        this.vip = vip;
    }

    listarEnderecos(): void{
        this.enderecos.forEach(e => console.log(e))
    }
    autenticar(): boolean {
        return true;
    }
    setEndereco(endereco): void{
        this.enderecos.push(endereco);
    }
    setConta(conta): void{
        this.conta.push(conta);
    }
}