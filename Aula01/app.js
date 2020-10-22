// const index = require('./index');

// const falaNome = require('./index').falaNome;
//console.log(falaNome());

// const { nome, sobrenome, nomeCompleto} = require('./index')
// console.log(nome, sobrenome);
// console.log(nomeCompleto());

const path = require('path');
const { Pessoa } = require('./index');

const p1 = new Pessoa('Michael');
console.log(p1);