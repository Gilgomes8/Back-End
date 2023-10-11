"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var banco_1 = require("./bancoUm");
function main() {
    var humano = metodos();
    var decisao = leitor.question("Editar cadastro? (s/n)");
    if (decisao === "s") {
        editar(humano);
    }
    else {
        console.log("Game Over");
    }
}
function cadastro() {
    var nome = leitor.question("Insira seu nome:");
    var idade = leitor.questionInt("Insira sua idade:");
    var sexo = leitor.question("Insira seu sexo:");
    var cabelo = leitor.question("Insira a cor do cabelo:");
    var rg = leitor.questionInt("Insira seu RG:");
    var humano = new banco_1.pessoa(nome, idade, sexo, cabelo, rg);
    return humano;
}
function metodos() {
    var humano = cadastro();
    humano.getNome();
    humano.getSexo();
    humano.getRG();
    return humano;
}
function editar(humano) {
    humano.setNome();
    humano.setSexo();
    humano.setRG();
    humano.getNome();
    humano.getSexo();
    humano.getRG();
}
main();
