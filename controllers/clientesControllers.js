const db = require("../database/models");

const clientesController = {
  getAllClientes: async (req, res) => {
    try {
      const clientes = await db.Cliente.findAll();
      res.json(clientes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getClienteById: async (req, res) => {
    try {
      const cliente = await db.Cliente.findByPk(req.params.id);
      res.json(cliente);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createCliente: async (req, res) => {
    try {
      const cliente = await db.Cliente.create(req.body);
      res.json({ message: "Cliente created", cliente });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateCliente: async (req, res) => {
    try {
      await db.Cliente.update(req.body, {
        where: { idClientes: req.params.id },
      });
      res.json({ message: "Cliente updated" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteCliente: async (req, res) => {
    try {
      await db.Cliente.destroy({
        where: { idClientes: req.params.id },
      });
      res.json({ message: "Cliente deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = clientesController;
