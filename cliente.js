"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = __importDefault(require("./pessoa"));
class Cliente extends pessoa_1.default {
    constructor(nome, cpf, telefone, vip) {
        super(nome, cpf, telefone);
        this.vip = "Sim" ? true : false;
        this.enderecos = [];
        this.conta = [];
    }
    listarEnderecos() {
        this.enderecos.forEach(e => console.log(e));
    }
    autenticar() {
        return true;
    }
    setEndereco(endereco) {
        this.enderecos.push(endereco);
    }
    setConta(conta) {
        this.conta.push(conta);
    }
}
exports.default = Cliente;
