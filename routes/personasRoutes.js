// personasRoutes.js

const express = require("express");
const router = express.Router();
const personasController = require("../controllers/personasController");

// Define la ruta para obtener todos los clientes
router.get("/clientes", personasController.getAllClientes);
router.get("/clientes/:dni", personasController.getClienteById);
router.post("/clientes/create", personasController.createCliente);
router.put("/clientes/:dni", personasController.updateCliente);
router.delete("/clientes/:dni", personasController.deleteCliente);

module.exports = router;
9;
