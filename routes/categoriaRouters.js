const express = require("express");
const router = express.Router();

const categoriaController = require("../controllers/categoriaControllers");

router.get("/list", categoriaController.getAllCategorias);
router.get("/:id", categoriaController.getCategoriaById);
router.post("/create", categoriaController.createCategoria);
router.put("/update/:id", categoriaController.updateCategoria);
router.delete("/delete/:id", categoriaController.deleteCategoria);

module.exports = router;
