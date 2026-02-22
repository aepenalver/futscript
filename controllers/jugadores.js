const { getPlayers, addPlayer } = require('../db/consultas');

const obtenerJugadores = async (req, res) => {
  try {
    const { teamID } = req.params;

    if (!teamID) {
      return res.status(400).json({ message: 'El ID del equipo es requerido' });
    }

    const jugadores = await getPlayers(teamID);

    res.json(jugadores);
  } catch (error) {
    console.error('Error al obtener jugadores:', error);
    res
      .status(500)
      .json({ message: 'Error al obtener los jugadores del equipo' });
  }
};

const registrarJugador = async (req, res) => {
  try {
    const { teamID } = req.params;
    const jugador = req.body;

    if (!jugador.name || !teamID) {
      return res
        .status(400)
        .json({ message: 'Datos del jugador o ID de equipo incompletos' });
    }
    await addPlayer({ jugador, teamID });
    res.status(201).json({ message: 'Jugador agregado con éxito' });
  } catch (error) {
    console.error('Error al registrar jugador:', error);
    res
      .status(500)
      .json({ message: 'No se pudo registrar al jugador en la base de datos' });
  }
};

module.exports = { obtenerJugadores, registrarJugador };
