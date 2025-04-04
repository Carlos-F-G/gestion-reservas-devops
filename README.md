# Proyecto: Gestión de Reservas - DevOps

## Descripción general

Este proyecto es una aplicación sencilla construida con Node.js y Express. Su objetivo principal es demostrar el uso de herramientas DevOps modernas como Docker, pruebas automatizadas, integración continua (CI) y manejo de ramas con Git y GitHub.

## Funcionalidades implementadas

1. **Docker**  
   Se creó un archivo Dockerfile que permite construir una imagen del proyecto y ejecutar la aplicación dentro de un contenedor.

2. **Pruebas automatizadas**  
   Se utilizaron las librerías Jest y Supertest para validar el funcionamiento del endpoint principal (`/`). Las pruebas se ejecutan localmente y también en el pipeline de GitHub Actions.

3. **CI/CD con GitHub Actions**  
   Se creó un flujo de trabajo automatizado que instala dependencias, ejecuta las pruebas y construye la imagen Docker cada vez que se hace un push o pull request a la rama principal (`main`).

4. **Gestión de ramas en la nube**  
   Se trabajó con dos ramas: `main` y `develop`. Se hicieron cambios en `develop` y se fusionaron en `main` mediante un pull request, aplicando buenas prácticas de integración.

## Estructura del proyecto

- `src/server.js`: Código fuente de la aplicación Express.
- `test/app.test.js`: Prueba del endpoint raíz.
- `Dockerfile`: Instrucciones para construir la imagen Docker.
- `.github/workflows/ci.yml`: Configuración del flujo de CI/CD.
- `README.md`: Documentación del proyecto.

## Instrucciones básicas

**Para ejecutar la aplicación localmente:**
```bash
npm install
npm start
