"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var conta_1 = require("./conta");
var debito_1 = require("./debito");
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente(limite, nconta) {
        var _this = _super.call(this, nconta) || this;
        _this.limite = limite;
        return _this;
    }
    ContaCorrente.prototype.transferir = function (contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    };
    ContaCorrente.prototype.sacar = function (valor, data) {
        if (data === void 0) { data = new Date(); }
        this.calcularSaldo() - valor < 0 && Math.abs(this.calcularSaldo() - valor) > this.limite ? console.log("Saque de", valor, "ultrapassa o limite.") : this.operacoes.push(new debito_1["default"](valor, data));
        this.operacoes.sort(function (a, b) { return a.getData().getTime() - b.getData().getTime(); });
    };
    ContaCorrente.prototype.calcularSaldo = function (mes, ano) {
        if (mes === void 0) { mes = 0; }
        if (ano === void 0) { ano = 0; }
        //Caso o mês e o ano não sejam dados como parâmetro será dada a data da ultima
        if (mes == 0)
            mes = this.operacoes[this.operacoes.length - 1].getData().getMonth() + 1;
        if (ano == 0)
            ano = this.operacoes[this.operacoes.length - 1].getData().getFullYear();
        var index = 0;
        this.operacoes.forEach(function (o, i) {
            //pega o index da data mais atual até a data fornecida pelo parâmetro
            //adiciono mais 1 ao mês pra pegar o getTime do mês inteiro
            if (o.getData().getTime() < (mes === 12 ? new Date("".concat(ano + 1, "-01")).getTime() : new Date("".concat(ano, "-").concat(mes + 1)).getTime()))
                index = i;
        });
        var saldo = 0;
        for (var i = 0; i <= index; i++)
            saldo += this.operacoes[i].getValor();
        return saldo + this.limite;
    };
    return ContaCorrente;
}(conta_1["default"]));
exports["default"] = ContaCorrente;
