const express = require('express');
const router = express.Router();
const User = require('../models/User');
const userController = require('../controller/user.controller.js');

// CREAR un nuevo usuario (Registro)
router.post('/', userController.crearUsuario);

// CONSULTAR todos
router.get('/', userController.usuarios);

// CONSULTAR un usuario por ID
router.get('/:id', userController.usuarioPorId);

// ACTUALIZAR un usuario por ID
router.patch('/:id', userController.actualizarUsuario);

// ELIMINAR un usuario por ID
router.delete('/:id', userController.eliminarUsuario);

module.exports = router;