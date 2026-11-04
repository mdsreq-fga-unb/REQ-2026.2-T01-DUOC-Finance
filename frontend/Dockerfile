# Imagem de desenvolvimento: o código-fonte é montado via volume pelo docker-compose
FROM node:24-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
