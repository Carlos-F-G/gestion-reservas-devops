// tests/app.test.js
const request = require("supertest");
const app = require("../src/server"); // Ajusta la ruta si tu archivo se llama distinto o exportas la instancia

describe("GET /", () => {
  it("Debería responder con un mensaje de bienvenida", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain(
      "¡Bienvenido a la Gestión de Reservas DevOps!"
    );
  });
});
