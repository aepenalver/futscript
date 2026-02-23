require('dotenv').config();
const { pool } = require('./db/consultas');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const secretKey = process.env.JWT_SECRET;

const credentialVerification = async (username, password) => {
  const query = 'SELECT * FROM usuarios WHERE username = $1';
  const {
    rows: [usuario],
    rowCount,
  } = await pool.query(query, [username]);

  if (!rowCount) throw { code: 400, message: 'Usuario no encontrado' };

  const passwordVerification = bcrypt.compareSync(password, usuario.password);

  if (!passwordVerification) {
    throw { code: 400, message: 'Password incorrecto' };
  }
  return usuario;
};

const tokenValidation = async (req, res, next) => {
  const Authorization = req.header('Authorization');

  if (!Authorization) {
    return res.status(400).send('Token no proporcionado');
  }

  const token = Authorization.split('Bearer ')[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = payload;

    next();
  } catch (error) {
    console.error('Error en validación de token:', error.message);
    res.status(400).json({ message: 'Token inválido o expirado' });
  }
};

module.exports = { secretKey, credentialVerification, tokenValidation };
