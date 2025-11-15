//Se inicia el express para iniciar el servidor
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

//Para que el servidor entienda JSON
app.use(express.json()); 

//Conexión con la BD MongoDB
mongoose.connect(process.env.URI)
    .then(() => console.log('Conectado a MongoDB'))
    .catch(e=> console.log('Error de conexión a MongoDB:', e));

mongoose.connection.on('connected', () => {
  console.log('✔ Conectado a la base de datos:', mongoose.connection.db.databaseName);
});

//Endpoint básico. Funcion callback: request (peticion), response (respuesta)
//Ruta de prueba
app.get('/', (req, res) => {
    res.send('Prueba 1 respuesta del servidor'); 
});

//Rutas
app.use('/api/usuarios', require('./routes/user'));
app.use('/api/auth', require('./routes/auth'));





//Se define el puerto que escuchará las peticiones
app.listen (10000);