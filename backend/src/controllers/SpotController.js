const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {

    async index(req, res){
        const { tech } = req.query;

        const spots = await Spot.find({ techs : tech });

        return res.json(spots);
        //listando os spots só da tecnologia  //techs é o campo de spots e o tech é o valor do Mongo. vai buscar a string tech dentro de todos os techs
    },  //vamos criar um filtro

    async store(req, res){
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if(!user){
            return res.status(400).json({ error : 'User does not exist'});
            //400 = requisição de usuario
        }

        const spot = await Spot.create({
            user : user_id,
            thumbnail : filename,
            company,
            techs : techs.split(',').map(tech => tech.trim()),
            price
        })

        return res.json(spot);
    }
};

//techs : techs.split(',').map(tech => tech.trim()), ele transforma a string num array e faz um map q vai percorrer toda a tech, a cada tech ele faz o trim