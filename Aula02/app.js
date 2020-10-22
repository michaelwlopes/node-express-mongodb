// const multiplicacao = require('./index');

// console.log(multiplicacao(2432, 34560));

const dog = require('./index');

const cachorro = new dog('Carpeado');
cachorro.latir();
cachorro.correrAtrasDeMotoboy();

//CAMINHOS ENTRE PASTAS NO NODE
const path = require('path');
console.log(__dirname);
console.log(path.resolve(__dirname,'..','..'));