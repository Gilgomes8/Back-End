import * as leitor from "readline-sync"
import { Aluno } from "./bancoTres"

function main(): void{
        let aluno = cadastro()
        console.log(aluno.getMedia());
}

function cadastro():Aluno{

let nome = leitor.question(`Insira o nome do aluno:`);
let aluno = new Aluno(nome)

let n1 = leitor.questionFloat("Insira a nota:");
let n2 = leitor.questionFloat("Insira a nota:");
let n3 = leitor.questionFloat("Insira a nota:");
aluno.setNotas(n1,n2,n3)
return aluno
}
main()