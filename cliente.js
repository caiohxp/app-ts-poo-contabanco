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
var pessoa_1 = require("./pessoa");
var endereco_1 = require("./endereco");
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(nome, cpf, telefone, vip) {
        var _this = _super.call(this, nome, cpf, telefone) || this;
        _this.vip = vip === "Sim" ? true : false;
        _this.enderecos = [];
        _this.conta = [];
        return _this;
    }
    Cliente.prototype.listarEnderecos = function () {
        this.enderecos.forEach(function (e) { return console.log(e); });
    };
    Cliente.prototype.autenticar = function () {
        return true;
    };
    Cliente.prototype.setEndereco = function (cep, logradouro, numero, complemento, cidade, uf) {
        this.enderecos.push(new endereco_1["default"](cep, logradouro, numero, complemento, cidade, uf));
    };
    Cliente.prototype.setConta = function (conta) {
        this.conta.push(conta);
    };
    Cliente.prototype.getConta = function (numero) {
        var index = 0;
        this.conta.forEach(function (c, i) {
            if (numero === c.getNumero())
                index = i;
        });
        return this.conta[index];
    };
    return Cliente;
}(pessoa_1["default"]));
exports["default"] = Cliente;
