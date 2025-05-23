const express = require("express");
const app = express();

app.use(express.json());
app.use(require("cors")());

app.get("/", (req, res) => {
  res.send("API está corriendo 🚀");
});

app.post("/api/save-location", (req, res) => {
  console.log("BODY:", req.body);
  res.json({ status: "ok", location: req.body });
});

const PORT = process.env.PORT || 3000; // 👈 NECESARIO
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
