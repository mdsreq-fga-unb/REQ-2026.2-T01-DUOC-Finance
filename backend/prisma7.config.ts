import { defineConfig } from 'prisma/config';

// DATABASE_URL é definida pelo docker-compose.yml (apontando para o serviço db)
export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    url: process.env['DATABASE_URL'],
  },
});
