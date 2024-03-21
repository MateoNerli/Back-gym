const express = require("express");
const router = express.Router();

const personasController = require("../controllers/personasController");

router.get("/clientes", personasController.getAllClientes);
router.get("/clientes/:dni", personasController.getClienteById);

router.post("/create", personasController.createPerson);
router.put("/:id", personasController.updatePerson);
router.delete("/:id", personasController.deletePerson);

module.exports = router;
