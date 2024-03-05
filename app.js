const express = require("express");
const cors = require("cors");

// Rutas
const userRoutes = require("./routes/userRoutes");
const productsRoutes = require("./routes/productsRoutes");

const app = express();

// .ENV
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);
app.use("/products", productsRoutes);

app.listen(3000, () => {
  console.log("Server is running in http://localhost:3000/");
});
