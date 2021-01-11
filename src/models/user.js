const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

let rolesValidos = {
    values: ["Secretario", "Chofer", "Mecanico"],
    message: '{VALUE} no es un rol válido'
}

const UserSchema = new Schema({
    rut: {
        type: String,
        required: [true, 'El Rut es OBLIGATORIO.']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es OBLIGATORIA.']
    },
    oficio: String
})

module.exports = mongoose.model('user', UserSchema);