import * as leitor from "readline-sync"

function main()
{
    let nome = leitor.question("Insira o nome:")
    let valor = leitor.questionFloat("Insira o valor:")
    let desconto = leitor.questionInt("Insira o desconto:")
    console.log(`O nome do item é ${nome}, o valor é ${valor}, e o valor com desconto é de ${valor*((100-desconto)/100)}`)
}
main()