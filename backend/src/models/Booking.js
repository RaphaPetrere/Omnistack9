const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date : String,
    approved : Boolean,
    user : {
        type : mongoose.Schema.Types.ObjectId, //É um tipo de objeto q é o _id inteiro q aparece no Insomnia
        ref : 'User' //Referencia a qual model ta sendo utilizado, o User
    },
    spot : {
        type : mongoose.Schema.Types.ObjectId, //É um tipo de objeto q é o _id inteiro q aparece no Insomnia
        ref : 'Spot' //cria um relacionamento; Referencia a qual model ta sendo utilizado, o Spot
    }
});
//esquema, quais campos, q tipo de campos

module.exports = mongoose.model('Booking', BookingSchema);
//Mongo agr sabe q usuario só tem 1 campo q é email