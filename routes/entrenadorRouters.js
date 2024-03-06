const express = require("express");
const router = express.Router();

const entrenadorController = require("../controllers/entrenadorControllers");

router.get("/list", entrenadorController.getAllEntrenadores);
router.get("/:id", entrenadorController.getEntrenadorById);
router.post("/create", entrenadorController.createEntrenador);
router.put("/update/:id", entrenadorController.updateEntrenador);
router.delete("/delete/:id", entrenadorController.deleteEntrenador);

module.exports = router;
