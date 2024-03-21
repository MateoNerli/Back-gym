const db = require("../database/models");

const personasController = {
  getAllClientes: async (req, res) => {
    try {
      const cliente = await db.Cliente.findAll({
        include: [
          { model: db.Persona, as: "persona" },
          { model: db.Plan, as: "Plan" },
          { model: db.Promocion, as: "promocion" },
          { model: db.FichaMedica, as: "FichaMedica" },
        ],
      });
      let respuesta = {
        meta: {
          status: 200,
          title: "Listado de clientes",
          total: cliente.length,
        },
        data: cliente,
      };
      res.json(respuesta);
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  getClienteById: async (req, res) => {
    try {
      const cliente = await db.Cliente.findByPk(req.params.dni, {
        include: [
          { model: db.Persona, as: "persona" },
          { model: db.Plan, as: "Plan" },
          { model: db.Promocion, as: "promocion" },
          {
            model: db.FichaMedica,
            as: "FichaMedica",
            include: [
              {
                model: db.EnfermedadFicha,
                as: "EnfermedadFicha",
              },
              {
                model: db.OperacionesFicha,
                as: "OperacionesFicha",
              },
            ],
          },
        ],
      });
      res.json(cliente);
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  createPerson: async (req, res) => {
    console.log(req.body);
    try {
      const person = await db.Persona.create(req.body);
      res.json({ message: "Persona creada exitosamente" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updatePerson: async (req, res) => {
    try {
      const person = await db.Persona.findByPk(req.params.id);
      person.update(req.body);
      res.json(person);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  deletePerson: async (req, res) => {
    try {
      const person = await db.Persona.findByPk(req.params.id);
      person.destroy();
      res.json(person);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};

module.exports = personasController;
