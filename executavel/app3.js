"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cliente_1 = __importDefault(require("../dominio/cliente"));
const conta_corrente_1 = __importDefault(require("../dominio/conta-corrente"));
// Crie um cliente que possua uma ContaCorrente
const clienteapp31 = new cliente_1.default("Gustavo", "32429774660", "21987556509", "Não");
clienteapp31.setConta(new conta_corrente_1.default(1000, "010360206"));
// Efetue três depósitos de 100 nessa ContaCorrente
clienteapp31.getConta("010360206").depositar(100);
clienteapp31.getConta("010360206").depositar(100, new Date("2010-09-01"));
clienteapp31.getConta("010360206").depositar(100);
// Efetue um saque de 50 reais nessa ContaCorrente
clienteapp31.getConta("010360206").sacar(50);
console.log(clienteapp31.getConta("010360206"));
// Imprima o valor do saldo dessa ContaCorrente
console.log(clienteapp31.getConta("010360206").calcularSaldo());
