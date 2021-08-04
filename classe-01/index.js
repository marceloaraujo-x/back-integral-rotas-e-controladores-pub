const express = require('express');
const roteador = require('./roteador');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    return req.url.includes("/imoveis") ? next() : res.json({ "mensagem": "A url infomada é inválida" });
})

app.use(roteador);


app.listen(8000);