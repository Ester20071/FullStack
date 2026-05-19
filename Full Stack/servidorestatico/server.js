var express = require('express');
var app = express();

app.use(express.static('./public'));

app.get('/', function(req, resp) {
    resp.redirect('/projects.html');
});

app.listen(80, function() {
    console.log('Servidor rodando na porta 80');
});
