import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller.js';
import { AcessoController } from './acesso.controller.js';
import { AuthService } from './auth.service.js';
import { JwtAuthGuard } from './jwt-auth.guard.js';
import { RolesGuard } from './roles.guard.js';
import { AcessoService } from './acesso.service.js';

/** CAR-07 / RF13 — serviço e endpoint de autenticação. */
@Module({
  controllers: [AuthController, AcessoController],
  providers: [AuthService, AcessoService, JwtAuthGuard, RolesGuard],
})
export class AuthModule {}
