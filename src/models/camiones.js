const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const CamionSchema = new Schema({
    patente: String,
    marca: String,
    modelo: String,
    color: String,
    ano: Number,
    config: Array,
    km: Number,
    cias: Array,
    poliza: String,
    vencseg: Date,
    vencrt: Date,
    docrevision: Object,
    docpc: Object,
    docpadron: Object   
})

module.exports = mongoose.model('camiones', CamionSchema);