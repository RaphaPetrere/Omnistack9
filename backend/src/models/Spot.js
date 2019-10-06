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
},{
    toJSON: { //toda vez q um spot for convertido pra JSON, ele calcula os virtuals automaticamente
        virtuals: true,
    },
});
//esquema, quais campos, q tipo de campos
SpotSchema.virtual('thumbnail_url').get(function(){
    return `http://192.168.1.65:3333/files/${this.thumbnail}`
});

module.exports = mongoose.model('Spot', SpotSchema);
//Mongo agr sabe q usuario só tem 1 campo q é email