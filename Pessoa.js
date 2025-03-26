
export class Pessoa{
#nome = '';


constructor(nome, idade){
this.nome = nome;
this.idade = idade;
}
get nome(){
    return this.#nome;
}
set nome(nome){
    if(this.idade > 18){
        this.#nome = nome;
    }
}

fala(){
    return 'Olá, meu nome é ${this.nome} 
}
}