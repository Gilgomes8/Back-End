import * as leitor from "readline-sync"

let menu:boolean = true
while(true){
    let option = leitor.questionInt("Insira numero de 1 a 3, ou 4 para sair:")
    switch(option){
        case 1:
            console.log("mensagem 1")
            break;
        case 2:
            console.log("mensagem 2")
            break;
        case 3:
            console.log("mensagem 3")
            break;
        case 4:
            console.log("Saindo")
            menu = false
            break;  
        default:
            console.log("Inexistente")
            break;
    }
}