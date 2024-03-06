const db = require("../database/models");

const categoriaController = {
  getAllCategorias: async (req, res) => {
    try {
      const categorias = await db.Categoria.findAll();
      res.json(categorias);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getCategoriaById: async (req, res) => {
    try {
      const categoria = await db.Categoria.findByPk(req.params.id);
      res.json(categoria);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createCategoria: async (req, res) => {
    try {
      const categoria = await db.Categoria.create(req.body);
      res.json({ message: "Categoria created", categoria });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateCategoria: async (req, res) => {
    try {
      await db.Categoria.update(req.body, {
        where: { idCategorias: req.params.id },
      });
      res.json({ message: "Categoria updated" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteCategoria: async (req, res) => {
    try {
      await db.Categoria.destroy({
        where: { idCategorias: req.params.id },
      });
      res.json({ message: "Categoria deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = categoriaController;
