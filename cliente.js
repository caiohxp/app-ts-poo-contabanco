"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = __importDefault(require("./pessoa"));
const endereco_1 = __importDefault(require("./endereco"));
class Cliente extends pessoa_1.default {
    constructor(nome, cpf, telefone, vip) {
        super(nome, cpf, telefone);
        this.vip = vip === "Sim" ? true : false;
        this.enderecos = [];
        this.conta = [];
    }
    listarEnderecos() {
        this.enderecos.forEach(e => console.log(e));
    }
    autenticar() {
        return true;
    }
    setEndereco(cep, logradouro, numero, complemento, cidade, uf) {
        this.enderecos.push(new endereco_1.default(cep, logradouro, numero, complemento, cidade, uf));
    }
    setConta(conta) {
        this.conta.push(conta);
    }
    getConta(numero) {
        var index = 0;
        this.conta.forEach((c, i) => {
            if (numero === c.getNumero())
                index = i;
        });
        return this.conta[index];
    }
}
exports.default = Cliente;
