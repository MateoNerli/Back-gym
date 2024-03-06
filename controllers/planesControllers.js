const db = require("../database/models");

const planesController = {
  getAllPlanes: async (req, res) => {
    try {
      const planes = await db.Plan.findAll();
      res.json(planes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getPlanById: async (req, res) => {
    try {
      const plan = await db.Plan.findByPk(req.params.id);
      res.json(plan);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createPlan: async (req, res) => {
    try {
      const plan = await db.Plan.create(req.body);
      res.json({ message: "Plan created", plan });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updatePlan: async (req, res) => {
    try {
      await db.Plan.update(req.body, {
        where: { idPlanes: req.params.id },
      });
      res.json({ message: "Plan updated" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deletePlan: async (req, res) => {
    try {
      await db.Plan.destroy({
        where: { idPlanes: req.params.id },
      });
      res.json({ message: "Plan deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = planesController;
