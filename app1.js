"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const funcionario_1 = __importDefault(require("./funcionario"));
const cargo_1 = __importDefault(require("./cargo"));
// Crie dois funcionários do banco, um gerente e um atendente.
const func1 = new funcionario_1.default("Caio", "17590730750", "21984196040", 3000, new cargo_1.default("gerente"));
const func2 = new funcionario_1.default("Marcos", "02302133350", "21985322266", 1212, new cargo_1.default("atendente"));
console.log(func1, func2);
