const express = require("express");
const cors = require("cors");

// Rutas
const userRoutes = require("./routes/UserRoutes");

const app = express();

// .ENV
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("Server is running in http://localhost:3000/");
});
