const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CobroSchema = new Schema({
    nombre: String,
    monto: Number,
    descripcion: String,
    pendiente: Boolean
})

module.exports = mongoose.model('cobros', CobroSchema);