const express = require('express');
const { consultarUmAluno, inserirAluno, consultarAlunos, excluirAluno } = require('./controladores/alunos');

const roteador = express();

roteador.get('/alunos', consultarAlunos);
roteador.get('/alunos/:id', consultarUmAluno);
roteador.post('/alunos', inserirAluno);
roteador.delete('/alunos/:id', excluirAluno);

module.exports = roteador;
