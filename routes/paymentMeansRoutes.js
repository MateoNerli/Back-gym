const express = require("express");
const router = express.Router();

const paymentMeansController = require("../controllers/paymentMeansControllers");

router.get("/list", paymentMeansController.getAllPaymentMeans);
router.get("/paymentMean/:id", paymentMeansController.getPaymentMeanById);
router.post("/create/", paymentMeansController.createPaymentMean);
router.post("/update/:id", paymentMeansController.updatePaymentMean);
router.delete("/delete/:id", paymentMeansController.deletePaymentMean);

module.exports = router;
