import * as leitor from "readline-sync"
export class Calculadora{
    n1:number;
    n2:number;
    
    setValores(){
        this.n1=leitor.questionFloat("insira n1:")
        this.n2=leitor.questionFloat("insira n2:")
    }

getMais():number {return this.n1+this.n2}
getMenos():number {return this.n1-this.n2}
getVezes():number {return this.n1*this.n2}
getDividir():number {return this.n1/this.n2}
}