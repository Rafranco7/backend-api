
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const userRoutes = require("./routes/user");
const serviceRoutes = require("./routes/service");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB conectado"))
  .catch((err) => console.error("Erro ao conectar:", err));

app.use("/api", userRoutes);
app.use("/api", serviceRoutes);

app.listen(PORT, () => console.log(`🚀 Servidor rodando em http://localhost:${PORT}`));
module.exports = app;

