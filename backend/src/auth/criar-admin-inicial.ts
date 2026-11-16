/**
 * Bootstrap administrativo LOCAL, executado explicitamente no terminal.
 * Não expõe rota pública nem sobrescreve contas já cadastradas.
 * Após `npm run build`, execute `node dist/auth/criar-admin-inicial.js`.
 */
import { PapelUsuario } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { gerarHashSenha } from './senha.util.js';

const email = process.env.BOOTSTRAP_ADMIN_EMAIL?.trim().toLowerCase();
const senha = process.env.BOOTSTRAP_ADMIN_PASSWORD;

if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !senha) {
  throw new Error('Defina BOOTSTRAP_ADMIN_EMAIL e BOOTSTRAP_ADMIN_PASSWORD.');
}

// Garante que o hash é gerado antes de qualquer gravação.
const senhaHash = await gerarHashSenha(senha);
const prisma = new PrismaService();
try {
  const existente = await prisma.usuario.findUnique({ where: { email } });
  if (existente) {
    throw new Error('Usuário já cadastrado; bootstrap não altera credenciais.');
  }

  await prisma.usuario.create({
    data: {
      email,
      senhaHash,
      papel: PapelUsuario.ADMIN_FINANCEIRO,
    },
  });
  console.log('Conta administrativa inicial criada com hash bcrypt.');
} finally {
  await prisma.$disconnect();
}
