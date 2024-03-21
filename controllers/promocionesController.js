const db = require("../database/models");

const promocionesController = {
  getAllPromociones: async (req, res) => {
    try {
      const promociones = await db.Promocion.findAll();
      let respuesta = {
        meta: {
          status: 200,
          title: "Listado de promociones",
          total: promociones.length,
        },
        data: promociones,
      };
      res.json(respuesta);
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  getPromocionById: async (req, res) => {
    try {
      const promocion = await db.Promocion.findByPk(req.params.id);
      res.json(promocion);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  createPromocion: async (req, res) => {
    try {
      const newPromocion = await db.Promocion.create(req.body);
      res.json(newPromocion);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  updatePromocion: async (req, res) => {
    try {
      const promocion = await db.Promocion.findByPk(req.params.id);
      promocion.update(req.body);
      res.json(promocion);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const promocion = await db.Promocion.findByPk(req.params.id);
      promocion.destroy();
      res.json(promocion);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};

module.exports = promocionesController;
