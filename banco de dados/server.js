const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Configurações
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Arquivo que funciona como banco de dados
const DB_PATH = path.join(__dirname, 'banco.json');

// Funções de acesso ao banco de dados
function lerBanco() {
    if (!fs.existsSync(DB_PATH)) {
        fs.writeFileSync(DB_PATH, JSON.stringify({ posts: [] }));
    }
    const dados = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(dados);
}

function salvarBanco(dados) {
    fs.writeFileSync(DB_PATH, JSON.stringify(dados, null, 2));
}

// Cadastrar um novo post no banco de dados
function cadastrarPost(titulo, resumo, conteudo) {
    const banco = lerBanco();
    const novoPost = {
        id: Date.now(),
        titulo,
        resumo,
        conteudo
    };
    banco.posts.push(novoPost);
    salvarBanco(banco);
}

// Buscar todos os posts no banco de dados
function buscarTodosPosts() {
    const banco = lerBanco();
    return banco.posts;
}

// Rota principal → página de projetos
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Projects.html'));
});

// Rota do blog (página dinâmica EJS)
app.get('/blog', (req, res) => {
    const posts = buscarTodosPosts();
    res.render('blog', { posts });
});

// Rota da página de cadastrar post
app.get('/cadastrar_post', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cadastrar_post.html'));
});

// POST - cadastrar novo post
app.post('/cadastrar_post', (req, res) => {
    const { titulo, resumo, conteudo } = req.body;
    cadastrarPost(titulo, resumo, conteudo);
    res.redirect('/blog');
});

// Servidor na porta 80
app.listen(80, () => {
    console.log('Servidor rodando na porta 80');
});
