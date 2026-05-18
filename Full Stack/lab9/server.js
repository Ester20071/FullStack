const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

let posts;

async function conectar() {
    await client.connect();
    const dbo = client.db('blog_db');
    posts = dbo.collection('posts');
    console.log('Conectado ao MongoDB!');
}

conectar();

app.get('/', function(req, resp) {
    resp.sendFile(__dirname + '/public/projects.html');
});

app.get('/blog', async function(req, resp) {
    try {
        const items = await posts.find().toArray();
        resp.render('blog', { listaPosts: items });
    } catch(err) {
        console.log(err);
        resp.render('blog', { listaPosts: [] });
    }
});

app.get('/cadastrar_post', function(req, resp) {
    resp.sendFile(__dirname + '/public/cadastrar_post.html');
});

app.post('/cadastrar_post', async function(req, resp) {
    try {
        var data = {
            titulo: req.body.titulo,
            resumo: req.body.resumo,
            conteudo: req.body.conteudo
        };
        await posts.insertOne(data);
        resp.redirect('/blog');
    } catch(err) {
        console.log(err);
        resp.send('Erro ao cadastrar post!');
    }
});

app.listen(80, function() {
    console.log('Servidor rodando na porta 80');
});