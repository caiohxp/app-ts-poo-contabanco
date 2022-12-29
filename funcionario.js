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
var Funcionario = /** @class */ (function (_super) {
    __extends(Funcionario, _super);
    function Funcionario(nome, cpf, telefone, sal, cargo) {
        var _this = _super.call(this, nome, cpf, telefone) || this;
        _this.salario = sal;
        _this.cargo = cargo;
        return _this;
    }
    Funcionario.prototype.autenticar = function () {
        return true;
    };
    return Funcionario;
}(pessoa_1["default"]));
exports["default"] = Funcionario;
