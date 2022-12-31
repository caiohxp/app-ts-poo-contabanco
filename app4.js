"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cliente_1 = __importDefault(require("./cliente"));
const ccorrente_1 = __importDefault(require("./ccorrente"));
const cpoupanca_1 = __importDefault(require("./cpoupanca"));
const cliente41 = new cliente_1.default("Jorge", "12453533350", "31987490044", "Sim");
cliente41.setConta(new ccorrente_1.default(1500, "010360206"));
cliente41.getConta("010360206").depositar(1000);
const cliente42 = new cliente_1.default("Lucio", "98846638790", "21987702625", "Não");
cliente42.setConta(new cpoupanca_1.default(0.01, "12345678"));
cliente42.getConta("12345678").depositar(1000);
cliente41.getConta("010360206").transferir(cliente42.getConta("12345678"), 500);
console.log("A Conta Corrente agora possui", cliente41.getConta("010360206").calcularSaldo(), "reais");
console.log("A Conta Corrente agora possui", cliente42.getConta("12345678").calcularSaldo(), "reais");
