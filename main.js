import {Professor} from './Professor.js';
import {Aluno} from './Aluno.js';
console.log("Pagina carregou...");





let Vegeta = new Aluno();
let Goku = new Aluno();

Goku.idade = 50;
Vegeta.idade = 53;


Vegeta.nome = 'Vegeta';
Goku.nome = 'Goku';

console.log (Vegeta.fala());
console.log (Goku.fala());

let Gohan = new Professor();
let Videl = new Professor();


Videl.idade = 22;
Gohan.idade = 22;

Videl.nome = 'Videl';
Gohan.nome = 'Gohan';



console.log(Videl.fala());
console.log(Gohan.fala());