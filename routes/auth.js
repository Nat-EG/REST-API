const express = require('express');
const router = express.Router();
const User = require('../models/User');

//Registro
router.post('/register', async (req, res) => {
    try {
        const user = new User(req.body);// Crear una nueva instancia del modelo User con los datos del cuerpo de la petición
        const saved = await user.save();// Guardar el usuario en la base de datos
        res.json(saved);// Responder con el usuario guardado
    } catch (error) {
        res.json({ message: error.message });// Manejo de errores
    }
});

//Login
router.post('/login', async (req, res) => {
    const { email, contrasena } = req.body;// Extraer email y contraseña del cuerpo de la petición
    try {
        const user = await User.findOne({ email, contrasena });// Buscar un usuario que coincida con el email y la contraseña proporcionados
        if (!user) return res.json({ message: 'Usuario no encontrado' });// Si no se encuentra el usuario, responder con un error

        res.json({message: 'Login exitoso', user});// Responder con mensaje de exito
    } catch (error) {
        res.json({ message: error.message });// Manejo de errores
    }
});
module.exports = router;