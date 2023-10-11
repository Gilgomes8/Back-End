import * as leitor from "readline-sync"
import { pessoa } from "./bancoUm";

function main(): void{
    const humano = metodos()
    let decisao = leitor.question("Editar cadastro? (s/n)")
    if(decisao==="s"){
        editar(humano)
    }
    else{
        console.log("Sessão encerrada.")
    }
}


function cadastro():pessoa
{
let nome = leitor.question("Insira seu nome:")
let idade = leitor.questionInt("Insira sua idade:")
let sexo = leitor.question("Insira seu sexo:")
let cabelo = leitor.question("Insira a cor do cabelo:")
let rg = leitor.questionInt("Insira seu RG:")
const humano= new pessoa(nome,idade,sexo,cabelo,rg)
return humano
}

function metodos():pessoa
{
    const humano=cadastro()
    humano.getNome()
    humano.getSexo()
    humano.getRG()
    return humano
}
function editar(humano:pessoa)
{
    humano.setNome()
    humano.setSexo()
    humano.setRG()
    humano.getNome()
    humano.getSexo()
    humano.getRG()
}
main()