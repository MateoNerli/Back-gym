const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productControllers");

router.get("/list", productsController.getAllProducts);
router.get("/product/:id", productsController.getProductById);
router.post("/create/", productsController.createProduct);
router.post("/update/:id", productsController.updateProduct);
router.delete("/delete/:id", productsController.deleteProduct);

module.exports = router;
