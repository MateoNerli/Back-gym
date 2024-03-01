const express = require("express");
const cors = require("cors");

// Rutas
const userRoutes = require("./routes/userRoutes");

const app = express();

// .ENV
require("dotenv").config();
// Base de datos
const sequelize = require("./database/config/config.js");

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
  sequelize.sync({ force: false });
  console.log("Database synchronized");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("Server is running in http://localhost:3000/");
});
