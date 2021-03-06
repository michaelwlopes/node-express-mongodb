const express = require('express');
const app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://basedeDados:<senha>@cluster0.yopy6.mongodb.net/meudb?retryWrites=true&w=majority',{
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(()=>{
  console.log('Conectando a base de dados');
  app.emit('pronto');
}).catch(e => console.log(e));

const routes = require('./routes');
const path = require('path');
const middleware = require('./src/middlewares/middlewares');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve( __dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(middleware);
app.use(routes);

app.on('pronto', () => {
  app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor Execultado na porta 3000');
  });
})
