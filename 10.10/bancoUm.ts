import * as leitor from "readline-sync"
export class pessoa
{
    nome:string;
    idade:number;
    sexo:string;
    cabelo:string;
    rg:number;

    constructor(nome:string, idade:number, sexo:string, cabelo:string, rg:number){
        this.nome=nome;
        this.idade=idade;
        this.sexo=sexo;
        this.cabelo=cabelo;
        this.rg=rg;
    }
    
    getNome(){
        console.log(`Olá, meu nome é ${this.nome}, e tenho ${this.idade} anos.`)
    }
    getSexo(){
        console.log(`Sou do sexo ${this.sexo} e tenho cabelo ${this.cabelo}.`)
    }
    getRG(){
        console.log(`Atualmente estou cadastrado com o RG ${this.rg}`)
    }

    setNome(){
        let nomeDois = leitor.question("Insira o nome:")
        this.nome = nomeDois
    }
    setIdade(){
        let idadeDois = leitor.questionInt("Insira a idade:")
        this.idade = idadeDois
    }
    setSexo(){
        let sexoDois = leitor.question("Insira o sexo:")
        this.sexo = sexoDois
    }
    setCabelo(){
        let cabeloDois = leitor.question("Insira a cor do cabelo:")
        this.cabelo = cabeloDois
    }
    setRG(){
        let rgDois = leitor.questionInt("Insira o RG:")
        this.rg = rgDois
    }
}
