const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

const {
  obtenerJugadores,
  registrarJugador,
} = require('./controllers/jugadores');
const { obtenerEquipos, agregarEquipo } = require('./controllers/equipos');

app.get('/equipos', obtenerEquipos);
app.post('/equipos', agregarEquipo);

app.get('/equipos/:teamID/jugadores', obtenerJugadores);
app.post('/equipos/:teamID/jugadores', registrarJugador);

app.listen(PORT, console.log('SERVER ON'));
