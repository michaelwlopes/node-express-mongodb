const express = require('express');
const app = express();

app.use(
  express.urlencoded(
    {
      extended: true
    }
  )
);
app.get('/', (req, res) => { 
  res.send(`
  <form action="/" method="POST">
  Nome: <input type="text" name="nome">
  <button>Enviar</button>
  </form>
  `);
});

// Route params recebe os dados da requisição na rota, é a melhor maneira para buscar algo, 
// deletar ou atualizaR.
app.get('/testes/:id', (req, res)=>{
  console.log(req.params);
  res.send(req.params.id);
});


// Query params recebe os dados da requisição como parâmetro na URL
app.get('/testes/:idUsuario?/:parametro', (req, res)=>{
  console.log(req.query);
  res.send(req.query);
});

// Body Params recebe os dados da requisição no corpo da requisição, em um objeto em JSON. 
// Sempre utilizando no método POST da requisição.
app.post('/', (req,res)=> {
  console.log(req.body);
  res.send(`${req.body.nome}`);

})


app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor Execultado na porta 3000');
});