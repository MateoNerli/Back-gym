const express = require("express");
const cors = require("cors");

// Rutas
const personasRoutes = require("./routes/personasRoutes");
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

app.listen(3000, () => {
  console.log("Server is running in http://localhost:3000/");
});
