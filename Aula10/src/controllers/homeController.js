exports.paginaInicial = (req,res) => {
  res.render('index');
};

exports.trataPost = (req, res) =>{
  res.send('Requisição recebida com sucesso');
}