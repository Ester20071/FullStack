//  configura o servidor (porta, conexão com banco)
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const path = require('path');

const app = express();

// Conexão com o MongoDB - TROCAR pelo nome que quiser o concessionaria -> petshop --- nao implica em nada
mongoose.connect('mongodb+srv://ester:senha123@cluster0.vkwsusp.mongodb.net/concessionaria')
  .then(() => console.log('Conectado ao MongoDB!'))
  .catch(err => console.log('Erro ao conectar:', err));

// Configurações
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'segredo123',
  resave: false,
  saveUninitialized: false
}));

// Rotas
//TROCAR o require da rota (./routes/carros → ./routes/animais)
const usuariosRouter = require('./routes/usuarios');
//TROCAR o nome da variável (carrosRouter → animaisRouter)
const carrosRouter = require('./routes/carros');

app.use('/usuarios', usuariosRouter);
//Trocar o caminho da rota (/carros → /animais) e carrosRouter para animaisRouter
app.use('/carros', carrosRouter);

// Rota padrão -> página de projetos
app.get('/', (req, res) => {
  res.render('projects');
});

// Porta 80
app.listen(80, () => {
  console.log('Servidor rodando na porta 80');
});
