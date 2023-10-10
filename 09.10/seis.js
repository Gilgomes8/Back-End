"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var nome = leitor.question("Insira o nome:");
    var sistema = leitor.question("Insira o sistema:");
    displayAlertMessage(nome, sistema);
}
function displayAlertMessage(b, a) {
    console.log("There's a new sign-in request on ".concat(a, " for your Google Account ").concat(b));
}
main();
