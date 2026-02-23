const jwt = require('jsonwebtoken');
const { credentialVerification, secretKey } = require('../utils');
require('dotenv').config();

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: 'Username y password son requeridos' });
    }

    await credentialVerification(username, password);

    const token = jwt.sign({ username }, secretKey, {
      expiresIn: process.env.JWT_EXPIRATION || '1h',
    });

    res.status(200).json({
      token,
      message: 'Login exitoso',
    });
  } catch (error) {
    console.error('Error en el login:', error.message);
    const statusCode = error.code || 500;
    const message = error.code
      ? error.message
      : 'Error interno en el proceso de autenticación';

    res.status(statusCode).json({ message });
  }
};

module.exports = login;
