const express = require('express');
require('dotenv').config();
const {
  obtenerJugadores,
  registrarJugador,
} = require('./controllers/jugadores');

const { obtenerEquipos, agregarEquipo } = require('./controllers/equipos');
const { obtenerUsuarios, agregarUsuario } = require('./controllers/usuarios');
const login = require('./controllers/login');
const { tokenValidation } = require('./utils');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.post('/login', login);

app.get('/usuarios', obtenerUsuarios);
app.post('/usuarios', agregarUsuario);

app.get('/equipos', obtenerEquipos);
app.post('/equipos', tokenValidation, agregarEquipo);

app.get('/equipos/:teamID/jugadores', obtenerJugadores);
app.post('/equipos/:teamID/jugadores', tokenValidation, registrarJugador);

app.listen(PORT, console.log('SERVER ON'));
