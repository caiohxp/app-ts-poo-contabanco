"use strict";
exports.__esModule = true;
var Debito = /** @class */ (function () {
    function Debito(valor, data) {
        this.valor = -valor;
        this.data = data;
    }
    Debito.prototype.getData = function () {
        return this.data;
    };
    Debito.prototype.getValor = function () {
        return this.valor;
    };
    return Debito;
}());
exports["default"] = Debito;
