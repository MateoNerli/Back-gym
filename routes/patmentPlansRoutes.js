const express = require("express");
const router = express.Router();

const paymentPlansController = require("../controllers/paymentPlansControllers");

router.get("/list", paymentPlansController.getAllPaymentPlans);
router.get("/paymentPlan/:id", paymentPlansController.getPaymentPlanById);
router.post("/create/", paymentPlansController.createPaymentPlan);
router.post("/update/:id", paymentPlansController.updatePaymentPlan);
router.delete("/delete/:id", paymentPlansController.deletePaymentPlan);

module.exports = router;
