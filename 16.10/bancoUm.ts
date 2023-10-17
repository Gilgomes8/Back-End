export class Circulo{
    //atributos
    raio: number;
    pi: number = 3.14;

    constructor(raio: number){
        this.raio = raio
    }

    getArea(){
        let area: number = this.pi * (this.raio*this.raio)
        console.log(`O valor da area do circulo eh: ${area}`);
    }
}

export class Triangulo{
    //atributos
    base: number;
    altura: number;

    constructor(base: number, altura: number){
        this.base = base;
        this.altura = altura;
    }

    getArea(){
        let area: number = (this.base * this.altura) / 2
        console.log(`O valor da area do triangulo eh: ${area}`);
    }
}

export class Retangulo{
    //atributos
    base: number;
    altura: number;

    constructor(base: number, altura: number){
        this.base = base;
        this.altura = altura;
    }

    getArea(){
        let area: number = (this.base * this.altura)
        console.log(`O valor da area do retangulo eh: ${area}`);
    }
}