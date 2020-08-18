const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const ProveedorSchema = new Schema({
    rut: String,
    nombre: String,
    giro: String,
    region: String,
    comuna: String,
    direccion: String,
    representante: String,
    email: String,
    celular: Number,
    banco: String,
    tipo: String,
    nrocuenta: Number

 
})

module.exports = mongoose.model('proveedores', ProveedorSchema);