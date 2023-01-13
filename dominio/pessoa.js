"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(nome, cpf, telefone) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
    }
    getCPF() {
        return this.cpf;
    }
    getNome() {
        return this.nome;
    }
    getTelefone() {
        return this.telefone;
    }
}
exports.default = Pessoa;
