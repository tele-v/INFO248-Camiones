const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const TruckSchema = new Schema({
    patente: String,
    tara: String,
    marca: String,
    modelo: String,
    ndeserie: String,
    disponibilidad: Boolean
})

module.exports = mongoose.model('trucks', TruckSchema);