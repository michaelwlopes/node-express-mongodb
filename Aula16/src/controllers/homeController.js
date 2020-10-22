exports.paginaInicial = (req,res) => {
  res.render('index', {
    titulo: 'Agrupamento para defesa abstrata de princípios e elevação positiva de alguns cidadãos.'

  });
  return;
};

exports.trataPost = (req, res) =>{
  res.send('Requisição recebida com sucesso');
  return;
}
