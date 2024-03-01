const db = require("../database/models/userModels");

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await db.User.findAll();
      res.json(users);
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  getUserById: async (req, res) => {
    try {
      const user = await db.User.findByPk(req.params.id);
      res.json(user);
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  createUser: async (req, res) => {
    try {
      const user = await db.User.create(req.body);
      res.json({ message: "User created", user });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  updateUser: async (req, res) => {
    try {
      await db.User.update(req.body, {
        where: { id: req.params.id },
      });
      res.json({ message: "User updated" });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      await db.User.destroy({
        where: { id: req.params.id },
      });
      res.json({ message: "User deleted" });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
};

module.exports = userController;
