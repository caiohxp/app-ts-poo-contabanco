"use strict";
exports.__esModule = true;
var Credito = /** @class */ (function () {
    function Credito(valor, data) {
        this.valor = valor;
        this.data = data;
    }
    Credito.prototype.getData = function () {
        return this.data;
    };
    Credito.prototype.getValor = function () {
        return this.valor;
    };
    return Credito;
}());
exports["default"] = Credito;
