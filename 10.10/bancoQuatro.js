"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
var leitor = require("readline-sync");
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.setValores = function () {
        this.n1 = leitor.questionFloat("insira n1:");
        this.n2 = leitor.questionFloat("insira n2:");
    };
    Calculadora.prototype.getMais = function () { return this.n1 + this.n2; };
    Calculadora.prototype.getMenos = function () { return this.n1 - this.n2; };
    Calculadora.prototype.getVezes = function () { return this.n1 * this.n2; };
    Calculadora.prototype.getDividir = function () { return this.n1 / this.n2; };
    return Calculadora;
}());
exports.Calculadora = Calculadora;
