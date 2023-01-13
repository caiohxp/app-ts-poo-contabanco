"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cliente_1 = __importDefault(require("../dominio/cliente"));
// Crie um cliente e adicione 3 endereços a ele
const cliente1 = new cliente_1.default("Paula", "12324344", "3198056505", "Sim");
cliente1.addEndereco("23500-444", "Avenida Paulista", "666", "fundos", "São Paulo", "SP");
cliente1.addEndereco("27550-345", "Avenida Carioca", "212", "fundos", "Rio de Janeiro", "RJ");
cliente1.addEndereco("33510-124", "Avenida Mineira", "313", "apt 201 bloco 5", "Betim", "MG");
// Imprima os endereços desse cliente
cliente1.listarEnderecos();
