const express = require("express");
const cors = require("cors");

// Rutas
const userRoutes = require("./routes/userRoutes");
const productsRoutes = require("./routes/productsRoutes");
const activitiesRoutes = require("./routes/activitiesRoutes");
const paymentMeansRoutes = require("./routes/paymentMeansRoutes");
const paymentPlansRoutes = require("./routes/patmentPlansRoutes");

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
app.use("/activities", activitiesRoutes);
app.use("/paymentMeans", paymentMeansRoutes);
app.use("/paymentPlans", paymentPlansRoutes);

app.listen(3000, () => {
  console.log("Server is running in http://localhost:3000/");
});
