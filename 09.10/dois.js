"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var nome = leitor.question("Insira o nome:");
    var valor = leitor.questionFloat("Insira o valor:");
    var desconto = leitor.questionInt("Insira o desconto:");
    console.log("O nome do item \u00E9 ".concat(nome, ", o valor \u00E9 ").concat(valor, ", e o valor com desconto \u00E9 de ").concat(valor * ((100 - desconto) / 100)));
}
main();
