import * as leitor from "readline-sync"

function main()
{
    let salarioBruto: Number;
    let salarioINSS: Number;
    
    salarioBruto = leitor.questionFloat("Insira o salario bruto:");

    salarioINSS = INSS(salarioBruto)

    console.log(`A contribuição será de R$${salarioINSS}`)
    console.log(`pois seu salário bruto é de R$${salarioBruto}`)
}

function INSS(salario) :number{
    if( salario <= 1320)
    { 
        return 0.925
    }
    else if (salario > 1320 && salario < 2572)
    {
        return (salario-1320) * 0.91
    }
    else if (salario > 2572 && salario < 3856)
    {
        return (salario-2572) * 0.88
    }
    else if (salario > 3856)
    {
        return (salario-3856) * 0.86
    }
    else
    {
        return 0
    }

    }

    main()
  