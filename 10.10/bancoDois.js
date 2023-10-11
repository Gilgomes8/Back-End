"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.livro = void 0;
var livro = /** @class */ (function () {
    function livro(titulo, autor, anoPubli) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPubli = anoPubli;
    }
    livro.prototype.obterDetalhes = function () {
        console.log("O livro se chama ".concat(this.titulo));
        console.log("Ele foi escrito por ".concat(this.autor, "."));
        console.log("Ele foi publicado em ".concat(this.anoPubli));
    };
    return livro;
}());
exports.livro = livro;
