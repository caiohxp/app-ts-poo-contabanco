export default abstract class Pessoa {
    private cpf: string;
    private nome: string;
    private telefone: string;
    constructor(nome: string, cpf: string, telefone: string){
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
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