const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const ChasisSchema = new Schema({
    patente: String,
    tara: String,
    marca: String,
    modelo: String,
    ndeserie: String,
    disponibilidad: Boolean
})

module.exports = mongoose.model('chasis', ChasisSchema);