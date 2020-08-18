const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const SeguroSchema = new Schema({
    rut: String,
    nombre: String,
    direccion: String,
    representante: String,
    celular: Number,
    email: String
 
})

module.exports = mongoose.model('seguros', SeguroSchema);