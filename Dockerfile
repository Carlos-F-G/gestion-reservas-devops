# Usa una imagen base oficial de Node.js
FROM node:14-alpine

# Crea y define el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y package-lock.json (si existe) para instalar dependencias
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto del código fuente al contenedor
COPY . .

# Expone el puerto en el que se ejecutará la aplicación (3000 en tu server.js)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
