const mongoose = require('mongoose');
const viajes = require('./shipments');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    origen: String,
    destino: String,
    datosDestinatario: String/*,
    viajeAsociado: viajes*/
})

module.exports = mongoose.model('orders', OrderSchema);