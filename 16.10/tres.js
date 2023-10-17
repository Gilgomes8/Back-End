"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var menu = true;
while (menu) {
    var option = leitor.question("Informe uma cor ou digite sair:").toLowerCase();
    switch (option) {
        case 'amarelo':
            console.log("mensagem 1");
            break;
        case 'vermelho':
            console.log("mensagem 2");
            break;
        case 'verde':
            console.log("mensagem 3");
            break;
        case 'branco':
            console.log("mensagem 4");
            break;
        case 'sair':
            console.log("Saindo");
            menu = false;
            break;
        default:
            console.log("Opção inválida");
    }
}
