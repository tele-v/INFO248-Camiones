const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const RamplaSchema = new Schema({
    patente: String,
    marca: String,
    disponibilidad : Boolean
})

module.exports = mongoose.model('ramplas', RamplaSchema);