// const nome = 'Michael';
// const sobrenome = 'Lopes';

// const nomeCompleto = () => nome + ' ' + sobrenome;


// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.nomeCompleto = nomeCompleto;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.nomeCompleto =  nomeCompleto;
// this.qualquerCoisa = 'Exporta qualquer coisa';

// console.log(module.exports)

// module.exports = {
//   nome,
// }

class Pessoa{
  constructor(nome){
    this.nome = nome;
  }
}

exports.Pessoa = Pessoa;
