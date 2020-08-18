const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const BancoSchema = new Schema({
    rut: String,
    nombre: String,
    direccion: String,
    representante: String,
    celular: Number,
    email: String
 
})

module.exports = mongoose.model('bancos', BancoSchema);