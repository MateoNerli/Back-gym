const express = require("express");
const router = express.Router();

const personasController = require("../controllers/personasController");

router.get("/list", personasController.getAllPersons);
router.get("/:id", personasController.getPersonById);
router.post("/", personasController.createPerson);
router.put("/:id", personasController.updatePerson);
router.delete("/:id", personasController.deletePerson);

module.exports = router;
