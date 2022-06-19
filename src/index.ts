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

// Como podemos melhorar o esse código usando TS? 

// definimos o tipo
interface IPessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}

// padronizamos as profissões
enum Profissao {
    Atriz,
    Padeiro
}

// definimos o object do tipo IPessoa(interface) e em profissao acessamos a profissao já
// enumerada
let pessoa1 : IPessoa = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissao.Atriz
};


let pessoa2: IPessoa = {
    nome: 'Roberto',
    idade: 19,
    profissao: Profissao.Padeiro
}


let pessoa3: IPessoa = {
    nome: "Laura",
    idade: 32,
    profissao: Profissao.Atriz
};

let pessoa4: IPessoa= {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}

console.log(`${pessoa1.nome} tem ${pessoa1.idade} anos`);
console.log(`${pessoa2.nome} tem ${pessoa2.idade} anos`);
console.log(`${pessoa3.nome} tem ${pessoa3.idade} anos`);
console.log(`${pessoa4.nome} tem ${pessoa4.idade} anos`);

console.log('### DESAFIO 3 ###');

// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

// tipamos todos os elementos html
let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

//criamos uma variavel para receber o resultado das operações
let saldoTotal = 0;

// como innerHTML retorna o tipo string é necessário a conversão de saldoTotal para string
campoSaldo.innerHTML = saldoTotal.toString();

// tipamos o parametro soma
function somarAoSaldo(soma: number) {
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