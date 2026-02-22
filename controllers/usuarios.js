const { addUser, getUsers } = require('../db/consultas');
const bcrypt = require('bcrypt');

const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await getUsers();
    res.json(usuarios);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ message: 'Error al obtener la lista de usuarios' });
  }
};

const agregarUsuario = async (req, res) => {
  try {
    const { username, password } = req.body;
    const passwordHash = bcrypt.hashSync(password, 10);
    await addUser({ username, password: passwordHash });
    res.status(201).send({ message: 'Usuario agregado con éxito' });
  } catch (error) {
    console.error('Error al agregar usuario:', error);
    res.status(500).json({ message: 'Error interno al registrar el usuario' });
  }
};

module.exports = { obtenerUsuarios, agregarUsuario };
