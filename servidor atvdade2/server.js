const express = require('express');
const path = require('path');
const app = express();

// Configurações
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Banco de dados simples em memória
const usuarios = [];

// Rota principal → página de projetos
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/Projects.html');
});

// Rota da página de cadastro
app.get('/cadastra', (req, res) => {
    res.sendFile(__dirname + '/public/Cadastro.html');
});

// Rota da página de login
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/Login.html');
});

// POST do cadastro
app.post('/cadastra', (req, res) => {
    const { nome, email, senha } = req.body;
    usuarios.push({ nome, email, senha });
    res.render('resposta', {
        status: 'Cadastro realizado!',
        mensagem: `Bem-vindo(a), ${nome}! Sua conta foi criada com sucesso.`,
        sucesso: true
    });
});

// POST do login
app.post('/login', (req, res) => {
    const { email, senha } = req.body;
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);

    if (usuario) {
        res.render('resposta', {
            status: 'Login bem-sucedido!',
            mensagem: `Olá, ${usuario.nome}! Você está logado.`,
            sucesso: true
        });
    } else {
        res.render('resposta', {
            status: 'Falha no login',
            mensagem: 'E-mail ou senha incorretos.',
            sucesso: false
        });
    }
});

// Servidor na porta 80
app.listen(80, () => {
    console.log('Servidor rodando na porta 80');
});
