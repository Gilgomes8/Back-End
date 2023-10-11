"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pessoa = void 0;
var leitor = require("readline-sync");
var pessoa = /** @class */ (function () {
    function pessoa(nome, idade, sexo, cabelo, rg) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.cabelo = cabelo;
        this.rg = rg;
    }
    pessoa.prototype.getNome = function () {
        console.log("Ol\u00E1, meu nome \u00E9 ".concat(this.nome, ", e tenho ").concat(this.idade, " anos."));
    };
    pessoa.prototype.getSexo = function () {
        console.log("Sou do sexo ".concat(this.sexo, " e tenho cabelo ").concat(this.cabelo, "."));
    };
    pessoa.prototype.getRG = function () {
        console.log("Atualmente estou cadastrado com o RG ".concat(this.rg));
    };
    pessoa.prototype.setNome = function () {
        var nomeDois = leitor.question("Insira o nome:");
        this.nome = nomeDois;
    };
    pessoa.prototype.setIdade = function () {
        var idadeDois = leitor.questionInt("Insira a idade:");
        this.idade = idadeDois;
    };
    pessoa.prototype.setSexo = function () {
        var sexoDois = leitor.question("Insira o sexo:");
        this.sexo = sexoDois;
    };
    pessoa.prototype.setCabelo = function () {
        var cabeloDois = leitor.question("Insira a cor do cabelo:");
        this.cabelo = cabeloDois;
    };
    pessoa.prototype.setRG = function () {
        var rgDois = leitor.questionInt("Insira o RG:");
        this.rg = rgDois;
    };
    return pessoa;
}());
exports.pessoa = pessoa;
