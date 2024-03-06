const express = require("express");
const router = express.Router();

const asistenciasController = require("../controllers/asistenciasControllers");

router.get("/list", asistenciasController.getAllAsisitencias);
router.get("/:id", asistenciasController.getAsisitenciaById);
router.post("/create", asistenciasController.createAsisitencia);
router.put("/update/:id", asistenciasController.updateAsisitencia);
router.delete("/delete/:id", asistenciasController.deleteAsisitencia);

module.exports = router;
