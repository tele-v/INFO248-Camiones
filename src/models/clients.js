const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    nombre: String,
    RUT: String,
    giro: String,
    replegal: String,
    rutreplegal: String,
    correo: String,
    telefono: String,
    direccion: String,
})

module.exports = mongoose.model('client', ClientSchema);