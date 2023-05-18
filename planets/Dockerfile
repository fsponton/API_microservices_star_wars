FROM node:16

# Crea Carpeta
WORKDIR /app  

# copia archivos package a /app
COPY package*.json ./

#instalamos el package. json
RUN npm install

# copy fuente:nuestra carpeta    - destino": carpeta app docker  
COPY  .  .

# expone el puerto 800

EXPOSE 8000

#ejecuta la app
CMD ["npm", "start"]