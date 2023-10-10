"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var ontem = leitor.question("Insira tempo de ontem");
    var hoje = leitor.question("Insira tempo de hoje");
    timeSpent(hoje, ontem);
}
function timeSpent(a, b) {
    if (a > b) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
main();
