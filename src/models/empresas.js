const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const EmpresaSchema = new Schema({
    rut: String,
    nombre: String,
    giro: String,
    representante: String,
    region: String,
    comuna: String,
    direccion: String,
    celular: Number,
    email: String,
    banco: String,
    tipo: String,
    nrocuenta: Number

 
})

module.exports = mongoose.model('empresas', EmpresaSchema);