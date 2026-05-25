//RENOMEAR ARQUIVO
//As AÇÕES do sistema
const express = require('express');
const router = express.Router();
//TROCAR  Trocar o nome da variável (const Carro → const Animal)
// TROCAR REQUIRE - exemplo ../models/Carro → ../models/Animal
const Carro = require('../models/Carro');

// Middleware - verifica se está logado
function verificarLogin(req, res, next) {
  if (req.session.usuario) {
    next();
  } else {
    res.redirect('/usuarios/login');
  }
}

// Listagem pública dos carros (READ)
router.get('/', async (req, res) => {
  //const Carro → const Animal
  const carros = await Carro.find();
  // Trocar todos os res.render('carros-...') → res.render('animais-...')
  res.render('carros-lista', { carros });
});

// Página de gerência (só logado)
router.get('/gerencia', verificarLogin, async (req, res) => {
  //TROCAR const Carro → const Animal
  const carros = await Carro.find();
  //  Trocar todos os res.render('carros-...') → res.render('animais-...')
  res.render('carros-gerencia', { carros, mensagem: null });
});

// Cadastrar novo carro (CREATE)
router.post('/cadastrar', verificarLogin, async (req, res) => {
  try {
    // req.body pega o que foi digitado no formulário
    // TROCAR PELOS MSM CAMPOS EM MODELS - trocar os campos no req.body do cadastrar
    const { marca, modelo, ano, qtde_disponivel } = req.body;
    // Cria um novo objeto com os dados:
    // TROCAR os campos no new Carro()  → new Animal() e tbm marca, modelo etc e tbm novoCarro -> novoAnimal por ex
    const novoCarro = new Carro({ marca, modelo, ano, qtde_disponivel });
    // Salva no banco
    //trocar novoCarro -> novoAnimal por exemplo
    await novoCarro.save();
    // Redireciona para a página de gerência
    //TROCAR todos os res.redirect('/carros/...') → /animais/...
    res.redirect('/carros/gerencia');
  } catch (err) {
    res.redirect('/carros/gerencia');
  }
});

// Remover carro (DELETE)
router.post('/remover/:id', verificarLogin, async (req, res) => {
  await Carro.findByIdAndDelete(req.params.id);
  //TROCAR todos os res.redirect('/carros/...') → /animais/...
  res.redirect('/carros/gerencia');
});

// Página de editar carro
router.get('/editar/:id', verificarLogin, async (req, res) => {
  //TROCAR const carro -> const animal
  //TROCAR Carro.findById para Animal.findById
  const carro = await Carro.findById(req.params.id);
  //trocar carro-editar para animal-editar por exemplo
  //trocar carro por animal
  res.render('carro-editar', { carro, mensagem: null });
});

// Atualizar carro (UPDATE)
router.post('/atualizar/:id', verificarLogin, async (req, res) => {
  //Trocar marca, modelo, ano...
  const { marca, modelo, ano, qtde_disponivel } = req.body;
  // Trocar os campos no .findByIdAndUpdate do atualizar Carro por Animal por ex.
  await Carro.findByIdAndUpdate(req.params.id, { marca, modelo, ano, qtde_disponivel });
  //Trocar todos os res.redirect('/carros/...') → /animais/...
  res.redirect('/carros/gerencia');
});

// Vender carro - decrementa quantidade (UPDATE)
router.post('/vender/:id', verificarLogin, async (req, res) => {
  //Trocar const carro
  //Trocar Carro.findById
  const carro = await Carro.findById(req.params.id);
  //troca carro por animal por exemplo
  if (carro && carro.qtde_disponivel > 0) {
    //troca carro por animal por exemplo nesses 2
    carro.qtde_disponivel -= 1;
    await carro.save();
  }
  //Trocar todos os res.redirect('/carros/...') → /animais/...
  res.redirect('/carros/gerencia');
});

module.exports = router;

//Se ao inves de vender quiser 'adotar' por exemplo
// SÓ TROCAR ESSA PARTE:
// router.post('/vender/:id', verificarLogin, async (req, res) => {
//E TBM Trocar no EJS views/animais-gerencia.ejs tem que apontar para a rota nova:
//<!-- ANTES -->
//<form action="/carros/vender/<%= carro._id %>" method="POST">
//  <button type="submit">Vender</button>
//</form>
//<!-- DEPOIS -->
//<form action="/animais/adotar/<%= animal._id %>" method="POST">
//  <button type="submit">Adotar</button>
//</form>