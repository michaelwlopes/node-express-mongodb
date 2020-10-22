const path = require('path');
const caminhoArquivo = path.resolve(__dirname,'teste.json');
const escreve = require('./modulos/escrever');
const ler = require('./modulos/ler');



// const pessoas = [
//   {nome:'Maria', idade: 35},
//   {nome:'André', idade: 25},
//   {nome:'Camila', idade: 22},
//   {nome:'Paulo', idade: 40},
//   {nome:'Gabriella', idade:38},
// ];

// const json = JSON.stringify(pessoas, '', 2);
// escreve(caminhoArquivo, json);

async function leArquivo(caminho){
  const dados = await ler(caminho);
  renderizaDados(dados);
}

function renderizaDados(dados){
  dados = JSON.parse(dados);
  dados.forEach(val => console.log(val));
}
leArquivo(caminhoArquivo);