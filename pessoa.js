"use strict";
exports.__esModule = true;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, cpf, telefone) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
    }
    Pessoa.prototype.getCPF = function () {
        return this.cpf;
    };
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.getTelefone = function () {
        return this.telefone;
    };
    return Pessoa;
}());
exports["default"] = Pessoa;
