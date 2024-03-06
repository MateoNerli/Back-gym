const express = require("express");
const router = express.Router();

const clientesController = require("../controllers/clientesControllers");

router.get("/list", clientesController.getAllClientes);
router.get("/:id", clientesController.getClienteById);
router.post("/create", clientesController.createCliente);
router.put("/update/:id", clientesController.updateCliente);
router.delete("/delete/:id", clientesController.deleteCliente);

module.exports = router;
