"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Retangulo = exports.Triangulo = exports.Circulo = void 0;
var Circulo = /** @class */ (function () {
    function Circulo(raio) {
        this.pi = 3.14;
        this.raio = raio;
    }
    Circulo.prototype.getArea = function () {
        var area = this.pi * (this.raio * this.raio);
        console.log("O valor da area do circulo eh: ".concat(area));
    };
    return Circulo;
}());
exports.Circulo = Circulo;
var Triangulo = /** @class */ (function () {
    function Triangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Triangulo.prototype.getArea = function () {
        var area = (this.base * this.altura) / 2;
        console.log("O valor da area do triangulo eh: ".concat(area));
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
var Retangulo = /** @class */ (function () {
    function Retangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Retangulo.prototype.getArea = function () {
        var area = (this.base * this.altura);
        console.log("O valor da area do retangulo eh: ".concat(area));
    };
    return Retangulo;
}());
exports.Retangulo = Retangulo;
