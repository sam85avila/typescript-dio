"use strict";
console.log('### DESAFIO 1 ###');
// Como podemos rodar isso em um arquivo .ts sem causar erros? 
let employee = {
    name: "John",
    code: 10
};
console.log(`O nome do funcionário é ${employee.name}.`);
console.log(`O código do funcionário é ${employee.code}.`);
// desafio 2
console.log('### DESAFIO 2 ###');
// padronizamos as profissões
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Atriz"] = 0] = "Atriz";
    Profissao[Profissao["Padeiro"] = 1] = "Padeiro";
})(Profissao || (Profissao = {}));
// definimos o object do tipo IPessoa(interface) e em profissao acessamos a profissao já
// enumerada
let pessoa1 = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissao.Atriz
};
let pessoa2 = {
    nome: 'Roberto',
    idade: 19,
    profissao: Profissao.Padeiro
};
let pessoa3 = {
    nome: "Laura",
    idade: 32,
    profissao: Profissao.Atriz
};
let pessoa4 = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.Padeiro
};
console.log(`${pessoa1.nome} tem ${pessoa1.idade} anos`);
console.log(`${pessoa2.nome} tem ${pessoa2.idade} anos`);
console.log(`${pessoa3.nome} tem ${pessoa3.idade} anos`);
console.log(`${pessoa4.nome} tem ${pessoa4.idade} anos`);
console.log('### DESAFIO 3 ###');
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
// tipamos todos os elementos html
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
//criamos uma variavel para receber o resultado das operações
let saldoTotal = 0;
// como innerHTML retorna o tipo string é necessário a conversão de saldoTotal para string
campoSaldo.innerHTML = saldoTotal.toString();
// tipamos o parametro soma
function somarAoSaldo(soma) {
    saldoTotal += soma;
    campoSaldo.innerHTML = saldoTotal.toString();
    limparCampoSoma();
}
function limparSaldo() {
    saldoTotal = 0;
    campoSaldo.innerHTML = '0';
}
function limparCampoSoma() {
    soma.value = '';
}
// convertemos o valor de soma para number
botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
