"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var salarioBruto;
    var salarioINSS;
    salarioBruto = leitor.questionFloat("Insira o salario bruto:");
    salarioINSS = INSS(salarioBruto);
    console.log("A contribui\u00E7\u00E3o ser\u00E1 de R$".concat(salarioINSS));
    console.log("pois seu sal\u00E1rio bruto \u00E9 de R$".concat(salarioBruto));
}
function INSS(salario) {
    if (salario <= 1320) {
        return 0.925;
    }
    else if (salario > 1320 && salario < 2572) {
        return (salario - 1320) * 0.91;
    }
    else if (salario > 2572 && salario < 3856) {
        return (salario - 2572) * 0.88;
    }
    else if (salario > 3856) {
        return (salario - 3856) * 0.86;
    }
    else {
        return 0;
    }
}
main();
