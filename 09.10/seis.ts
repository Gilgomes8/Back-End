import * as leitor from "readline-sync"

function main()
{
    let nome = leitor.question("Insira o nome:")
    let sistema = leitor.question("Insira o sistema:")
    displayAlertMessage(nome,sistema)
}
function displayAlertMessage(b,a)
{
    console.log(`There's a new sign-in request on ${a} for your Google Account ${b}`)
}

main()