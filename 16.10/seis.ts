import * as leitor from "readline-sync"

let menu= true
while(menu){
    let teste = true
    let nota = leitor.questionInt("Informe uma nota de 0 a 100 ou 101 para sair:")
    switch(teste){
        case (nota<=20):
            console.log("seu conceito é F")
            break;
        case (nota<=40):
            console.log("seu conceito é D")
            break;
        case (nota<=60):
            console.log("seu conceito é C")
            break;
        case (nota<=80):
            console.log("seu conceito é B")
            break;
        case (nota<=100):
            console.log("seu conceito é A")
            break;
        case (nota===101):
            console.log("Saindo")
            menu=false
            break;
    }
                                
    }
