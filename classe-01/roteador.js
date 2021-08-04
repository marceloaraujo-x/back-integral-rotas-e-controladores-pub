const express = require('express');
const { consultarLista: imvoveis, consultarUmImovel: imovel } = require('./controladores/imoveis');
const roteador = express();

roteador.get('/imoveis', imvoveis)
roteador.get('/imoveis/:id', imovel)

module.exports = roteador;

