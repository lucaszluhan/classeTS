"use strict";
var Escola = /** @class */ (function () {
    function Escola() {
    }
    Escola.prototype.mediaEscola = function () {
        var media = 70;
        return media;
    };
    Escola.prototype.mediaAluno = function (aluno) {
        var media = ((aluno.nota1 + aluno.nota2 + aluno.nota3) / 3).toFixed(0);
        if (media > '70') {
            return aluno.nome + ", sua nota final \u00E9 " + media + ", voce foi APROVADO!";
        }
        else
            return aluno.nome + ", sua nota final \u00E9 " + media + ", voce foi REPROVADO!";
    };
    return Escola;
}());
var lucas = { nome: 'lucas', nota1: 90, nota2: 70, nota3: 80 };
var Sinodal = new Escola();
console.log(Sinodal.mediaAluno(lucas), "Media escola: " + Sinodal.mediaEscola());
