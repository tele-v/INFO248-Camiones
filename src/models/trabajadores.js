const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const TrabajadorSchema = new Schema({
    nombre: String,
    contraseña: String
})

module.exports = mongoose.model('trabajadores', TrabajadorSchema);