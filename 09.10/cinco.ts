function main()
{
var primeiro:number = 10
var segundo:number = 20
var terceiro:number = 30
var somar = soma(primeiro,segundo,terceiro)
var dividir = divisao(primeiro, segundo, terceiro)
var mult = multiplicacao(primeiro,segundo, terceiro)
var subt = subtracao(primeiro,segundo, terceiro)
console.log(somar, dividir, mult, subt)
}
function soma(a,b,c)
{
    return (a+b+c)
}
function divisao(a,b,c)
{
    return (a/b/c)
}
function multiplicacao(a,b,c)
{
    return (a*b*c)
}
function subtracao(a,b,c)
{
    return (a-b-c)
}
main()