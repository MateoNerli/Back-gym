const express = require("express");
const router = express.Router();

const promocionesController = require("../controllers/promocionesController");

router.get("/list", promocionesController.getAllPromociones);
router.get("/:id", promocionesController.getPromocionById);
router.post("/create/", promocionesController.createPromocion);
router.put("/:id", promocionesController.updatePromocion);
router.delete("/:id", promocionesController.delete);

module.exports = router;
