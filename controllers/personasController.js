const db = require("../database/models");

const personasController = {
  getAllPersons: async (req, res) => {
    try {
      const personas = await db.Persona.findAll();
      let respuesta = {
        meta: {
          status: 200,
          changeType: "positive",
          title: "Listado de usuarios",
          total: personas.length,
        },
        data: personas,
      };
      res.json(respuesta);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  getPersonById: async (req, res) => {
    try {
      const person = await db.Persona.findByPk(req.params.id);
      res.json(person);
    } catch (error) {
      res.json({ error: error.message });
      S;
    }
  },
  createPerson: async (req, res) => {
    try {
      const newPerson = await db.Persona.create(req.body);
      res.json(newPerson);
    } catch (error) {
      res.json({ error: error.message });
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
