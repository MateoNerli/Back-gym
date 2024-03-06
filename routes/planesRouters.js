const express = require("express");
const router = express.Router();

const planesController = require("../controllers/planesControllers");

router.get("/list", planesController.getAllPlanes);
router.get("/:id", planesController.getPlanById);
router.post("/create", planesController.createPlan);
router.put("/update/:id", planesController.updatePlan);
router.delete("/delete/:id", planesController.deletePlan);

module.exports = router;
