"use strict";
exports.__esModule = true;
var credito_1 = require("./credito");
var Conta = /** @class */ (function () {
    function Conta(num) {
        this.numero = num;
        this.creditos = [];
        this.debitos = [];
    }
    Conta.prototype.depositar = function (valor, data) {
        if (data === void 0) { data = new Date(); }
        this.creditos.push(new credito_1["default"](valor, data));
        this.creditos.sort(function (a, b) { return a.getData().getTime() - b.getData().getTime(); });
    };
    Conta.prototype.getNumero = function () {
        return this.numero;
    };
    return Conta;
}());
exports["default"] = Conta;
