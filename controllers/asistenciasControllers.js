const db = require("../database/models");

const asistenciasController = {
  getAllAsisitencias: async (req, res) => {
    try {
      const asisitencias = await db.Asistencias.findAll();
      res.json(asisitencias);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getAsisitenciaById: async (req, res) => {
    try {
      const asisitencia = await db.Asistencias.findByPk(req.params.id);
      res.json(asisitencia);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createAsisitencia: async (req, res) => {
    try {
      const asisitencia = await db.Asistencias.create(req.body);
      res.json({ message: "Asisitencia created", asisitencia });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateAsisitencia: async (req, res) => {
    try {
      await db.Asistencias.update(req.body, {
        where: { idAsistencias: req.params.id },
      });
      res.json({ message: "Asisitencia updated" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteAsisitencia: async (req, res) => {
    try {
      await db.Asistencias.destroy({
        where: { idAsistencias: req.params.id },
      });
      res.json({ message: "Asisitencia deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = asistenciasController;
