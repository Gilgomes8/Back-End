"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var bancoUm_1 = require("./bancoUm");
var menu = true;
while (menu) {
    var opcao = leitor.questionInt("Digite 1 para Circulo, 2 para Triangulo, 3 para Retangulo, digite qualquer valor diferente para sair:  ");
    switch (opcao) {
        case 1:
            var raioCirculo = leitor.questionInt("Informe o valor do raio do circulo: ");
            var circulo = new bancoUm_1.Circulo(raioCirculo);
            circulo.getArea();
            break;
        case 2:
            var baseRetangulo = leitor.questionInt("Informe o valor da base do retangulo: ");
            var alturaRetangulo = leitor.questionInt("Informe o valor da altura do retangulo: ");
            var retangulo = new bancoUm_1.Retangulo(baseRetangulo, alturaRetangulo);
            retangulo.getArea();
            break;
        case 3:
            var baseTriangulo = leitor.questionInt("Informe o valor da base do triangulo: ");
            var alturaTriangulo = leitor.questionInt("Informe o valor da altura do triangulo: ");
            var triangulo = new bancoUm_1.Triangulo(baseTriangulo, alturaTriangulo);
            triangulo.getArea();
            break;
        default:
            console.log("Opcao inexistente, saindo...");
            menu = false;
            break;
    }
}
