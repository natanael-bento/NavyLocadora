const express = require('express');
const localizacaoService = require('../service/localizacaoService');

const localizacaoController = express.Router();

localizacaoController.get('/top-dez-proximo', async function (req, res, next) {
    console.log(req.query)
    let listaLocalizacao = await localizacaoService.obterTop10Proximo();
    res.json(listaLocalizacao);
});

module.exports = localizacaoController;