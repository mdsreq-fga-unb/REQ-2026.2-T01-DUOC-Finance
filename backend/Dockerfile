# Imagem de desenvolvimento: o código-fonte é montado via volume pelo docker-compose
FROM node:24-alpine

# OpenSSL é exigido pelo schema engine do Prisma (migrations) no Alpine
RUN apk add --no-cache openssl

WORKDIR /app

# O schema do Prisma entra antes do npm ci porque o postinstall roda "prisma generate"
COPY package.json package-lock.json prisma7.config.ts ./
COPY prisma ./prisma
RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
