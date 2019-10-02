//Tudo referente a Sessão, vai vir aqui, login, logout e bla bla bla

//Dentro do controller tem os seguintes metodos : Index, show, store, update, destroy
//Index() retorna uma listagem de sessões
//Show() retorna uma unica sessão
//Store() cria sessão
//Update() altera sessão
//Destroy() destrói sessão

const User = require('../models/User');

module.exports = ({
    async store(req, res){
        const email = req.body.email;
        //ou const { email } = req.body; q é um recurso do JS chamado desestruturação, deixa + bonito o código

        let user = await User.findOne({ email }) //ou { email : email } mas como a var tem o msm nome do valor, então deixa assim
        
        if(!user){
            user = await User.create({ email }) //passamos a variavel que queremos criar
        }

        return res.json(user);
    }
});

//await só deixa prosseguir pra proxima linha quando realizar o cadastro no banco, para o await funcionar, precisa informar q a função é async