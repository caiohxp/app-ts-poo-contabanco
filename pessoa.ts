abstract class Pessoa {
    private cpf: string;
    private nome: string;
    private telefone: string;
    constructor(cpf: string, nome: string, telefone: string){
        this.setCPF(cpf);
        this.nome = nome;
        this.telefone = telefone;
    }
    setCPF(cpf: string){
        this.cpf = cpf;
    }
    getCPF(){
        return this.cpf;
    }
    getNome(){
        return this.nome;
    }
    getTelefone(){
        return this.telefone;
    }
  }