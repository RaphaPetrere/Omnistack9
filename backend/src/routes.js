const express = require('express');
const SessionController = require('./controllers/SessionController');
const routes = express.Router(); //ta pegando o roteador do express e separando numa variavel

routes.post('/sessions', SessionController.store);

module.exports = routes; //ta exportando pro arquivo entender q isso existe

//1° rota q faremos é o login do usuario no web (39:10)
//Aos 47 ele mexe no Insomnia para setar o caminho numa variavel, assim não precisa digitar toda a linha todas as vezes