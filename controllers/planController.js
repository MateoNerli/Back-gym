const db = require("../database/models");

const planController = {
  getAllPlanes: async (req, res) => {
    try {
      const planes = await db.Plan.findAll();
      let respuesta = {
        meta: {
          status: 200,
          title: "Listado de planes",
          total: planes.length,
        },
        data: planes,
      };
      res.json(respuesta);
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  getPlanById: async (req, res) => {
    try {
      const plan = await db.Plan.findByPk(req.params.id);
      res.json(plan);
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  createPlan: async (req, res) => {
    try {
      const newPlan = await db.Plan.create(req.body);
      res.json(newPlan);
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  updatePlan: async (req, res) => {
    try {
      const plan = await db.Plan.findByPk(req.params.id);
      plan.update(req.body);
      res.json(plan);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const plan = await db.Plan.findByPk(req.params.id);
      plan.destroy();
      res.json(plan);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};

module.exports = planController;
