const request = require('supertest');
const server = require('../index');
require('dotenv').config();

describe('FutScript', () => {
  it('Obtener Array y Status Code 200 en ruta GET /equipos', async () => {
    const response = await request(server).get('/equipos').send();
    const status = response.statusCode;
    expect(response.body).toBeInstanceOf(Array);
    expect(status).toBe(200);
  });

  it('Obtener un Object en ruta POST /login enviando credenciales correctas', async () => {
    const usuario = { username: 'admin', password: '1234' };
    const { body, statusCode } = await request(server)
      .post('/login')
      .send(usuario);
    expect(body).toBeInstanceOf(Object);
    expect(statusCode).toBe(200);
  });

  it('Obtener Status Code 400 en ruta POST /login enviando credenciales incorrectas', async () => {
    const usuario = { username: 'user', password: '5678' };
    const { statusCode } = await request(server).post('/login').send(usuario);
    expect(statusCode).toBe(400);
  });

  it('Obtener Status Code 201 en la ruta POST /equipos/:teamID/jugadores al enviar token válido en cabecera', async () => {
    const jwt = require('jsonwebtoken');
    const tokenValido = jwt.sign({ username: 'admin' }, process.env.JWT_SECRET);
    const teamID = 2;
    const jugador = { name: 'Nuevo Jugador', position: 3 };
    const response = await request(server)
      .post(`/equipos/${teamID}/jugadores`)
      .set('Authorization', `Bearer ${tokenValido}`)
      .send(jugador);
    const status = response.statusCode;
    expect(status).toBe(201);
  });
});
