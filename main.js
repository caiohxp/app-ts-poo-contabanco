"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cargo_1 = __importDefault(require("./cargo"));
const funcionario_1 = __importDefault(require("./funcionario"));
const cliente_1 = __importDefault(require("./cliente"));
const ccorrente_1 = __importDefault(require("./ccorrente"));
// APP1
const func1 = new funcionario_1.default("Caio", "17590730750", "21984196040", 3000, new cargo_1.default("gerente"));
const func2 = new funcionario_1.default("Marcos", "02302133350", "21985322266", 1212, new cargo_1.default("atendente"));
console.log(func1, func2);
// APP2
const cliente1 = new cliente_1.default("Paula", "12324344", "3198056505", "Sim");
cliente1.setEndereco("23500-444", "Avenida Paulista", "666", "fundos", "São Paulo", "SP");
cliente1.setEndereco("27550-345", "Avenida Carioca", "212", "fundos", "Rio de Janeiro", "RJ");
cliente1.setEndereco("33510-124", "Avenida Mineira", "313", "apt 201 bloco 5", "Betim", "MG");
console.log(cliente1);
cliente1.listarEnderecos();
// APP3
const clienteapp31 = new cliente_1.default("Gustavo", "32429774660", "21987556509", "Sim");
clienteapp31.setConta(new ccorrente_1.default(1000, "010360206"));
console.log(clienteapp31);
