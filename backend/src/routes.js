const express = require('express');

const routes = express.Router(); //ta pegando o roteador do express e separando numa variavel

routes.post('/users', (req,res) => {
    return res.json(req.body);
});

module.exports = routes; //ta exportando pro arquivo entender q isso existe

//1° rota q faremos é o login do usuario no web (39:10)