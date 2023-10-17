import * as leitor from "readline-sync"
import { Circulo, Retangulo, Triangulo } from "./bancoUm"
let menu = true
while(menu){
    let opcao = leitor.questionInt("Digite 1 para Circulo, 2 para Triangulo, 3 para Retangulo, digite qualquer valor diferente para sair:  ")

    switch(opcao){
        case 1:
            let raioCirculo = leitor.questionInt("Informe o valor do raio do circulo: ")
            let circulo = new Circulo(raioCirculo)
            circulo.getArea()
            break
        case 2:
            let baseRetangulo = leitor.questionInt("Informe o valor da base do retangulo: ")
            let alturaRetangulo = leitor.questionInt("Informe o valor da altura do retangulo: ")
            let retangulo = new Retangulo(baseRetangulo, alturaRetangulo)
            retangulo.getArea()
            break
        case 3:
            let baseTriangulo = leitor.questionInt("Informe o valor da base do triangulo: ")
            let alturaTriangulo = leitor.questionInt("Informe o valor da altura do triangulo: ")
            let triangulo = new Triangulo(baseTriangulo, alturaTriangulo)
            triangulo.getArea()
            break
        default:
            console.log("Opcao inexistente, saindo...");
            menu = false
            break
    }
}









