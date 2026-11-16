import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller.js';
import { AuthService } from './auth.service.js';

/** CAR-07 / RF13 — serviço e endpoint de autenticação. */
@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
