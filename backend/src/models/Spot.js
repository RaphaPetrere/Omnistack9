const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail : String,
    company : String,
    price : Number,
    techs : [String],
    user : {
        type : mongoose.Schema.Types.ObjectId, //É um tipo de objeto q é o _id inteiro q aparece no Insomnia
        ref : 'User' //Referencia a qual model ta sendo utilizado, o User
    }
});
//esquema, quais campos, q tipo de campos

module.exports = mongoose.model('Spot', SpotSchema);
//Mongo agr sabe q usuario só tem 1 campo q é email