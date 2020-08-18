const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const ClienteSchema = new Schema({
    rut: String,
    nombre: String,
    giro: String,
    region: String,
    comuna: String,
    direccion: String,
    representante: String,
    email: String,
    celular: Number
 
})

module.exports = mongoose.model('clientes', ClienteSchema);