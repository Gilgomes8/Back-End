import * as leitor from "readline-sync"
import { Calculadora } from "./bancoQuatro";

function main(){

let calc= new Calculadora()
calc.setValores()
let menu:boolean =true
while(menu){
    let opt = leitor.questionInt("Escolha: \n1 Soma \n2 Subtracao \n3 Multiplicacao \n4 Divisao \n5 Alterar Valores \n0 Sair \nOpcao:")
    switch(opt){
        case 1:
            console.log("A soma dos numeros é:", calc.getMais())
            break;
        case 2:
            console.log("A subtração dos numeros é:", calc.getMenos())
            break;
        case 3:
            console.log("A multiplicação dos numeros é:", calc.getVezes())
            break;
        case 4:
            console.log("A divisão dos numeros é:", calc.getDividir())
            break;
        case 5:
            calc.setValores()
            break;
        case 0:
            console.log("Saindo...")
            menu = false
            break;

    }
}
}
main()