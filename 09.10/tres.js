"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var adulto = leitor.questionInt("Insira a quantia de adultos na festa:");
    var crianca = leitor.questionInt("Insira a quantia de crianças na festa:");
    console.log("Total party size is ".concat(adulto + crianca));
}
main();
