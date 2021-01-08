const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const WorkerSchema = new Schema({
    nombre: String,
    apellidos: String,
    RUT: String,
    correo: String,
    ndetelefono: String,
    direccion: String
})

module.exports = mongoose.model('workers', WorkerSchema);