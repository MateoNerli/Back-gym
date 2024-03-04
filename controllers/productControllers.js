const db = require("../database/models");

const productController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await db.Product.findAll();
      res.json(products);
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  getProductById: async (req, res) => {
    try {
      const product = await db.Product.findByPk(req.params.id);
      res.json(product);
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  createProduct: async (req, res) => {
    try {
      const product = await db.Product.create(req.body);
      res.json({ message: "Product created", product });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  updateProduct: async (req, res) => {
    try {
      await db.Product.update(req.body, {
        where: { idProducts: req.params.id },
      });
      res.json({ message: "Product updated" });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      await db.Product.destroy({
        where: { idProducts: req.params.id },
      });
      res.json({ message: "Product deleted" });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
};
