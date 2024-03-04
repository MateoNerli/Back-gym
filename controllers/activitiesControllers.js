const db = require("../database/models");

const activitiesController = {
  getAllActivities: async (req, res) => {
    try {
      const activities = await db.Activity.findAll();
      res.json(activities);
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  getActivityById: async (req, res) => {
    try {
      const activity = await db.Activity.findByPk(req.params.id);
      res.json(activity);
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  createActivity: async (req, res) => {
    try {
      const activity = await db.Activity.create(req.body);
      res.json({ message: "Activity created", activity });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  updateActivity: async (req, res) => {
    try {
      await db.Activity.update(req.body, {
        where: { idActivities: req.params.id },
      });
      res.json({ message: "Activity updated" });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  deleteActivity: async (req, res) => {
    try {
      await db.Activity.destroy({
        where: { idActivities: req.params.id },
      });
      res.json({ message: "Activity deleted" });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
};
