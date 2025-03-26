import {Pessoa} from './Pessoa.js';
export class Professor extends Pessoa{
constructor(nome, idade, materia){
super(nome, idade);
this.materia = materia;
}




}