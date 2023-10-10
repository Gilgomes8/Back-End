import * as leitor from "readline-sync"

function main(){
    let adulto = leitor.questionInt("Insira a quantia de adultos na festa:")
    let crianca = leitor.questionInt("Insira a quantia de crianças na festa:")
    console.log(`Total party size is ${adulto+crianca}`)
}
main()