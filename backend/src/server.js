const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes'); //importando com o caminho, senão ele procura um modulo chamado routes      ele ja entende q é .js
const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-qmzyj.mongodb.net/omnistack?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}); //esses 2 comandos são necessários pra não ficar dando um erro la e o Mongo usar novo formato de URL, o parser
//mongodb+srv://OmniStack:OmniStack@omnistack-qmzyj.mongodb.net/test?retryWrites=true&w=majority

app.use(cors()); //vc pode setar app.use(cors({ 'http://localhost:3333 })) para só esse endereço acessar, mas n é util agr
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads'))); //forma q o express usa pra retornar arquivos estaticos
app.use(routes);

app.listen(3333); //acessa a aplicação pelo localhost:3333


/****************************************************Area de Comentario************************************************************************************* */
/*
    express é um framework pra gente n sofrer tanto
    express é sequencial, então o routes vem dps do express.json()


    app.post('/users', (req,res) => {
        return res.json(req.body);
    }); 1º param = Rota no caso da / é quando entra na URL normal
    
    req é a requisição, oq o usuario enviar (tipo qtd de produtos num carrinho)
    res devolve a resposta pra requisiçao            o tipo send retorna um texto

    req.query para acessar os query param (para filtros)
    req.params para acessar route params (para edição e delete)
    req.body para acessar corpo da requisição (criação / edição de registros)       retorna ele por completo pq ele ja é um objeto
    app.use(express.json()); <--- sem isso aqui o req.body não funciona, o express não entende uma requisição q vem no formato de JSON

    isso q colocamos /users/:id é o router param, vc pega um objeto especifico, nesse caso ("http://localhost:3333/users/1"), com o id 1

    Não usaremos .send pq tanto pro back quanto pro front interpretarem, tem q ser uma Estrutura de Dados por isso usarem JSON


    why app.get? Para pegar uma informação do backend, tipo listagem de usuario
    .post você quer criar uma nova informação no backend  o .post não segue o mesmo jeito do get com '/' e tals 
    .put vc quer editar uma informação
    .delete é óbvio 
    famoso CRUD

    usaremos o Insomnia pq rotas do tipo POST não são executaveis pelo navegador, vai da Cannot GET / pq por padrão o navegador ele sempre executa um método GET
    ai o Insomnia proporciona isso

    JSON stands for JavaScript Object Notation
    JSON só aceita objetos e arrays, por isso a propriedade Message para mostrar um texto

    o Node não atualiza automaticamente, logo vc precisa desligar o servidor e religar
    Ctrl + C para o servidor
    agr, se quiser q ele atualize automaticamente, faz "yarn add nodemon -D" -D faz com que só use o nodemon enquanto esta desenvolvendo o projeto
    ai vc coloca "yarn dev" pra iniciar o servidor com ele ouvindo as alterações

    yarn add mongoose => ele facilita a manipulação de dados com o MongoDB (34:40)

    em caso de authetication failed, pode ser ou a versão la no Mongo ou vc errou o usuario/senha no access, ou se o ip no network access não conectou
    ou o proxy não deixa vc acessar msm

*/