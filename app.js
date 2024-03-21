const express = require("express");
const cors = require("cors");

// Rutas
const personasRoutes = require("./routes/personasRoutes");
const planRoutes = require("./routes/planRoutes");
const promocionRoutes = require("./routes/promocionesRoutes");
const app = express();

// .ENV
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", personasRoutes);
app.use("/plans", planRoutes);
app.use("/promotions", promocionRoutes);

app.listen(3000, () => {
  console.log("Server is running in http://localhost:3000/");
});
