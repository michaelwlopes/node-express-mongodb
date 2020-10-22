exports.paginaInicial = (req,res) => {
  req.session.usuario = { Nome: 'Michael', Idade: 30, Logado: true}
  res.render('index');
  return;
};

exports.trataPost = (req, res) =>{
  res.send('Requisição recebida com sucesso');
  return;
}
