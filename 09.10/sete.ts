import * as leitor from "readline-sync"

function main()
{
    let ontem = leitor.question("Insira tempo de ontem")
    let hoje = leitor.question("Insira tempo de hoje")
    timeSpent(hoje,ontem)
}
function timeSpent(a,b)
{
    if(a>b)
    {
        console.log(true)
    }
    else
    {
        console.log(false)
    }
}
main()