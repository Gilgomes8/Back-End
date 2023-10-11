"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var bancoTres_1 = require("./bancoTres");
function main() {
    var aluno = cadastro();
    console.log(aluno.getMedia());
}
function cadastro() {
    var nome = leitor.question("Insira o nome do aluno:");
    var aluno = new bancoTres_1.Aluno(nome);
    var n1 = leitor.questionFloat("Insira a nota:");
    var n2 = leitor.questionFloat("Insira a nota:");
    var n3 = leitor.questionFloat("Insira a nota:");
    aluno.setNotas(n1, n2, n3);
    return aluno;
}
main();
