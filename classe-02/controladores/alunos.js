
const alunos = require('../dados/alunos');

let proximoIdCriado = 1;

function consultarAlunos(req, res) {
    res.status(200);
    res.json(alunos);
}

function consultarUmAluno(req, res) {
    const consulta = alunos.find(aluno => aluno.id === Number(req.params.id));
    if (consulta) {
        res.json(consulta)
    } else if (Number(req.params.id)) {
        res.status(404);
        res.json({ 'mensgaem': 'Não foi encontrado aluno para o ID informado' });
    } else {
        res.status(400);
        res.json({ 'mensgaem': 'O ID deve ser um número válido' })
        return;
    }
}

function inserirAluno(req, res) {
    if (!req.body.nome.trim()) {
        res.status(400)
        res.json({ 'mensagem': 'O campo "nome" é obrigatório ser preenchido corretamente' });
        return;
    }

    else if (!req.body.sobrenome.trim()) {
        res.status(400)
        res.json({ 'mensagem': 'O campo "sobrenome" é obrigatório ser preenchido corretamente' });
        return;
    }

    else if (!req.body.idade) {
        res.status(400)
        res.json({ 'mensagem': 'O campo "idade" é obrigatório' });
        return;
    }

    else if (!req.body.curso.trim()) {
        res.status(400)
        res.json({ 'mensagem': 'O campo "curso" é obrigatório ser preenchido corretamente' });
        return;
    }

    else if (typeof req.body.nome !== 'string') {
        res.status(400)
        res.json({ 'mensagem': 'O campo "nome" deve ser preenchido com um texto' });
        return;
    }

    else if (typeof req.body.sobrenome !== 'string') {
        res.status(400)
        res.json({ 'mensagem': 'O campo "sobrenome" deve ser preenchido com um texto' });
        return;
    }

    else if (typeof req.body.curso !== 'string') {
        res.status(400)
        res.json({ 'mensagem': 'O campo "curso" deve ser preenchido com um texto' });
        return;
    }

    else if (req.body.idade < 18) {
        res.status(400);
        res.json({ 'mensagem': 'O aluno deve ser maior de idade' });
        return;
    }

    else {
        res.status(201);
        return;
    }
    const novoAluno = {
        id: idProximoAlunoCriado,
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        idade: req.body.idade,
        curso: req.body.curso
    }

    proximoIdCriado++;
    alunos.push(novoAluno);

    res.status(201).send();
}

function excluirAluno(req, res) {
    const idAlunoExclusao = Number(req.params.id);

    if (isNaN(idAlunoExclusao)) {
        res.status(400).json({ mensagem: "O id informado não é um número válido." });
        return;
    }

    const indiceAlunoExclusao = alunos.findIndex(aluno => aluno.id === idAlunoExclusao);
    let alunoExcluido;

    if (indiceAlunoExclusao < 0) {
        res.status(404).json({ mensagem: "Aluno a ser excluído não encontrado." })
    }
    else {
        alunoExcluido = alunos.splice(indiceAlunoExclusao, 1)[0];
    }

    res.json(alunoExcluido);
}


module.exports = { consultarAlunos, consultarUmAluno, inserirAluno, excluirAluno }