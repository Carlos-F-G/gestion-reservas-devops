// src/server.js

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON (opcional)
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("¡Bienvenido a la Gestión de Reservas DevOps!");
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
