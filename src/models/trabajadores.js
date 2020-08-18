const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const TrabajadorSchema = new Schema({
    rut: String,
    nombre: String,
    tipotrabajador: String,
    fnac: Date,
    region: String,
    comuna: String,
    direccion: String,
    celular: Number,
    email: String,
    patente: String,
    sueldo: Number,
    fingr: Date,
    venclc: Date,
    afp: String,
    prevision: String,
    banco: String,
    tipo: String,
    nrocuenta: Number,
    doclicencia: Object,
    doccarnet: Object,
    doccontrato: Object

 
})

module.exports = mongoose.model('trabajadores', TrabajadorSchema);