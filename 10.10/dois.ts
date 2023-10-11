import * as leitor from "readline-sync"
import { livro } from "./bancoDois"


let titulo = leitor.question("Insira titulo:")
let autor = leitor.question("Insira autor:")
let anoPubli = leitor.questionInt("Insira ano de publicação")
const cadastro = new livro(titulo, autor, anoPubli)
cadastro.obterDetalhes()