const { getTeams, addTeam } = require('../db/consultas');

const obtenerEquipos = async (req, res) => {
  try {
    const equipos = await getTeams();
    res.json(equipos);
  } catch (error) {
    console.error('Error al obtener equipos:', error);
    res
      .status(500)
      .json({ message: 'Error interno del servidor al obtener los datos' });
  }
};

const agregarEquipo = async (req, res) => {
  try {
    const equipo = req.body;
    await addTeam(equipo);
    res.send({ message: 'Equipo agregado con éxito' });
  } catch (error) {
    console.error('Error al agregar equipos:', error);
    res
      .status(500)
      .json({ message: 'Error interno del servidor al guardar el equipo' });
  }
};

module.exports = { obtenerEquipos, agregarEquipo };
