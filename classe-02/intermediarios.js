function verificacaoDeSenha(req, res, next) {
    return req.query.senha === 'cubos123' ? next() : res.status(401) && res.json({ 'mensagem': 'A senha informada está incorreta' });
}

module.exports = verificacaoDeSenha;