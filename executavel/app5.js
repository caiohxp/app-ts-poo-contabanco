"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cliente_1 = __importDefault(require("../dominio/cliente"));
const conta_poupanca_1 = __importDefault(require("../dominio/conta-poupanca"));
const cliente5 = new cliente_1.default("Darwin", "131313355566", "8993566435", "Sim");
cliente5.setConta(new conta_poupanca_1.default(0.01, "13579753"));
for (let i = 1; i <= 12; i++) {
    cliente5.getConta("13579753").depositar(200, new Date(`2022-${i}-02`));
}
cliente5.getConta("13579753").sacar(100, new Date("2022-03-05"));
cliente5.getConta("13579753").sacar(200, new Date("2022-07-08"));
console.log("Seu saldo até este mês é R$", cliente5.getConta("13579753").calcularSaldo());
