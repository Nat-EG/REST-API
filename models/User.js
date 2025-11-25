const mongoose = require('mongoose');

//Definición del esquema de usuario
const UserSchema = new mongoose.Schema({
    idUsuario: { type: Number, 
    unique: [true, 'El idUsuario debe ser único'], 
    required: [true, 'El idUsuario es obligatorio'] },
    nombres: { type: String, required: true },
    apellidos: { type: String, required: true },
    telefono: { type: String, required: true },//
    fechaNacimiento: { type: Date, required: true },
    email: { type: String, required: true, unique: true },
    contrasena: { type: String, required: true }

}, {collection: 'usuarios', versionKey: false });

module.exports = mongoose.model('User', UserSchema);