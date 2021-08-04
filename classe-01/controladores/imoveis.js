const imoveis = require('../dados/imoveis')

function consultarLista(req, res) {
    res.json(imoveis);
}

function consultarUmImovel(req, res) {
    const consulta = imoveis.find(imovel => String(imovel.id) === req.params.id);
    if (consulta) {
        res.json(consulta)
    } else if (Number(req.params.id)) {
        res.status(404);
        res.json({ 'mensagem': 'Não existe imóvel para o Id informado' })
    } else {
        res.status(404);
        res.json({ 'mensagem': 'O id informado não é válido' })
    }
}

module.exports = { consultarLista, consultarUmImovel }