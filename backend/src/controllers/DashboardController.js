const Spot = require('../models/Spot');

module.exports = {
    async show(req,res){
        const { user_id } = req.headers;

        const spots = await Spot.find({ user : user_id }); //ele ta buscando todos os Spots em q o user for igual ao user_id

        return res.json(spots)
    }
}