export class livro
{
    titulo:string;
    autor:string;
    anoPubli:number;
    

    constructor(titulo:string,autor:string,anoPubli:number){
        this.titulo=titulo;
        this.autor=autor;
        this.anoPubli=anoPubli;       
    }
    obterDetalhes(){
        console.log(`O livro se chama ${this.titulo}`)
        console.log(`Ele foi escrito por ${this.autor}.`)
        console.log(`Ele foi publicado em ${this.anoPubli}`)
    }
}