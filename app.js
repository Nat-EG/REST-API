//Se inicia el express para iniciar el servidor
const express = require('express');
const app = express();
const mongoose = require('mongoose');

//Para que el servidor entienda JSON
app.use(express.json()); 

//Endpoint básico. Funcion callback: request (peticion), response (respuesta)
//Se crean las rutas
app.get('/', (req, res) => {
    res.send('Prueba 1 respuesta del servidor'); 
});

//Conexión con la BD MongoDB
require('dotenv').config();
mongoose.connect(process.env.URI)
    .then(() => console.log('Conectado a la base de datos'))
    .catch(e=> console.log('Error de conexión a la base de datos:', e));

//Se define el puerto que escuchará las peticiones
app.listen (10000);