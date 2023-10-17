import * as leitor from "readline-sync"
import { Circulo, Retangulo, Triangulo } from "./bancoUm"
let opcao = leitor.questionInt("Digite 1 para Circulo, 2 para Triangulo e 3 para Retangulo: ")

if(opcao === 1) {
    let raio = leitor.questionInt("Informe o valor do raio do circulo: ")
    let circulo = new Circulo(raio)
    circulo.getArea()
} else if (opcao === 2) {
    let base = leitor.questionInt("Informe o valor da base do triangulo: ")
    let altura = leitor.questionInt("Informe o valor da altura do triangulo: ")
    let triangulo = new Triangulo(base, altura)
    triangulo.getArea()
} else if (opcao === 3) {
    let base = leitor.questionInt("Informe o valor da base do retangulo: ")
    let altura = leitor.questionInt("Informe o valor da altura do retangulo: ")
    let retangulo = new Retangulo(base, altura)
    retangulo.getArea()
} else {
    console.log("Opcao invalida, tente novamente.")
}


