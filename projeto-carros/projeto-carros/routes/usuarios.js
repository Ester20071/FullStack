const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');

// Página de cadastro
router.get('/cadastro', (req, res) => {
  res.render('cadastro', { mensagem: null });
});

// Cadastrar novo usuário (CREATE)
router.post('/cadastro', async (req, res) => {
  try {
    const { nome, login, senha } = req.body;
    const senhaCriptografada = await bcrypt.hash(senha, 10);
    const novoUsuario = new Usuario({ nome, login, senha: senhaCriptografada });
    await novoUsuario.save();
    res.render('cadastro', { mensagem: 'Usuário cadastrado com sucesso!' });
  } catch (err) {
    res.render('cadastro', { mensagem: 'Erro: Login já existe ou dados inválidos.' });
  }
});

// Página de login
router.get('/login', (req, res) => {
  res.render('login', { mensagem: null });
});

// Login (READ)
router.post('/login', async (req, res) => {
  try {
    const { login, senha } = req.body;
    const usuario = await Usuario.findOne({ login });
    if (!usuario) {
      return res.render('login', { mensagem: 'Usuário não encontrado.' });
    }
    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
    if (!senhaCorreta) {
      return res.render('login', { mensagem: 'Senha incorreta.' });
    }
    req.session.usuario = usuario;
    res.redirect('/carros');
  } catch (err) {
    res.render('login', { mensagem: 'Erro ao fazer login.' });
  }
});

// Logout
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
