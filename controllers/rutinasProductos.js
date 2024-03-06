const db = require("../database/models");

const rutinaController = {
  getAllRutinas: async (req, res) => {
    try {
      const rutinas = await db.Rutina.findAll();
      res.json(rutinas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getRutinaById: async (req, res) => {
    try {
      const rutina = await db.Rutina.findByPk(req.params.id);
      res.json(rutina);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createRutina: async (req, res) => {
    try {
      const rutina = await db.Rutina.create(req.body);
      res.json({ message: "Rutina created", rutina });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateRutina: async (req, res) => {
    try {
      await db.Rutina.update(req.body, {
        where: { idRutinas: req.params.id },
      });
      res.json({ message: "Rutina updated" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteRutina: async (req, res) => {
    try {
      await db.Rutina.destroy({
        where: { idRutinas: req.params.id },
      });
      res.json({ message: "Rutina deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = rutinaController;
