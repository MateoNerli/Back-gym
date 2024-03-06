const express = require("express");
const cors = require("cors");

// Rutas
const asistenciasRoutes = require("./routes/asistenciasRouters");
const categoriaRouters = require("./routes/categoriaRouters");
const clienteRoutes = require("./routes/clientesRouters");
const entrenadorRoutes = require("./routes/entrenadorRouters");
const planesRoutes = require("./routes/planesRouters");
const productsRoutes = require("./routes/productsRoutes");
const rutinaRoutes = require("./routes/rutinasRouters");
const userRoutes = require("./routes/userRoutes");

const app = express();

// .ENV
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/asistencias", asistenciasRoutes);
app.use("/categoria", categoriaRouters);
app.use("/clientes", clienteRoutes);
app.use("/entrenadores", entrenadorRoutes);
app.use("/planes", planesRoutes);
app.use("/products", productsRoutes);
app.use("/rutinas", rutinaRoutes);
app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("Server is running in http://localhost:3000/");
});
