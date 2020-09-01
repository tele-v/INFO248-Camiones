const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const CamionSchema = new Schema({
    patente: String,
    disponibilidad: Boolean
})

module.exports = mongoose.model('camiones', CamionSchema);