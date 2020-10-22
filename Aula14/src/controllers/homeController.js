const HomeModel = require("../models/homeModel");

HomeModel.create({
  titulo: 'Titulo do livro',
  descricao: 'Descrição do livro.'
}).then(dados => console.log(dados))
  .catch(e => console.log(e));

exports.paginaInicial = (req,res) => {
  res.render('index');
};

exports.trataPost = (req, res) =>{
  res.send('Requisição recebida com sucesso');
}