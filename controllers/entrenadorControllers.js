const db = require("../database/models");

const entrenadorController = {
  getAllEntrenadores: async (req, res) => {
    try {
      const entrenadores = await db.Entrenador.findAll();
      res.json(entrenadores);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getEntrenadorById: async (req, res) => {
    try {
      const entrenador = await db.Entrenador.findByPk(req.params.id);
      res.json(entrenador);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createEntrenador: async (req, res) => {
    try {
      const entrenador = await db.Entrenador.create(req.body);
      res.json({ message: "Entrenador created", entrenador });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateEntrenador: async (req, res) => {
    try {
      await db.Entrenador.update(req.body, {
        where: { idEntrenadores: req.params.id },
      });
      res.json({ message: "Entrenador updated" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteEntrenador: async (req, res) => {
    try {
      await db.Entrenador.destroy({
        where: { idEntrenadores: req.params.id },
      });
      res.json({ message: "Entrenador deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = entrenadorController;
