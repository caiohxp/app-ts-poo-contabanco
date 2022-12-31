"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = __importDefault(require("./pessoa"));
class Funcionario extends pessoa_1.default {
    constructor(nome, cpf, telefone, sal, cargo) {
        super(nome, cpf, telefone);
        this.salario = sal;
        this.cargo = cargo;
    }
    autenticar() {
        return true;
    }
}
exports.default = Funcionario;
