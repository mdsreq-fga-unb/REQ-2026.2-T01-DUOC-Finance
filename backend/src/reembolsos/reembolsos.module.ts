import { Module } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { RolesGuard } from '../auth/roles.guard.js';
import { ComprovanteStorageService } from './comprovante-storage.service.js';
import { ReembolsosController } from './reembolsos.controller.js';
import { ReembolsosService } from './reembolsos.service.js';

/** CAR-04 · Prestação de Contas / RF07 */
@Module({
  controllers: [ReembolsosController],
  providers: [ReembolsosService, ComprovanteStorageService, JwtAuthGuard, RolesGuard],
})
export class ReembolsosModule {}
