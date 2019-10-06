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
        const { email } = req.body;

        let user = await User.findOne({ email });
        //se ele encontrar um usuario com esse email. ele salva na variavel

        if(!user){
            user = await User.create({ email });
        }

        // const user = await User.create({ email });

        return res.json(user);
    }
});
//await só deixa prosseguir pra proxima linha quando realizar o cadastro no banco, para o await funcionar, precisa informar q a função é async