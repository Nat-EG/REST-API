const User = require('../models/User');


exports.usuarios = async (req, res) => {
    try {
        const users = await User.find({}); // Obtener todos los usuarios
        res.json(users);
    } catch (error) {
        res.json({ message: error}); // Manejo de errores
    }
};

exports.usuarioPorId = async (req, res) => {
    try {
        const user = await User.findOne({"idUsuario": req.params.id}); // Buscar usuario por ID
        res.json(user);
    } catch (error) {
        res.json({ message: 'Usuario no encontrado' }); // Manejo de errores
    }
};

exports.crearUsuario = async (req, res) => {
    const user = new User(req.body);
    try {
        const savedUser = await user.save(); // Guardar el usuario en la base de datos
        res.json(savedUser);
    } catch (error) {
        res.json({ message: error}); // Manejo de errores
    }
};

exports.actualizarUsuario = async (req, res) => {
    try {
        const updatedUser = await User.updateOne(
            { _id: req.params.id },// Filtro por ID
            { $set: req.body }); // Actualizar con los datos del cuerpo de la petición
        res.json(updatedUser);
    } catch (error) {
        res.json({ message: error}); // Manejo de errores
    }
};

exports.eliminarUsuario = async (req, res) => {
    try {
        const removedUser = await User.deleteOne({ _id: req.params.id }); // Eliminar usuario por ID
        res.json(removedUser);
    } catch (error) {
        res.json({ message: error}); // Manejo de errores
    } 
};

