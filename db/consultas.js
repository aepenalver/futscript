require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT,
  allowExitOnIdle: true,
});

const getUsers = async () => {
  const { rows: usuarios } = await pool.query('SELECT * FROM usuarios');
  return usuarios;
};

const getTeams = async () => {
  const { rows: equipos } = await pool.query('SELECT * FROM equipos');
  return equipos;
};

const getPlayers = async (teamID) => {
  const query =
    'SELECT j.name, p.name AS posicion FROM jugadores AS j LEFT JOIN equipos AS e ON j.id_equipo = e.id LEFT JOIN posiciones AS p ON j.position = p.id WHERE j.id_equipo = $1';
  const { rows: jugadores } = await pool.query(query, [teamID]);
  return jugadores;
};

const addUser = async (user) => {
  const { username, password } = user;
  const query = 'INSERT INTO usuarios (username, password) VALUES ($1, $2)';
  const values = [username, password];
  await pool.query(query, values);
};

const addTeam = async (equipo) => {
  const { name } = equipo;
  const query = 'INSERT INTO equipos (name) VALUES ($1)';
  await pool.query(query, [name]);
};

const addPlayer = async ({ jugador, teamID }) => {
  const { name, position } = jugador;
  const query =
    'INSERT INTO jugadores (id_equipo, name, position) VALUES ($1, $2, $3)';
  const values = [teamID, name, position];
  await pool.query(query, values);
};

module.exports = {
  pool,
  getTeams,
  addTeam,
  getPlayers,
  addPlayer,
  getUsers,
  addUser,
};
