const express = require("express");
const router = express.Router();

const planController = require("../controllers/planController");

router.get("/list", planController.getAllPlanes);
router.get("/:id", planController.getPlanById);
router.post("/create/", planController.createPlan);
router.put("/:id", planController.updatePlan);
router.delete("/:id", planController.delete);

module.exports = router;
