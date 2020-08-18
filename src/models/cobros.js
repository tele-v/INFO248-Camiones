const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CobroSchema = new Schema({
    nombre: String,
    monto: Number,
    descripcion: String
})

module.exports = mongoose.model('cobros', CobroSchema);