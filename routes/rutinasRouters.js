const express = require("express");
const router = express.Router();

const rutinasController = require("../controllers/rutinasProductos");

router.get("/list", rutinasController.getAllRutinas);
router.get("/:id", rutinasController.getRutinaById);
router.post("/create", rutinasController.createRutina);
router.put("/update/:id", rutinasController.updateRutina);
router.delete("/delete/:id", rutinasController.deleteRutina);

module.exports = router;
