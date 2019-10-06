const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email : String,
});
//esquema, quais campos, q tipo de campos

module.exports = mongoose.model('User', UserSchema);
//Mongo agr sabe q usuario só tem 1 campo q é email