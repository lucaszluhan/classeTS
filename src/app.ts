class Escola {
   mediaEscola(): number {
      let media = 70;
      return media;
   }
   mediaAluno(aluno: Aluno): string {
      let media = ((aluno.nota1 + aluno.nota2 + aluno.nota3) / 3).toFixed(0);
      if (media > '70') {
         return `${aluno.nome}, sua nota final é ${media}, voce foi APROVADO!`;
      } else return `${aluno.nome}, sua nota final é ${media}, voce foi REPROVADO!`;
   }
}

interface Aluno {
   nome: string;
   nota1: number;
   nota2: number;
   nota3: number;
}

let lucas: Aluno = { nome: 'lucas', nota1: 90, nota2: 70, nota3: 80 };

let Sinodal = new Escola();

console.log(Sinodal.mediaAluno(lucas), `Media escola: ${Sinodal.mediaEscola()}`);
