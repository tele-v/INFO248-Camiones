const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const RamplaSchema = new Schema({
    patente: String,
    marca: String,
    tipo: String,
    ano: Number,
    config: String,
    largo: Number,
    capacidad: Number,
    cias: Array,
    poliza: String,
    vencseg: Date,
    vencrt: Date,
    docseguro: Object,
    docrevision: Object,
    docpc: Object,
    docpadron: Object   
})

module.exports = mongoose.model('ramplas', RamplaSchema);