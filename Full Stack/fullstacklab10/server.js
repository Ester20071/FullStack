const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

let usuarios;
let carros;

async function conectar() {
    await client.connect();
    const dbo = client.db('concessionaria_db');
    usuarios = dbo.collection('usuarios');
    carros = dbo.collection('carros');
    console.log('Conectado ao MongoDB!');
}

conectar();

// Rota padrão -> projetos
app.get('/', function(req, resp) {
    resp.sendFile(__dirname + '/public/projects.html');
});

// ========== USUARIOS ==========

// Página de cadastro de usuário
app.get('/cadastrar_usuario', function(req, resp) {
    resp.sendFile(__dirname + '/public/cadastrar_usuario.html');
});

app.post('/cadastrar_usuario', async function(req, resp) {
    try {
        var data = {
            nome: req.body.nome,
            login: req.body.login,
            senha: req.body.senha
        };
        await usuarios.insertOne(data);
        resp.redirect('/login');
    } catch(err) {
        console.log(err);
        resp.send('Erro ao cadastrar usuário!');
    }
});

// Página de login
app.get('/login', function(req, resp) {
    resp.sendFile(__dirname + '/public/login.html');
});

app.post('/login', async function(req, resp) {
    try {
        var data = { login: req.body.login, senha: req.body.senha };
        const items = await usuarios.find(data).toArray();
        if (items.length == 0) {
            resp.send('Usuário/senha não encontrado! <a href="/login">Voltar</a>');
        } else {
            resp.redirect('/carros');
        }
    } catch(err) {
        console.log(err);
        resp.send('Erro ao logar!');
    }
});

// ========== CARROS ==========

// Listagem de carros
app.get('/carros', async function(req, resp) {
    try {
        const items = await carros.find().toArray();
        resp.render('carros', { listaCarros: items });
    } catch(err) {
        console.log(err);
        resp.render('carros', { listaCarros: [] });
    }
});

// Página de gerência dos carros
app.get('/gerenciar_carros', async function(req, resp) {
    try {
        const items = await carros.find().toArray();
        resp.render('gerenciar_carros', { listaCarros: items });
    } catch(err) {
        console.log(err);
        resp.render('gerenciar_carros', { listaCarros: [] });
    }
});

// Cadastrar carro
app.post('/cadastrar_carro', async function(req, resp) {
    try {
        var data = {
            marca: req.body.marca,
            modelo: req.body.modelo,
            ano: req.body.ano,
            qtde_disponivel: parseInt(req.body.qtde_disponivel)
        };
        await carros.insertOne(data);
        resp.redirect('/gerenciar_carros');
    } catch(err) {
        console.log(err);
        resp.send('Erro ao cadastrar carro!');
    }
});

// Remover carro
app.post('/remover_carro', async function(req, resp) {
    try {
        var id = new ObjectId(req.body.id);
        await carros.deleteOne({ _id: id });
        resp.redirect('/gerenciar_carros');
    } catch(err) {
        console.log(err);
        resp.send('Erro ao remover carro!');
    }
});

// Atualizar carro
app.post('/atualizar_carro', async function(req, resp) {
    try {
        var id = new ObjectId(req.body.id);
        var newData = { $set: {
            marca: req.body.marca,
            modelo: req.body.modelo,
            ano: req.body.ano,
            qtde_disponivel: parseInt(req.body.qtde_disponivel)
        }};
        await carros.updateOne({ _id: id }, newData);
        resp.redirect('/gerenciar_carros');
    } catch(err) {
        console.log(err);
        resp.send('Erro ao atualizar carro!');
    }
});

// Vender carro (decrementa quantidade)
app.post('/vender_carro', async function(req, resp) {
    try {
        var id = new ObjectId(req.body.id);
        const carro = await carros.findOne({ _id: id });
        if (carro.qtde_disponivel > 0) {
            await carros.updateOne({ _id: id }, { $inc: { qtde_disponivel: -1 } });
        }
        resp.redirect('/gerenciar_carros');
    } catch(err) {
        console.log(err);
        resp.send('Erro ao vender carro!');
    }
});

app.listen(80, function() {
    console.log('Servidor rodando na porta 80');
});
