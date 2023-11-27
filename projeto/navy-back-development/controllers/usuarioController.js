const express = require('express');
const usuarioService = require('../service/usuarioService');

const usuarioController = express.Router();

usuarioController.get('/listar-usuarios', async function (req, res, next) {
    let usuarios = await usuarioService.listarUsuarios();
    res.json(usuarios);
});

usuarioController.post('/', async function (req, res, next) {
    const userResponse = await usuarioService.adicionar(req.body.email, req.body.password);
    res.json(userResponse);
});

usuarioController.post('/login', async function (req, res, next) {
    const userResponse = await usuarioService.login(req.body.email, req.body.password);
    res.json(userResponse);
});

module.exports = usuarioController;