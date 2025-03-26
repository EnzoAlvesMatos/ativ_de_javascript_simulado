import { Pessoa } from "./Pessoa.js";
export class Aluno extends Pessoa{

    constructor(nome, idade, Matricula){
    super(nome, idade);
    this.Matricula = Matricula;
    }

}
