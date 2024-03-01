const express = require("express");
const router = express.Router();

const userController = require("../controllers/UserControllers");

router.get("/list", userController.getAllUsers);
router.get("/user/:id", userController.getUserById);
router.post("/create/", userController.createUser);
router.post("/update/:id", userController.updateUser);
router.delete("/delete/:id", userController.deleteUser);

module.exports = router;
