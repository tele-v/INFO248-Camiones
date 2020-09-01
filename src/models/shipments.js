const mongoose = require('mongoose');
const camiones = require('./camiones');
const trabajadores = require ('./trabajadores');
const Schema = mongoose.Schema;

const ViajesSchema = new Schema({
    origen: String,
    destino: String/*,
    camion: camiones,
    chofer: trabajadores*/
})

module.exports = mongoose.model('shipments', ViajesSchema);