
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
<<<<<<< HEAD
return `Olá, meu nome é  ${this.#nome} e tenho ${this.idade} anos.`;
  
}


}
=======
    return 'Olá, meu nome é ${this.nome} 
}
}
>>>>>>> 315ac23f2af4cf255b6ad7d837667db1bab397fb
