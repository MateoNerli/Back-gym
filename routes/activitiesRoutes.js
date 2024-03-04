const express = require("express");
const router = express.Router();

const activitiesController = require("../controllers/activitiesControllers");

router.get("/list", activitiesController.getAllActivities);
router.get("/activity/:id", activitiesController.getActivityById);
router.post("/create/", activitiesController.createActivity);
router.post("/update/:id", activitiesController.updateActivity);
router.delete("/delete/:id", activitiesController.deleteActivity);

module.exports = router;
