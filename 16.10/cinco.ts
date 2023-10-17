import * as leitor from "readline-sync"

let menu:boolean = true
while(menu){
    let option : number = leitor.questionInt("Informe o código do produto: \n1 - Camisa \n2 - Calça \n3 - Tenis \n0 - Sair")
    switch(option){
        case 1:
            console.log("Produto selecionado: Camisa \nValor: R$150,00")
            break;
        case 2:
            console.log("Produto selecionado: Calça \nValor: R$200,00")
            break;
        case 3:
            console.log("Produto selecionado: Tenis \nValor: R$250,00")
            break;
        case 0:
            console.log("Saindo")
            menu = false;
            break;
        default:
            console.log("Opção inválida")
                                
    }
}