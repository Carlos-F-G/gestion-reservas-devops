// src/server.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("¡Bienvenido a la Gestión de Reservas DevOps!");
});

module.exports = app; // Exportamos la app para usarla en Supertest

// Solo iniciamos el listen si se ejecuta este archivo directamente
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });
}
