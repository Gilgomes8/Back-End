"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var bancoDois_1 = require("./bancoDois");
var titulo = leitor.question("Insira titulo:");
var autor = leitor.question("Insira autor:");
var anoPubli = leitor.questionInt("Insira ano de publicação");
var cadastro = new bancoDois_1.livro(titulo, autor, anoPubli);
cadastro.obterDetalhes();
